import { createClient } from 'contentful-management';
import { Environment } from 'contentful-management/dist/typings/export-types';
import { NextApiRequest, NextApiResponse } from 'next';

import { contentfulConfig } from '../../../contentful.config.mjs';

import catchify from 'catchify';

// eslint-disable-next-line import/no-unresolved

const client = createClient({
  accessToken: contentfulConfig.contentful.main_space_management_token,
});

async function getAudiences(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { environmentId },
  } = req;

  const space = await client.getSpace(contentfulConfig.contentful.main_space_id);

  if (!space) {
    res.json([]);
    return;
  }

  let environment: Environment;

  if (environmentId) {
    const [environmentError, fetchedEnvironment] = await catchify(
      space.getEnvironment(environmentId as string),
    );

    if (environmentError) {
      console.error(environmentError);
      res.json([]);
      return;
    }

    environment = fetchedEnvironment;
  } else {
    // No environment was specified, we need to find the default one
    const [aliasError, alias] = await catchify(space.getEnvironmentAlias('master'));

    if (!alias || aliasError) {
      // Looks like the aliases are not set up yet, we just default to the
      // master environment

      if (aliasError !== null) {
        console.error(aliasError);
      }

      environment = await space.getEnvironment('master');
    } else {
      const [environmentError, fetchedEnvironment] = await catchify(
        space.getEnvironment(alias.environment.sys.id),
      );

      if (environmentError) {
        console.error(environmentError);
        res.json([]);
        return;
      }

      environment = fetchedEnvironment;
    }
  }

  if (!environment) {
    res.json([]);
    return;
  }

  const audiences: {
    id: string;
    name: string;
    description: string;
  }[] = [];

  const [audienceEntriesError, audienceEntries] = await catchify(
    environment.getEntries({
      content_type: 'nt_audience',
      limit: 100,
      'sys.archivedAt[exists]': false,
      'sys.publishedAt[exists]': true,
    }),
  );

  if (audienceEntriesError) {
    console.error(audienceEntriesError);
    res.json([]);
    return;
  }

  audienceEntries.items.forEach(audienceEntry => {
    const audience = {
      id: '',
      name: '',
      description: '',
    };

    if (audienceEntry.fields.name) {
      audience.name = audienceEntry.fields.name[
        Object.keys(audienceEntry.fields.name)[0]
      ] as string;
    }

    if (audienceEntry.fields.description) {
      audience.description = audienceEntry.fields.description[
        Object.keys(audienceEntry.fields.description)[0]
      ] as string;
    }

    audience.id = audienceEntry.sys.id;

    audiences.push(audience);
  });

  res.json(audiences);
}

async function getEnvironments(_req: NextApiRequest, res: NextApiResponse) {
  const environmentNames = [] as string[];

  const space = await client.getSpace(contentfulConfig.contentful.main_space_id);

  if (!space) {
    res.json([]);
    return;
  }

  const [environmentsError, environments] = await catchify(
    space.getEnvironments({
      limit: 100,
    }),
  );

  if (environmentsError !== null) {
    res.json([]);
    return;
  }

  const [aliasError, alias] = await catchify(space.getEnvironmentAlias('master'));

  if (aliasError !== null && aliasError.message.includes('Not Found') === false) {
    res.json([]);
    return;
  }

  let defaultEnvironment = 'master';

  if (alias) {
    const [environmentError, fetchedEnvironment] = await catchify(
      space.getEnvironment(alias.environment.sys.id),
    );

    if (environmentError) {
      res.json([]);
      return;
    }

    defaultEnvironment = fetchedEnvironment.sys.id;
  }

  const environmentsList = new Set(
    environments.items
      .map(environment => ({
        name:
          environment.name === defaultEnvironment
            ? `${defaultEnvironment} (default)`
            : environment.name,
        createdAt: environment.sys.createdAt,
      }))
      .filter(environment => {
        if (environmentNames.includes(environment.name)) {
          return false;
        }

        environmentNames.push(environment.name);

        return true;
      })
      .sort((a, b) => {
        if (a.name === `${defaultEnvironment} (default)`) {
          return -1;
        }

        if (b.name === `${defaultEnvironment} (default)`) {
          return 1;
        }

        return a.name.localeCompare(b.name);
      }),
  );

  res.json(Array.from(environmentsList));
}

interface LocaleInterface {
  code: string;
}

async function getLocales(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { environmentId },
  } = req;

  const space = await client.getSpace(contentfulConfig.contentful.main_space_id);

  if (!space) {
    res.json([]);
    return;
  }

  let environment: Environment;

  if (environmentId) {
    const [environmentError, fetchedEnvironment] = await catchify(
      space.getEnvironment(environmentId as string),
    );

    if (environmentError) {
      res.json([]);
      return;
    }

    environment = fetchedEnvironment;
  } else {
    // No environment was specified, we need to find the default one
    const [aliasError, alias] = await catchify(space.getEnvironmentAlias('master'));

    if (!alias || aliasError) {
      // Looks like the aliases are not set up yet, we just default to the
      // master environment
      environment = await space.getEnvironment('master');
    } else {
      const [environmentError, fetchedEnvironment] = await catchify(
        // Wrong TS types
        space.getEnvironment((alias.environment as any).sys.id),
      );

      if (environmentError) {
        res.json([]);
        return;
      }

      environment = fetchedEnvironment;
    }
  }

  if (!environment) {
    res.json([]);
    return;
  }

  const locales = (await environment.getLocales()) as unknown as {
    items: LocaleInterface[];
  };

  if (!locales) {
    res.json([]);
    return;
  }

  const localesList = new Set(locales.items.map(locale => locale.code));

  res.json(Array.from(localesList));
}

const fnMap = {
  audiences: getAudiences,
  environments: getEnvironments,
  locales: getLocales,
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { api },
  } = req;

  if (api === undefined || fnMap[api as string] === undefined) {
    res.json([]);
    return;
  }

  await fnMap[api as string](req, res);
}
