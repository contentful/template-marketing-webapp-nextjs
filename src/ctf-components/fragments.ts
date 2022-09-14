import gql from 'graphql-tag';

export const componentReferenceFragment = gql`
  fragment ComponentReferenceFragment on Entry {
    __typename
    sys {
      id
    }
    ... on ComponentCta {
      internalName
    }
    ... on ComponentDuplex {
      internalName
    }
    ... on ComponentFeaturedCards {
      internalName
    }
    ... on ComponentHeroBanner {
      internalName
    }
    ... on ComponentInfoBlock {
      internalName
    }
    ... on ComponentProductTable {
      internalName
    }
    ... on ComponentQuote {
      internalName
    }
    ... on ComponentTextBlock {
      internalName
    }
    ... on TopicBusinessInfo {
      internalName
    }
    ... on TopicPerson {
      internalName
    }
    ... on TopicProduct {
      internalName
    }
    ... on WrapperExternalAsset {
      internalName
    }
  }
`;
