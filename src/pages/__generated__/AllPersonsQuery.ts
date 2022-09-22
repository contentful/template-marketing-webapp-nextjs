/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPersonsQuery
// ====================================================

export interface AllPersonsQuery_topicPersonCollection_items_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPersonsQuery_topicPersonCollection_items_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface AllPersonsQuery_topicPersonCollection_items_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface AllPersonsQuery_topicPersonCollection_items_avatar {
  __typename: "Asset";
  sys: AllPersonsQuery_topicPersonCollection_items_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface AllPersonsQuery_topicPersonCollection_items {
  __typename: "TopicPerson";
  sys: AllPersonsQuery_topicPersonCollection_items_sys;
  internalName: string | null;
  name: string | null;
  bio: AllPersonsQuery_topicPersonCollection_items_bio | null;
  avatar: AllPersonsQuery_topicPersonCollection_items_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface AllPersonsQuery_topicPersonCollection {
  __typename: "TopicPersonCollection";
  items: (AllPersonsQuery_topicPersonCollection_items | null)[];
}

export interface AllPersonsQuery {
  topicPersonCollection: AllPersonsQuery_topicPersonCollection | null;
}

export interface AllPersonsQueryVariables {
  locale?: string | null;
  preview?: boolean | null;
}
