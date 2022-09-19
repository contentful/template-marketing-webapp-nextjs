import { HttpLink } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import { introspectSchema, makeRemoteExecutableSchema } from 'graphql-tools';
import fetch from 'isomorphic-unfetch';

export function createContentfulLink(spaceId: string, apiKey: string) {
  const uri = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;
  return setContext(request => ({
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  })).concat(new HttpLink({ uri, fetch }));
}

export async function getCfulExecutableScheme(spaceId: string, apiKey: string) {
  const cfulLink = createContentfulLink(spaceId, apiKey);
  return makeRemoteExecutableSchema({
    schema: await introspectSchema(cfulLink),
    link: cfulLink,
  });
}
