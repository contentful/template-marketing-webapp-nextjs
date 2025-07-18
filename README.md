# Contentful Marketing Starter Template

A Marketing Starter Template powered by Next.js & Contentful, pre-designed with optimized & adjustable pages,
components, and data management.

![The homepage of the Marketing Starter Template](marketing-starter-template.jpg 'The homepage of the Marketing Starter Template')

$~$

## What is Contentful?

[Contentful](https://www.contentful.com/) provides content infrastructure for digital teams to power websites, apps, and
devices. Unlike a CMS, Contentful was built to integrate with the modern software stack. It offers a central hub for
structured content, powerful management, and delivery APIs, and a customizable web app that enables developers and
content creators to ship their products faster.

$~$

## DISCLAIMER ⚠️

The Starter Templates experience is currently only available to new users.

To benefit from this experience, please follow this link to create a new
account and select the template to install: [https://www.contentful.com/starter-templates/marketing-website/sign-up/?action=create_starter_template](https://www.contentful.com/starter-templates/marketing-website/sign-up/?action=create_starter_template&utm_source=github.com&utm_medium=referral&utm_campaign=template-marketing-webapp-nextjs).

Alternatively, to immediately start the auto installation of this template after creating a new account, please follow this link:
[https://www.contentful.com/starter-templates/marketing-website/sign-up/?action=create_starter_template&template_name=marketing](https://www.contentful.com/starter-templates/marketing-website/sign-up/?action=create_starter_template&template_name=marketing&utm_source=github.com&utm_medium=referral&utm_campaign=template-marketing-webapp-nextjs).

$~$

## Begin your journey with Contentful and the Marketing Starter Template

Follow this [guide](https://github.com/contentful/template-marketing-webapp-nextjs/blob/main/docs/tutorials/contentful-and-the-starter-template.md/?utm_source=github.com-guide&utm_medium=referral&utm_campaign=template-marketing-webapp-nextjs) to understand the relationship between
Contentful and the Starter Template source code through guided steps:

- Entry editing, and updates preview in the Starter Template application (online/locally)
- Content type editing in the Contentful web app, as well as in the Starter Template's code

$~$

## Features

- Composable content through powerful & flexible content modeling.
- Localization ready.
- SEO ready.
- Server-side rendering with Next.js[^1].
- Optimized data management with React Query[^2].
- Generation of GraphQL[^3] typed code (schema, types, and React Query hooks), in sync with the content types through
  graphql-codegen[^4].
- Enhanced Developer Experience with TypeScript[^5].

$~$

## Getting started

To get started, read the following guidelines.

- [Environment variables](./README.md#environment-variables)
- [Dependencies](./README.md#dependencies)
- [Development](./README.md#development)
- [Contentful API & GraphQL](./README.md#contentful-api--graphql)
- [Contentful Components](./README.md#contentful-components)
- [Deployment](./README.md#deployment)

$~$

### Environment variables

In order to authenticate the requests to the Contentful APIs, the following values are necessary:

- Your space ID: [https://www.contentful.com/help/find-space-id/](https://www.contentful.com/help/find-space-id/)
- Contentful Delivery API
  token: [https://www.contentful.com/developers/docs/references/content-delivery-api/](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- Contentful Preview API
  token: [https://www.contentful.com/developers/docs/references/content-preview-api/](https://www.contentful.com/developers/docs/references/content-preview-api/)

Rename the `.env.example` file to `.env` and add the necessary values.

$~$

### Dependencies

To install the necessary dependencies, run:

```bash
yarn
```

### Run the Starter Template in development mode

```bash
yarn dev
```

The Starter Template should be up and running on `http://localhost:3000`.

All necessary dependencies are installed under `node_modules` and any necessary tools can be accessed via npm scripts.

$~$

## Development

### Husky & git hooks

This repository makes use of [Husky](https://github.com/typicode/husky) to enforce commit hooks.

The config for both the `pre-commit` and `pre-push` hooks can be found in the `.husky` folder, located in the root of
the project.

---

#### Pre-commit

Before allowing a commit, we require a successful result from the TypeScript compiler (`tsc`) and our `lint-staged`
script will be run.

This ensures all ESLint and Prettier rules are enforced on the files that are staged to be committed.

The `tsc` command is run separately from the `lint-staged` step because we require the Typescript compiler to sample
_all_ files.

This is important to ensure that no deviating types were introduced by
the [codegen](./README.md#graphql--code-generation) for example.

---

#### Pre-push

The same two tasks are run for pre-push and for pre-commit.

---

#### Overriding the Husky git hooks

In case of wanting to bypass the `pre-commit` or `pre-push` hooks, pass a `--noVerify` flag to your Git commands.

⚠️ Make sure you only use this if you know why you're using it. ⚠️

$~$

### Contentful API & GraphQL

This project makes use of Contentful's [GraphQL API](https://www.contentful.com/developers/docs/references/graphql/).

API calls made to the Contentful GraphQL endpoint are made through React Query `useQuery` hooks.

The hooks are generated from the `.graphql` files collocated within the components, the following happens:

1. `[folderName]/[fileName].graphql` file, containing a query, is detected by
   the [codegen](./README.md#graphql--code-generation)
2. `[folderName]/__generated/[fileName].generated.ts` is generated
3. Within the generated file, a new hook is generated with the following pattern: `use[fileName]`
4. The hook can now be imported and used within the `.ts(x)` files in the component folder

$~$

### GraphQL & code generation

We use `graphql-codegen` to generate a type-safe API client, utilizing [React Query](https://tanstack.com/query/v4/) as
the "client".

The data for the hooks is pre-fetched on the server-side.

For more information on how this data is hydrated please
read [the official documentation](https://tanstack.com/query/v4/docs/guides/ssr#using-hydration).

---

#### Commands

In order to (re-)generate the GraphQL schema, types and hooks, please use either of the following commands:

- `yarn graphql-codegen:generate` generates a schema, types and code to fetch data from the Contentful APIs
- `yarn graphql-codegen:watch` similar to the `generate` command, but it runs as a watch task which will rerun the steps
  when changes are made in the `.graphql` files

The first steps of the codegen generate files that contain the GraphQL schema and matching TypeScript types.
They're generated to the `src/lib/__generated` folder and ought to be committed once altered/added to the repository.

Additionally, the codegen watches .graphql files in our `src` folder, if it runs successfully it generates
a `__generated` folder collocated in the folder where the `.graphql` file was found.

One exception to this rule is the `src/lib/fragments` folder which contains shared GraphQL Fragments that are used in
several other queries/fragments.

The TS types for these files are generated in the same location, in a `__generated` folder and like the other files
ought to be committed.

---

#### Configuration

The configuration for the codegen can be found in `codegen.ts`, located in the root of the project.

$~$

### Contentful Components

The term _Contentful Components_ (_ctf-components_ for short) is used for React components that have an equivalent
Contentful _content type_.

E.g. all React components needed for rendering the _content-type_ `HeroBanner` can be found in the
folder `src/features/ctf-components/ctf-hero-banner`.

Usually a _ctf-component_ is composed of 3 files:

- `ctf-[contentypeName].graphql`: holding the query strings needed for the GraphQL request to fetch the components data.
- `ctf-[contentypeName]-gql.tsx`: React component which executes the GraphQL query and passes the result to a component
  for rendering.
- `ctf-[contentypeName].tsx`: the React component which is actually rendering the content type.

Optionally, a folder with TypeScript interfaces which were generated by GraphQL codegen can also be included:

- `/__generated/`: (see [GraphQL & code generation](./README.md#graphql--code-generation)).

$~$

### Component Resolver and content type mapping

There is a _component-resolver_ (_./src/components/component-resolver.tsx_) React component, which is used to pick the
right React component for rendering a _content-type_.

It requires as properties the _content type_ `id`, its `__typename` (used by live preview), and optionally the content.

The **component-resolver** then uses a key map to find the right React component (`./src/mappings.ts`), where the key is
the _content type_ name and the value is the React component.

It will check the map `componentMap` first, and if the _content type_ could be resolved it is assumed all content is
available.
The content is then passed to the React component.

If the _content type_ could not be resolved, `componentGqlMap` will be used for resolving.
If the React component is found the _content type_ `id` and `__typename` will be passed, which is used
by the component to fetch its data.

According to this pattern, all _ctf-components_ suffixed with `-gql` should be added to `componentGqlMap` and all
without a suffix should be added to `componentMap`.

$~$

### Creating new Contentful Components

Creating new _ctf-components_ involve the following steps:

- Create a folder for the component files (`./src/ctf-components/ctf-[contentTypeName]`)
- Create the file for the GraphQL query strings (`./src/ctf-components/ctf-[contentTypeName].graphql`)
- Optionally, generate TypeScript interfaces for the GraphQL result by calling `yarn graphql-codegen:generate` (
  see [GraphQL & code generation](./README.md#graphql--code-generation)).
- Create the React components for rendering (`./src/ctf-components/ctf-[contentTypeName]-gql.tsx`
  and `./src/ctf-components/ctf-[contentTypeName].tsx`).
- Add the component to the `componentGqlMap` in `./src/mappings.ts`.

$~$

---

$~$

## Deployment

The Starter Template can be deployed to your hosting provider of choice.

We offer integrations with Vercel and Netlify to speed up the process by clicking one of the deploy buttons below. The GitHub repository and
the necessary environment variables keys are pre-configured in the hosting provider space.

| Vercel                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Netlify                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs&env=CONTENTFUL_SPACE_ID,CONTENTFUL_ACCESS_TOKEN,CONTENTFUL_PREVIEW_ACCESS_TOKEN&envDescription=API%20Keys%20needed%20for%20the%20application&envLink=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs%23environment-variables) | [![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https%3A%2F%2Fgithub.com%2Fcontentful%2Ftemplate-marketing-webapp-nextjs#CONTENTFUL_SPACE_ID=&CONTENTFUL_ACCESS_TOKEN=&CONTENTFUL_PREVIEW_ACCESS_TOKEN=) |
| [Environment variables docs](https://vercel.com/docs/concepts/projects/environment-variables)                                                                                                                                                                                                                                                                                                                                                                                              | [Environment variables docs](https://docs.netlify.com/environment-variables/overview/)                                                                                                                                                                                                                                                            |

Make sure to add the necessary [environment variables values](./README.md#environment-variables) to the hosting provider
environment variables.

---

### Content preview & live preview

Once you have the Starter Template deployed on your hosting provider, you can update the Content preview URL in your
space settings.

You can follow our guide to learn how to do
so: [https://www.contentful.com/help/setup-content-preview](https://www.contentful.com/help/setup-content-preview/?utm_source=github.com-preview-guide&utm_medium=referral&utm_campaign=template-marketing-webapp-nextjs).

For the live preview the basic field tagging for the inspector mode and live updates are already implemented.
For custom components, you can find the instructions at our [guide](https://www.contentful.com/developers/docs/tutorials/general/live-preview/).

$~$

---

$~$

## Support

If you have a problem with this Starter Template, post a message in
our [Contentful Community Slack](https://www.contentful.com/slack/).

Can't find your answer there? You can file a feedback issue
through [this template](https://github.com/contentful/template-marketing-webapp-nextjs/tree/main/.github/ISSUE_TEMPLATE/feedback.md).

If you have other problems with Contentful not related to the Starter Template, you can contact
the [Customer Support](https://support.contentful.com/).

$~$

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

$~$

## License

MIT License, see [LICENSE](./LICENSE).

$~$

<!-- FOOTNOTES -->

[^1]: [Next.js docs](https://nextjs.org/docs/getting-started)
[^2]: [React Query](https://tanstack.com/query/v4/docs/overview)
[^3]: [GraphQL docs](https://graphql.org/learn/)
[^4]: [graphql-codegen](https://www.the-guild.dev/graphql/codegen)
[^5]: [TypeScript](https://www.typescriptlang.org/)
[^note]: [React docs](https://reactjs.org/docs/getting-started.html)
