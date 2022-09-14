import gql from 'graphql-tag';

export const ninetailedAudienceFragment = gql`
  fragment NinetailedAudienceFragment on NtAudience {
    sys {
      id
    }
    __typename
    name: ntName
    id: ntAudienceId
  }
`;
