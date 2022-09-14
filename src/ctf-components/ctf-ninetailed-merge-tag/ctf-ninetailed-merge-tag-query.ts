import gql from 'graphql-tag';

export const ninetailedMergeTagFragment = gql`
  fragment NinetailedMergeTagFragment on NtMergetag {
    sys {
      id
    }
    __typename
    id: ntMergetagId
  }
`;

export const query = gql`
  query CtfNinetailedMergeTagQuery(
    $id: String!
    $locale: String
    $preview: Boolean
  ) {
    ntMergetag(id: $id, locale: $locale, preview: $preview) {
      ...NinetailedMergeTagFragment
    }
  }
  ${ninetailedMergeTagFragment}
`;
