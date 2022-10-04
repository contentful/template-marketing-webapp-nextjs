import gql from 'graphql-tag';

import { assetFragment } from '@ctf-components/ctf-asset/ctf-asset-query';

// TODO: remove once Apollo is fully gone

export const personFragment = gql`
  fragment PersonFragment on TopicPerson {
    __typename
    sys {
      id
    }
    internalName
    name
    bio {
      json
    }
    avatar {
      ...AssetFragment
    }
    website
    location
    cardStyle
  }
  ${assetFragment}
`;

export const query = gql`
  query CtfPersonQuery($id: String!, $locale: String, $preview: Boolean) {
    topicPerson(id: $id, preview: $preview, locale: $locale) {
      ...PersonFragment
    }
  }
  ${personFragment}
`;
