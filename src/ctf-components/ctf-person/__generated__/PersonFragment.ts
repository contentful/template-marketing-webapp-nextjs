/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: PersonFragment
// ====================================================

export interface PersonFragment_sys {
  __typename: "Sys";
  id: string;
}

export interface PersonFragment_bio {
  __typename: "TopicPersonBio";
  json: any;
}

export interface PersonFragment_avatar_sys {
  __typename: "Sys";
  id: string;
}

export interface PersonFragment_avatar {
  __typename: "Asset";
  sys: PersonFragment_avatar_sys;
  contentType: string | null;
  title: string | null;
  description: string | null;
  width: number | null;
  height: number | null;
  url: string | null;
}

export interface PersonFragment {
  __typename: "TopicPerson";
  sys: PersonFragment_sys;
  internalName: string | null;
  name: string | null;
  bio: PersonFragment_bio | null;
  avatar: PersonFragment_avatar | null;
  website: string | null;
  location: string | null;
  cardStyle: boolean | null;
}
