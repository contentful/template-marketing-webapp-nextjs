/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CtfPersonQuery
// ====================================================

export interface CtfPersonQuery_topicPerson_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPersonQuery_topicPerson_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface CtfPersonQuery_topicPerson_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface CtfPersonQuery_topicPerson_avatar {
  __typename: "Asset";
  sys: CtfPersonQuery_topicPerson_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface CtfPersonQuery_topicPerson {
  __typename: "TopicPerson";
  sys: CtfPersonQuery_topicPerson_sys;
  internalName: string | null;
  name: string | null;
  bio: CtfPersonQuery_topicPerson_bio | null;
  avatar: CtfPersonQuery_topicPerson_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}

export interface CtfPersonQuery {
  topicPerson: CtfPersonQuery_topicPerson | null;
}

export interface CtfPersonQueryVariables {
  id: string;
  locale?: string | null;
  preview?: boolean | null;
}
