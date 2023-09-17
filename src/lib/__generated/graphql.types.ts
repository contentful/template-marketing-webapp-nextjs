export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Dimension: any;
  HexColor: any;
  JSON: any;
  Quality: any;
};

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlock = Entry & {
  __typename?: 'AmCtaFeatureBlock';
  backgroundImage?: Maybe<Asset>;
  bodyCopy?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaCopy?: Maybe<Scalars['String']>;
  ctaTargetLink?: Maybe<Scalars['String']>;
  featuredMedia?: Maybe<Asset>;
  headline?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmCtaFeatureBlockLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockBodyCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockCtaCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockCtaTargetLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockFeaturedMediaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amCtaFeatureBlock) */
export type AmCtaFeatureBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AmCtaFeatureBlockCollection = {
  __typename?: 'AmCtaFeatureBlockCollection';
  items: Array<Maybe<AmCtaFeatureBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmCtaFeatureBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmCtaFeatureBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmCtaFeatureBlockFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  bodyCopy?: InputMaybe<Scalars['String']>;
  bodyCopy_contains?: InputMaybe<Scalars['String']>;
  bodyCopy_exists?: InputMaybe<Scalars['Boolean']>;
  bodyCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  bodyCopy_not?: InputMaybe<Scalars['String']>;
  bodyCopy_not_contains?: InputMaybe<Scalars['String']>;
  bodyCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCopy?: InputMaybe<Scalars['String']>;
  ctaCopy_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_exists?: InputMaybe<Scalars['Boolean']>;
  ctaCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaCopy_not?: InputMaybe<Scalars['String']>;
  ctaCopy_not_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink?: InputMaybe<Scalars['String']>;
  ctaTargetLink_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTargetLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink_not?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  featuredMedia_exists?: InputMaybe<Scalars['Boolean']>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AmCtaFeatureBlockLinkingCollections = {
  __typename?: 'AmCtaFeatureBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmCtaFeatureBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmCtaFeatureBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmCtaFeatureBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmCtaFeatureBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmCtaFeatureBlockOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsights = Entry & {
  __typename?: 'AmFeaturedInsights';
  additionalInsightsCollection?: Maybe<AmFeaturedInsightsAdditionalInsightsCollection>;
  contentfulMetadata: ContentfulMetadata;
  enableNewsBlock?: Maybe<Scalars['Boolean']>;
  featuredInsight?: Maybe<AmInsights>;
  featuredNewsCollection?: Maybe<AmFeaturedInsightsFeaturedNewsCollection>;
  headerText?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmFeaturedInsightsLinkingCollections>;
  newsHeaderText?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsAdditionalInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsAdditionalInsightsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmInsightsFilter>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsEnableNewsBlockArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsFeaturedInsightArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AmInsightsFilter>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsFeaturedNewsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsFeaturedNewsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsArticleFilter>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Featured insights and news [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedInsights) */
export type AmFeaturedInsightsNewsHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmFeaturedInsightsAdditionalInsightsCollection = {
  __typename?: 'AmFeaturedInsightsAdditionalInsightsCollection';
  items: Array<Maybe<AmInsights>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedInsightsAdditionalInsightsCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type AmFeaturedInsightsCollection = {
  __typename?: 'AmFeaturedInsightsCollection';
  items: Array<Maybe<AmFeaturedInsights>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmFeaturedInsightsFeaturedNewsCollection = {
  __typename?: 'AmFeaturedInsightsFeaturedNewsCollection';
  items: Array<Maybe<NewsArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedInsightsFeaturedNewsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmFeaturedInsightsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsFilter>>>;
  additionalInsights?: InputMaybe<CfAmInsightsNestedFilter>;
  additionalInsightsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  enableNewsBlock?: InputMaybe<Scalars['Boolean']>;
  enableNewsBlock_exists?: InputMaybe<Scalars['Boolean']>;
  enableNewsBlock_not?: InputMaybe<Scalars['Boolean']>;
  featuredInsight?: InputMaybe<CfAmInsightsNestedFilter>;
  featuredInsight_exists?: InputMaybe<Scalars['Boolean']>;
  featuredNews?: InputMaybe<CfNewsArticleNestedFilter>;
  featuredNewsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  headerText?: InputMaybe<Scalars['String']>;
  headerText_contains?: InputMaybe<Scalars['String']>;
  headerText_exists?: InputMaybe<Scalars['Boolean']>;
  headerText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerText_not?: InputMaybe<Scalars['String']>;
  headerText_not_contains?: InputMaybe<Scalars['String']>;
  headerText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  newsHeaderText?: InputMaybe<Scalars['String']>;
  newsHeaderText_contains?: InputMaybe<Scalars['String']>;
  newsHeaderText_exists?: InputMaybe<Scalars['Boolean']>;
  newsHeaderText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  newsHeaderText_not?: InputMaybe<Scalars['String']>;
  newsHeaderText_not_contains?: InputMaybe<Scalars['String']>;
  newsHeaderText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AmFeaturedInsightsLinkingCollections = {
  __typename?: 'AmFeaturedInsightsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmFeaturedInsightsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmFeaturedInsightsLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmFeaturedInsightsLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmFeaturedInsightsOrder {
  EnableNewsBlockAsc = 'enableNewsBlock_ASC',
  EnableNewsBlockDesc = 'enableNewsBlock_DESC',
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  NewsHeaderTextAsc = 'newsHeaderText_ASC',
  NewsHeaderTextDesc = 'newsHeaderText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMedia = Entry & {
  __typename?: 'AmFeaturedMedia';
  contentfulMetadata: ContentfulMetadata;
  ctaCopy?: Maybe<Scalars['String']>;
  ctaTargetLink?: Maybe<Scalars['String']>;
  headerText?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmFeaturedMediaLinkingCollections>;
  podcastsCollection?: Maybe<AmFeaturedMediaPodcastsCollection>;
  sys: Sys;
  videosCollection?: Maybe<AmFeaturedMediaVideosCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaCtaCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaCtaTargetLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaPodcastsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaPodcastsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmInsightsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMedia) */
export type AmFeaturedMediaVideosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaVideosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmInsightsFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlock = Entry & {
  __typename?: 'AmFeaturedMediaBlock';
  contentfulMetadata: ContentfulMetadata;
  featuredPodcast?: Maybe<AmPodcasts>;
  featuredVideo?: Maybe<AmVideos>;
  headerText?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmFeaturedMediaBlockLinkingCollections>;
  podcastsCollection?: Maybe<AmFeaturedMediaBlockPodcastsCollection>;
  sys: Sys;
  videosCollection?: Maybe<AmFeaturedMediaBlockVideosCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockFeaturedPodcastArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AmPodcastsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockFeaturedVideoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<AmVideosFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockPodcastsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockPodcastsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmPodcastsFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amFeaturedMediaBlock) */
export type AmFeaturedMediaBlockVideosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockVideosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmVideosFilter>;
};

export type AmFeaturedMediaBlockCollection = {
  __typename?: 'AmFeaturedMediaBlockCollection';
  items: Array<Maybe<AmFeaturedMediaBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmFeaturedMediaBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPodcast?: InputMaybe<CfAmPodcastsNestedFilter>;
  featuredPodcast_exists?: InputMaybe<Scalars['Boolean']>;
  featuredVideo?: InputMaybe<CfAmVideosNestedFilter>;
  featuredVideo_exists?: InputMaybe<Scalars['Boolean']>;
  headerText?: InputMaybe<Scalars['String']>;
  headerText_contains?: InputMaybe<Scalars['String']>;
  headerText_exists?: InputMaybe<Scalars['Boolean']>;
  headerText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerText_not?: InputMaybe<Scalars['String']>;
  headerText_not_contains?: InputMaybe<Scalars['String']>;
  headerText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  podcasts?: InputMaybe<CfAmPodcastsNestedFilter>;
  podcastsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  videos?: InputMaybe<CfAmVideosNestedFilter>;
  videosCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type AmFeaturedMediaBlockLinkingCollections = {
  __typename?: 'AmFeaturedMediaBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmFeaturedMediaBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmFeaturedMediaBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmFeaturedMediaBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmFeaturedMediaBlockOrder {
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmFeaturedMediaBlockPodcastsCollection = {
  __typename?: 'AmFeaturedMediaBlockPodcastsCollection';
  items: Array<Maybe<AmPodcasts>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedMediaBlockPodcastsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmFeaturedMediaBlockVideosCollection = {
  __typename?: 'AmFeaturedMediaBlockVideosCollection';
  items: Array<Maybe<AmVideos>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedMediaBlockVideosCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmFeaturedMediaCollection = {
  __typename?: 'AmFeaturedMediaCollection';
  items: Array<Maybe<AmFeaturedMedia>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmFeaturedMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmFeaturedMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmFeaturedMediaFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCopy?: InputMaybe<Scalars['String']>;
  ctaCopy_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_exists?: InputMaybe<Scalars['Boolean']>;
  ctaCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaCopy_not?: InputMaybe<Scalars['String']>;
  ctaCopy_not_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink?: InputMaybe<Scalars['String']>;
  ctaTargetLink_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTargetLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink_not?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerText?: InputMaybe<Scalars['String']>;
  headerText_contains?: InputMaybe<Scalars['String']>;
  headerText_exists?: InputMaybe<Scalars['Boolean']>;
  headerText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerText_not?: InputMaybe<Scalars['String']>;
  headerText_not_contains?: InputMaybe<Scalars['String']>;
  headerText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  podcasts?: InputMaybe<CfAmInsightsNestedFilter>;
  podcastsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  videos?: InputMaybe<CfAmInsightsNestedFilter>;
  videosCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type AmFeaturedMediaLinkingCollections = {
  __typename?: 'AmFeaturedMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmFeaturedMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmFeaturedMediaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmFeaturedMediaLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmFeaturedMediaOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmFeaturedMediaPodcastsCollection = {
  __typename?: 'AmFeaturedMediaPodcastsCollection';
  items: Array<Maybe<AmInsights>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedMediaPodcastsCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type AmFeaturedMediaVideosCollection = {
  __typename?: 'AmFeaturedMediaVideosCollection';
  items: Array<Maybe<AmInsights>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmFeaturedMediaVideosCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHero = Entry & {
  __typename?: 'AmHero';
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  ctaCopy?: Maybe<Scalars['String']>;
  ctaTargetLink?: Maybe<Scalars['String']>;
  headerCopy?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmHeroLinkingCollections>;
  subHeaderCopy?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroCtaCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroCtaTargetLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroHeaderCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Alvarez and Marsal Hero [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amHero) */
export type AmHeroSubHeaderCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmHeroCollection = {
  __typename?: 'AmHeroCollection';
  items: Array<Maybe<AmHero>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmHeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmHeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmHeroFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCopy?: InputMaybe<Scalars['String']>;
  ctaCopy_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_exists?: InputMaybe<Scalars['Boolean']>;
  ctaCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaCopy_not?: InputMaybe<Scalars['String']>;
  ctaCopy_not_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink?: InputMaybe<Scalars['String']>;
  ctaTargetLink_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTargetLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink_not?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerCopy?: InputMaybe<Scalars['String']>;
  headerCopy_contains?: InputMaybe<Scalars['String']>;
  headerCopy_exists?: InputMaybe<Scalars['Boolean']>;
  headerCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerCopy_not?: InputMaybe<Scalars['String']>;
  headerCopy_not_contains?: InputMaybe<Scalars['String']>;
  headerCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subHeaderCopy?: InputMaybe<Scalars['String']>;
  subHeaderCopy_contains?: InputMaybe<Scalars['String']>;
  subHeaderCopy_exists?: InputMaybe<Scalars['Boolean']>;
  subHeaderCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subHeaderCopy_not?: InputMaybe<Scalars['String']>;
  subHeaderCopy_not_contains?: InputMaybe<Scalars['String']>;
  subHeaderCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AmHeroLinkingCollections = {
  __typename?: 'AmHeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmHeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmHeroLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmHeroLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmHeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmHeroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmHeroLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmHeroLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmHeroOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeaderCopyAsc = 'headerCopy_ASC',
  HeaderCopyDesc = 'headerCopy_DESC',
  SubHeaderCopyAsc = 'subHeaderCopy_ASC',
  SubHeaderCopyDesc = 'subHeaderCopy_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsights = Entry & {
  __typename?: 'AmInsights';
  body?: Maybe<AmInsightsBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  featuredInsight?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmInsightsLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  type?: Maybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsFeaturedInsightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Insights [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amInsights) */
export type AmInsightsTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmInsightsBody = {
  __typename?: 'AmInsightsBody';
  json: Scalars['JSON'];
  links: AmInsightsBodyLinks;
};

export type AmInsightsBodyAssets = {
  __typename?: 'AmInsightsBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AmInsightsBodyEntries = {
  __typename?: 'AmInsightsBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AmInsightsBodyLinks = {
  __typename?: 'AmInsightsBodyLinks';
  assets: AmInsightsBodyAssets;
  entries: AmInsightsBodyEntries;
  resources: AmInsightsBodyResources;
};

export type AmInsightsBodyResources = {
  __typename?: 'AmInsightsBodyResources';
  block: Array<ResourceLink>;
};

export type AmInsightsCollection = {
  __typename?: 'AmInsightsCollection';
  items: Array<Maybe<AmInsights>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmInsightsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmInsightsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmInsightsFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AmInsightsLinkingCollections = {
  __typename?: 'AmInsightsLinkingCollections';
  amFeaturedInsightsCollection?: Maybe<AmFeaturedInsightsCollection>;
  amFeaturedMediaCollection?: Maybe<AmFeaturedMediaCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AmInsightsLinkingCollectionsAmFeaturedInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmInsightsLinkingCollectionsAmFeaturedInsightsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmInsightsLinkingCollectionsAmFeaturedMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmInsightsLinkingCollectionsAmFeaturedMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmInsightsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmInsightsLinkingCollectionsAmFeaturedInsightsCollectionOrder {
  EnableNewsBlockAsc = 'enableNewsBlock_ASC',
  EnableNewsBlockDesc = 'enableNewsBlock_DESC',
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  NewsHeaderTextAsc = 'newsHeaderText_ASC',
  NewsHeaderTextDesc = 'newsHeaderText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmInsightsLinkingCollectionsAmFeaturedMediaCollectionOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmInsightsOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcasts = Entry & {
  __typename?: 'AmPodcasts';
  body?: Maybe<AmPodcastsBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmPodcastsLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Podcasts [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amPodcasts) */
export type AmPodcastsSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmPodcastsBody = {
  __typename?: 'AmPodcastsBody';
  json: Scalars['JSON'];
  links: AmPodcastsBodyLinks;
};

export type AmPodcastsBodyAssets = {
  __typename?: 'AmPodcastsBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AmPodcastsBodyEntries = {
  __typename?: 'AmPodcastsBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AmPodcastsBodyLinks = {
  __typename?: 'AmPodcastsBodyLinks';
  assets: AmPodcastsBodyAssets;
  entries: AmPodcastsBodyEntries;
  resources: AmPodcastsBodyResources;
};

export type AmPodcastsBodyResources = {
  __typename?: 'AmPodcastsBodyResources';
  block: Array<ResourceLink>;
};

export type AmPodcastsCollection = {
  __typename?: 'AmPodcastsCollection';
  items: Array<Maybe<AmPodcasts>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmPodcastsFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmPodcastsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmPodcastsFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AmPodcastsLinkingCollections = {
  __typename?: 'AmPodcastsLinkingCollections';
  amFeaturedMediaBlockCollection?: Maybe<AmFeaturedMediaBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AmPodcastsLinkingCollectionsAmFeaturedMediaBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmPodcastsLinkingCollectionsAmFeaturedMediaBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmPodcastsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmPodcastsLinkingCollectionsAmFeaturedMediaBlockCollectionOrder {
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmPodcastsOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonial = Entry & {
  __typename?: 'AmTestimonial';
  backgroundImage?: Maybe<Asset>;
  contentfulMetadata: ContentfulMetadata;
  featuredMedia?: Maybe<Asset>;
  linkedFrom?: Maybe<AmTestimonialLinkingCollections>;
  sys: Sys;
  testimonialBody?: Maybe<Scalars['String']>;
  witness?: Maybe<Scalars['String']>;
  witnessTitle?: Maybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialBackgroundImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialFeaturedMediaArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialTestimonialBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialWitnessArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonial) */
export type AmTestimonialWitnessTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmTestimonialCollection = {
  __typename?: 'AmTestimonialCollection';
  items: Array<Maybe<AmTestimonial>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmTestimonialFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmTestimonialFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmTestimonialFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredMedia_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testimonialBody?: InputMaybe<Scalars['String']>;
  testimonialBody_contains?: InputMaybe<Scalars['String']>;
  testimonialBody_exists?: InputMaybe<Scalars['Boolean']>;
  testimonialBody_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testimonialBody_not?: InputMaybe<Scalars['String']>;
  testimonialBody_not_contains?: InputMaybe<Scalars['String']>;
  testimonialBody_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness?: InputMaybe<Scalars['String']>;
  witnessTitle?: InputMaybe<Scalars['String']>;
  witnessTitle_contains?: InputMaybe<Scalars['String']>;
  witnessTitle_exists?: InputMaybe<Scalars['Boolean']>;
  witnessTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witnessTitle_not?: InputMaybe<Scalars['String']>;
  witnessTitle_not_contains?: InputMaybe<Scalars['String']>;
  witnessTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness_contains?: InputMaybe<Scalars['String']>;
  witness_exists?: InputMaybe<Scalars['Boolean']>;
  witness_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness_not?: InputMaybe<Scalars['String']>;
  witness_not_contains?: InputMaybe<Scalars['String']>;
  witness_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AmTestimonialLinkingCollections = {
  __typename?: 'AmTestimonialLinkingCollections';
  amTestimonialsBlockCollection?: Maybe<AmTestimonialsBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmTestimonialLinkingCollectionsAmTestimonialsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialLinkingCollectionsAmTestimonialsBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmTestimonialLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmTestimonialLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmTestimonialLinkingCollectionsAmTestimonialsBlockCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmTestimonialLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmTestimonialOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WitnessTitleAsc = 'witnessTitle_ASC',
  WitnessTitleDesc = 'witnessTitle_DESC',
  WitnessAsc = 'witness_ASC',
  WitnessDesc = 'witness_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonialsBlock) */
export type AmTestimonialsBlock = Entry & {
  __typename?: 'AmTestimonialsBlock';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmTestimonialsBlockLinkingCollections>;
  sys: Sys;
  testimonialsCollection?: Maybe<AmTestimonialsBlockTestimonialsCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonialsBlock) */
export type AmTestimonialsBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonialsBlock) */
export type AmTestimonialsBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amTestimonialsBlock) */
export type AmTestimonialsBlockTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialsBlockTestimonialsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmTestimonialFilter>;
};

export type AmTestimonialsBlockCollection = {
  __typename?: 'AmTestimonialsBlockCollection';
  items: Array<Maybe<AmTestimonialsBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmTestimonialsBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmTestimonialsBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmTestimonialsBlockFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  testimonials?: InputMaybe<CfAmTestimonialNestedFilter>;
  testimonialsCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type AmTestimonialsBlockLinkingCollections = {
  __typename?: 'AmTestimonialsBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmTestimonialsBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmTestimonialsBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialsBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmTestimonialsBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmTestimonialsBlockOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type AmTestimonialsBlockTestimonialsCollection = {
  __typename?: 'AmTestimonialsBlockTestimonialsCollection';
  items: Array<Maybe<AmTestimonial>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum AmTestimonialsBlockTestimonialsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WitnessTitleAsc = 'witnessTitle_ASC',
  WitnessTitleDesc = 'witnessTitle_DESC',
  WitnessAsc = 'witness_ASC',
  WitnessDesc = 'witness_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValueProp = Entry & {
  __typename?: 'AmValueProp';
  contentfulMetadata: ContentfulMetadata;
  ctaCopy?: Maybe<Scalars['String']>;
  ctaTargetLink?: Maybe<Scalars['String']>;
  headerTextLeft?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmValuePropLinkingCollections>;
  metrics?: Maybe<Scalars['JSON']>;
  metricsBlockTitle?: Maybe<Scalars['String']>;
  supplementalNavigation?: Maybe<Scalars['Boolean']>;
  supplementalNavigationItemsLeft?: Maybe<Scalars['JSON']>;
  supplementalNavigationItemsRight?: Maybe<Scalars['JSON']>;
  supplementalNavigationTitle?: Maybe<Scalars['String']>;
  supplementalNavigationTitleLeft?: Maybe<Scalars['String']>;
  supplementalNavigationTitleRight?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropCtaCopyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropCtaTargetLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropHeaderTextLeftArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropMetricsArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropMetricsBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationItemsLeftArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationItemsRightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationTitleLeftArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amValueProp) */
export type AmValuePropSupplementalNavigationTitleRightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmValuePropCollection = {
  __typename?: 'AmValuePropCollection';
  items: Array<Maybe<AmValueProp>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmValuePropFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmValuePropFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmValuePropFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaCopy?: InputMaybe<Scalars['String']>;
  ctaCopy_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_exists?: InputMaybe<Scalars['Boolean']>;
  ctaCopy_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaCopy_not?: InputMaybe<Scalars['String']>;
  ctaCopy_not_contains?: InputMaybe<Scalars['String']>;
  ctaCopy_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink?: InputMaybe<Scalars['String']>;
  ctaTargetLink_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTargetLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink_not?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerTextLeft?: InputMaybe<Scalars['String']>;
  headerTextLeft_contains?: InputMaybe<Scalars['String']>;
  headerTextLeft_exists?: InputMaybe<Scalars['Boolean']>;
  headerTextLeft_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headerTextLeft_not?: InputMaybe<Scalars['String']>;
  headerTextLeft_not_contains?: InputMaybe<Scalars['String']>;
  headerTextLeft_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metricsBlockTitle?: InputMaybe<Scalars['String']>;
  metricsBlockTitle_contains?: InputMaybe<Scalars['String']>;
  metricsBlockTitle_exists?: InputMaybe<Scalars['Boolean']>;
  metricsBlockTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metricsBlockTitle_not?: InputMaybe<Scalars['String']>;
  metricsBlockTitle_not_contains?: InputMaybe<Scalars['String']>;
  metricsBlockTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  metrics_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigation?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationItemsLeft_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationItemsRight_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationTitle?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleLeft?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleLeft_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleLeft_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationTitleLeft_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigationTitleLeft_not?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleLeft_not_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleLeft_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigationTitleRight?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleRight_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleRight_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationTitleRight_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigationTitleRight_not?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleRight_not_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitleRight_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigationTitle_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitle_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigationTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigationTitle_not?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitle_not_contains?: InputMaybe<Scalars['String']>;
  supplementalNavigationTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  supplementalNavigation_exists?: InputMaybe<Scalars['Boolean']>;
  supplementalNavigation_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type AmValuePropLinkingCollections = {
  __typename?: 'AmValuePropLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type AmValuePropLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmValuePropLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmValuePropLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmValuePropLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmValuePropOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeaderTextLeftAsc = 'headerTextLeft_ASC',
  HeaderTextLeftDesc = 'headerTextLeft_DESC',
  MetricsBlockTitleAsc = 'metricsBlockTitle_ASC',
  MetricsBlockTitleDesc = 'metricsBlockTitle_DESC',
  SupplementalNavigationTitleLeftAsc = 'supplementalNavigationTitleLeft_ASC',
  SupplementalNavigationTitleLeftDesc = 'supplementalNavigationTitleLeft_DESC',
  SupplementalNavigationTitleRightAsc = 'supplementalNavigationTitleRight_ASC',
  SupplementalNavigationTitleRightDesc = 'supplementalNavigationTitleRight_DESC',
  SupplementalNavigationTitleAsc = 'supplementalNavigationTitle_ASC',
  SupplementalNavigationTitleDesc = 'supplementalNavigationTitle_DESC',
  SupplementalNavigationAsc = 'supplementalNavigation_ASC',
  SupplementalNavigationDesc = 'supplementalNavigation_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideos = Entry & {
  __typename?: 'AmVideos';
  body?: Maybe<AmVideosBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<AmVideosLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Videos [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/amVideos) */
export type AmVideosSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AmVideosBody = {
  __typename?: 'AmVideosBody';
  json: Scalars['JSON'];
  links: AmVideosBodyLinks;
};

export type AmVideosBodyAssets = {
  __typename?: 'AmVideosBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type AmVideosBodyEntries = {
  __typename?: 'AmVideosBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type AmVideosBodyLinks = {
  __typename?: 'AmVideosBodyLinks';
  assets: AmVideosBodyAssets;
  entries: AmVideosBodyEntries;
  resources: AmVideosBodyResources;
};

export type AmVideosBodyResources = {
  __typename?: 'AmVideosBodyResources';
  block: Array<ResourceLink>;
};

export type AmVideosCollection = {
  __typename?: 'AmVideosCollection';
  items: Array<Maybe<AmVideos>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AmVideosFilter = {
  AND?: InputMaybe<Array<InputMaybe<AmVideosFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AmVideosFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AmVideosLinkingCollections = {
  __typename?: 'AmVideosLinkingCollections';
  amFeaturedMediaBlockCollection?: Maybe<AmFeaturedMediaBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AmVideosLinkingCollectionsAmFeaturedMediaBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmVideosLinkingCollectionsAmFeaturedMediaBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AmVideosLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AmVideosLinkingCollectionsAmFeaturedMediaBlockCollectionOrder {
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AmVideosOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']>;
  contentType_contains?: InputMaybe<Scalars['String']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentType_not?: InputMaybe<Scalars['String']>;
  contentType_not_contains?: InputMaybe<Scalars['String']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName?: InputMaybe<Scalars['String']>;
  fileName_contains?: InputMaybe<Scalars['String']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  fileName_not?: InputMaybe<Scalars['String']>;
  fileName_not_contains?: InputMaybe<Scalars['String']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  height?: InputMaybe<Scalars['Int']>;
  height_exists?: InputMaybe<Scalars['Boolean']>;
  height_gt?: InputMaybe<Scalars['Int']>;
  height_gte?: InputMaybe<Scalars['Int']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_lt?: InputMaybe<Scalars['Int']>;
  height_lte?: InputMaybe<Scalars['Int']>;
  height_not?: InputMaybe<Scalars['Int']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size?: InputMaybe<Scalars['Int']>;
  size_exists?: InputMaybe<Scalars['Boolean']>;
  size_gt?: InputMaybe<Scalars['Int']>;
  size_gte?: InputMaybe<Scalars['Int']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  size_lt?: InputMaybe<Scalars['Int']>;
  size_lte?: InputMaybe<Scalars['Int']>;
  size_not?: InputMaybe<Scalars['Int']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url?: InputMaybe<Scalars['String']>;
  url_contains?: InputMaybe<Scalars['String']>;
  url_exists?: InputMaybe<Scalars['Boolean']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_not?: InputMaybe<Scalars['String']>;
  url_not_contains?: InputMaybe<Scalars['String']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  width?: InputMaybe<Scalars['Int']>;
  width_exists?: InputMaybe<Scalars['Boolean']>;
  width_gt?: InputMaybe<Scalars['Int']>;
  width_gte?: InputMaybe<Scalars['Int']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_lt?: InputMaybe<Scalars['Int']>;
  width_lte?: InputMaybe<Scalars['Int']>;
  width_not?: InputMaybe<Scalars['Int']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  amCtaFeatureBlockCollection?: Maybe<AmCtaFeatureBlockCollection>;
  amHeroCollection?: Maybe<AmHeroCollection>;
  amInsightsCollection?: Maybe<AmInsightsCollection>;
  amPodcastsCollection?: Maybe<AmPodcastsCollection>;
  amTestimonialCollection?: Maybe<AmTestimonialCollection>;
  amVideosCollection?: Maybe<AmVideosCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  seoCollection?: Maybe<SeoCollection>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  whyAmBlockCollection?: Maybe<WhyAmBlockCollection>;
};


export type AssetLinkingCollectionsAmCtaFeatureBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmCtaFeatureBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsAmHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmHeroCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsAmInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmInsightsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsAmPodcastsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmPodcastsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsAmTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmTestimonialCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsAmVideosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsAmVideosCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsComponentDuplexCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsComponentHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsComponentInfoBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsComponentQuoteCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsNewsArticleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsSeoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsTopicBusinessInfoCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsTopicPersonCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsTopicProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsWhyAmBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetLinkingCollectionsWhyAmBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum AssetLinkingCollectionsAmCtaFeatureBlockCollectionOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsAmHeroCollectionOrder {
  CtaCopyAsc = 'ctaCopy_ASC',
  CtaCopyDesc = 'ctaCopy_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  HeaderCopyAsc = 'headerCopy_ASC',
  HeaderCopyDesc = 'headerCopy_DESC',
  SubHeaderCopyAsc = 'subHeaderCopy_ASC',
  SubHeaderCopyDesc = 'subHeaderCopy_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsAmInsightsCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum AssetLinkingCollectionsAmPodcastsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsAmTestimonialCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WitnessTitleAsc = 'witnessTitle_ASC',
  WitnessTitleDesc = 'witnessTitle_DESC',
  WitnessAsc = 'witness_ASC',
  WitnessDesc = 'witness_DESC'
}

export enum AssetLinkingCollectionsAmVideosCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsComponentDuplexCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsComponentHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsComponentInfoBlockCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsComponentQuoteCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuoteAlignmentAsc = 'quoteAlignment_ASC',
  QuoteAlignmentDesc = 'quoteAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsNewsArticleCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsSeoCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum AssetLinkingCollectionsTopicBusinessInfoCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsTopicPersonCollectionOrder {
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

export enum AssetLinkingCollectionsTopicProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetLinkingCollectionsWhyAmBlockCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCta = Entry & {
  __typename?: 'ComponentCta';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subline?: Maybe<ComponentCtaSubline>;
  sys: Sys;
  targetPage?: Maybe<ComponentCtaTargetPage>;
  urlParameters?: Maybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for creating visually distinct Calls-to-Action (CTAs) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentCta) */
export type ComponentCtaUrlParametersArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
  urlParameters?: InputMaybe<Scalars['String']>;
  urlParameters_contains?: InputMaybe<Scalars['String']>;
  urlParameters_exists?: InputMaybe<Scalars['Boolean']>;
  urlParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  urlParameters_not?: InputMaybe<Scalars['String']>;
  urlParameters_not_contains?: InputMaybe<Scalars['String']>;
  urlParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentCtaLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentCtaLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export type ComponentCtaSubline = {
  __typename?: 'ComponentCtaSubline';
  json: Scalars['JSON'];
  links: ComponentCtaSublineLinks;
};

export type ComponentCtaSublineAssets = {
  __typename?: 'ComponentCtaSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCtaSublineEntries = {
  __typename?: 'ComponentCtaSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCtaSublineLinks = {
  __typename?: 'ComponentCtaSublineLinks';
  assets: ComponentCtaSublineAssets;
  entries: ComponentCtaSublineEntries;
  resources: ComponentCtaSublineResources;
};

export type ComponentCtaSublineResources = {
  __typename?: 'ComponentCtaSublineResources';
  block: Array<ResourceLink>;
};

export type ComponentCtaTargetPage = Page;

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplex = Entry & {
  __typename?: 'ComponentDuplex';
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  containerLayout?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentDuplexTargetPage>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentDuplex) */
export type ComponentDuplexTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentDuplexBodyText = {
  __typename?: 'ComponentDuplexBodyText';
  json: Scalars['JSON'];
  links: ComponentDuplexBodyTextLinks;
};

export type ComponentDuplexBodyTextAssets = {
  __typename?: 'ComponentDuplexBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDuplexBodyTextEntries = {
  __typename?: 'ComponentDuplexBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDuplexBodyTextLinks = {
  __typename?: 'ComponentDuplexBodyTextLinks';
  assets: ComponentDuplexBodyTextAssets;
  entries: ComponentDuplexBodyTextEntries;
  resources: ComponentDuplexBodyTextResources;
};

export type ComponentDuplexBodyTextResources = {
  __typename?: 'ComponentDuplexBodyTextResources';
  block: Array<ResourceLink>;
};

export type ComponentDuplexCollection = {
  __typename?: 'ComponentDuplexCollection';
  items: Array<Maybe<ComponentDuplex>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentDuplexFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  containerLayout?: InputMaybe<Scalars['Boolean']>;
  containerLayout_exists?: InputMaybe<Scalars['Boolean']>;
  containerLayout_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  imageStyle?: InputMaybe<Scalars['Boolean']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentDuplexLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentDuplexLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentDuplexLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentDuplexOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentDuplexTargetPage = Page;

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & {
  __typename?: 'ComponentHeroBanner';
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaTargetLink?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  heroSize?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<Entry>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTargetLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentHeroBanner) */
export type ComponentHeroBannerTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentHeroBannerBodyText = {
  __typename?: 'ComponentHeroBannerBodyText';
  json: Scalars['JSON'];
  links: ComponentHeroBannerBodyTextLinks;
};

export type ComponentHeroBannerBodyTextAssets = {
  __typename?: 'ComponentHeroBannerBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentHeroBannerBodyTextEntries = {
  __typename?: 'ComponentHeroBannerBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentHeroBannerBodyTextLinks = {
  __typename?: 'ComponentHeroBannerBodyTextLinks';
  assets: ComponentHeroBannerBodyTextAssets;
  entries: ComponentHeroBannerBodyTextEntries;
  resources: ComponentHeroBannerBodyTextResources;
};

export type ComponentHeroBannerBodyTextResources = {
  __typename?: 'ComponentHeroBannerBodyTextResources';
  block: Array<ResourceLink>;
};

export type ComponentHeroBannerCollection = {
  __typename?: 'ComponentHeroBannerCollection';
  items: Array<Maybe<ComponentHeroBanner>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaTargetLink?: InputMaybe<Scalars['String']>;
  ctaTargetLink_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_exists?: InputMaybe<Scalars['Boolean']>;
  ctaTargetLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaTargetLink_not?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_contains?: InputMaybe<Scalars['String']>;
  ctaTargetLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']>;
  imageStyle?: InputMaybe<Scalars['Boolean']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentHeroBannerLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentHeroBannerLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTargetLinkAsc = 'ctaTargetLink_ASC',
  CtaTargetLinkDesc = 'ctaTargetLink_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlock = Entry & {
  __typename?: 'ComponentInfoBlock';
  block1Body?: Maybe<ComponentInfoBlockBlock1Body>;
  block1Image?: Maybe<Asset>;
  block2Body?: Maybe<ComponentInfoBlockBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ComponentInfoBlockBlock3Body>;
  block3Image?: Maybe<Asset>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentInfoBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width container for displaying short bits of generic information with optional icons/visuals [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentInfoBlock) */
export type ComponentInfoBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentInfoBlockBlock1Body = {
  __typename?: 'ComponentInfoBlockBlock1Body';
  json: Scalars['JSON'];
  links: ComponentInfoBlockBlock1BodyLinks;
};

export type ComponentInfoBlockBlock1BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock1BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock1BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock1BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock1BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock1BodyLinks';
  assets: ComponentInfoBlockBlock1BodyAssets;
  entries: ComponentInfoBlockBlock1BodyEntries;
  resources: ComponentInfoBlockBlock1BodyResources;
};

export type ComponentInfoBlockBlock1BodyResources = {
  __typename?: 'ComponentInfoBlockBlock1BodyResources';
  block: Array<ResourceLink>;
};

export type ComponentInfoBlockBlock2Body = {
  __typename?: 'ComponentInfoBlockBlock2Body';
  json: Scalars['JSON'];
  links: ComponentInfoBlockBlock2BodyLinks;
};

export type ComponentInfoBlockBlock2BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock2BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock2BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock2BodyLinks';
  assets: ComponentInfoBlockBlock2BodyAssets;
  entries: ComponentInfoBlockBlock2BodyEntries;
  resources: ComponentInfoBlockBlock2BodyResources;
};

export type ComponentInfoBlockBlock2BodyResources = {
  __typename?: 'ComponentInfoBlockBlock2BodyResources';
  block: Array<ResourceLink>;
};

export type ComponentInfoBlockBlock3Body = {
  __typename?: 'ComponentInfoBlockBlock3Body';
  json: Scalars['JSON'];
  links: ComponentInfoBlockBlock3BodyLinks;
};

export type ComponentInfoBlockBlock3BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock3BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock3BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock3BodyLinks';
  assets: ComponentInfoBlockBlock3BodyAssets;
  entries: ComponentInfoBlockBlock3BodyEntries;
  resources: ComponentInfoBlockBlock3BodyResources;
};

export type ComponentInfoBlockBlock3BodyResources = {
  __typename?: 'ComponentInfoBlockBlock3BodyResources';
  block: Array<ResourceLink>;
};

export type ComponentInfoBlockCollection = {
  __typename?: 'ComponentInfoBlockCollection';
  items: Array<Maybe<ComponentInfoBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentInfoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_contains?: InputMaybe<Scalars['String']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_contains?: InputMaybe<Scalars['String']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline?: InputMaybe<Scalars['String']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_not?: InputMaybe<Scalars['String']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentInfoBlockLinkingCollections = {
  __typename?: 'ComponentInfoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentInfoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentInfoBlockLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentInfoBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentInfoBlockLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentInfoBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentInfoBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTable = Entry & {
  __typename?: 'ComponentProductTable';
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentProductTableLinkingCollections>;
  productsCollection?: Maybe<ComponentProductTableProductsCollection>;
  subline?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTableHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTableInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTableProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFilter>;
};


/** Component that renders products in a table enabling a side-by-side comparison [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentProductTable) */
export type ComponentProductTableSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentProductTableCollection = {
  __typename?: 'ComponentProductTableCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentProductTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  products?: InputMaybe<CfTopicProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  subline?: InputMaybe<Scalars['String']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_not?: InputMaybe<Scalars['String']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentProductTableLinkingCollections = {
  __typename?: 'ComponentProductTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentProductTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentProductTableLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentProductTableLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentProductTableLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProductTableLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProductTableOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentProductTableProductsCollection = {
  __typename?: 'ComponentProductTableProductsCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum ComponentProductTableProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuote = Entry & {
  __typename?: 'ComponentQuote';
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imagePosition?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentQuoteLinkingCollections>;
  quote?: Maybe<ComponentQuoteQuote>;
  quoteAlignment?: Maybe<Scalars['Boolean']>;
  sys: Sys;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentQuote) */
export type ComponentQuoteQuoteAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentQuoteCollection = {
  __typename?: 'ComponentQuoteCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  quoteAlignment?: InputMaybe<Scalars['Boolean']>;
  quoteAlignment_exists?: InputMaybe<Scalars['Boolean']>;
  quoteAlignment_not?: InputMaybe<Scalars['Boolean']>;
  quote_contains?: InputMaybe<Scalars['String']>;
  quote_exists?: InputMaybe<Scalars['Boolean']>;
  quote_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentQuoteLinkingCollections = {
  __typename?: 'ComponentQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentQuoteLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentQuoteLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentQuoteLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentQuoteOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuoteAlignmentAsc = 'quoteAlignment_ASC',
  QuoteAlignmentDesc = 'quoteAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentQuoteQuote = {
  __typename?: 'ComponentQuoteQuote';
  json: Scalars['JSON'];
  links: ComponentQuoteQuoteLinks;
};

export type ComponentQuoteQuoteAssets = {
  __typename?: 'ComponentQuoteQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentQuoteQuoteEntries = {
  __typename?: 'ComponentQuoteQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentQuoteQuoteLinks = {
  __typename?: 'ComponentQuoteQuoteLinks';
  assets: ComponentQuoteQuoteAssets;
  entries: ComponentQuoteQuoteEntries;
  resources: ComponentQuoteQuoteResources;
};

export type ComponentQuoteQuoteResources = {
  __typename?: 'ComponentQuoteQuoteResources';
  block: Array<ResourceLink>;
};

/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlock = Entry & {
  __typename?: 'ComponentTextBlock';
  body?: Maybe<ComponentTextBlockBody>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentTextBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Constrained-width component for displaying ad-hoc paragraphs of text (FAQs, intros, descriptions) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/componentTextBlock) */
export type ComponentTextBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type ComponentTextBlockBody = {
  __typename?: 'ComponentTextBlockBody';
  json: Scalars['JSON'];
  links: ComponentTextBlockBodyLinks;
};

export type ComponentTextBlockBodyAssets = {
  __typename?: 'ComponentTextBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextBlockBodyEntries = {
  __typename?: 'ComponentTextBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextBlockBodyLinks = {
  __typename?: 'ComponentTextBlockBodyLinks';
  assets: ComponentTextBlockBodyAssets;
  entries: ComponentTextBlockBodyEntries;
  resources: ComponentTextBlockBodyResources;
};

export type ComponentTextBlockBodyResources = {
  __typename?: 'ComponentTextBlockBodyResources';
  block: Array<ResourceLink>;
};

export type ComponentTextBlockCollection = {
  __typename?: 'ComponentTextBlockCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type ComponentTextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline?: InputMaybe<Scalars['String']>;
  subline_contains?: InputMaybe<Scalars['String']>;
  subline_exists?: InputMaybe<Scalars['Boolean']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  subline_not?: InputMaybe<Scalars['String']>;
  subline_not_contains?: InputMaybe<Scalars['String']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentTextBlockLinkingCollections = {
  __typename?: 'ComponentTextBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentTextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTextBlockLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentTextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentTextBlockLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']>;
  facebookLink_contains?: InputMaybe<Scalars['String']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink?: InputMaybe<Scalars['String']>;
  instagramLink_contains?: InputMaybe<Scalars['String']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']>;
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink?: InputMaybe<Scalars['String']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']>;
  twitterLink_contains?: InputMaybe<Scalars['String']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum FooterMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterMenuOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']>;
};

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPage = Entry & {
  __typename?: 'InsightsPage';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<InsightsPageExtraSectionCollection>;
  featuredInsight?: Maybe<Scalars['Boolean']>;
  insightFeaturedImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<InsightsPageLinkingCollections>;
  pageContent?: Maybe<InsightsPagePageContent>;
  pageName?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  topSectionCollection?: Maybe<InsightsPageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InsightsPageExtraSectionFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageFeaturedInsightArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageInsightFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPagePageContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/insightsPage) */
export type InsightsPageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InsightsPageTopSectionFilter>;
};

export type InsightsPageCollection = {
  __typename?: 'InsightsPageCollection';
  items: Array<Maybe<InsightsPage>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InsightsPageExtraSectionCollection = {
  __typename?: 'InsightsPageExtraSectionCollection';
  items: Array<Maybe<InsightsPageExtraSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InsightsPageExtraSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<InsightsPageExtraSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InsightsPageExtraSectionFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type InsightsPageExtraSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock;

export type InsightsPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<InsightsPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InsightsPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_not?: InputMaybe<Scalars['Boolean']>;
  insightFeaturedImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type InsightsPageLinkingCollections = {
  __typename?: 'InsightsPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type InsightsPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum InsightsPageOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type InsightsPagePageContent = AmHero | TopicBusinessInfo | TopicProduct | TopicProductFeature;

export type InsightsPageTopSectionCollection = {
  __typename?: 'InsightsPageTopSectionCollection';
  items: Array<Maybe<InsightsPageTopSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type InsightsPageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<InsightsPageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InsightsPageTopSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type InsightsPageTopSectionItem = AmHero | ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentProductTable | ComponentQuote | ComponentTextBlock | WhyAmBlock;

/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroup = Entry & {
  __typename?: 'MenuGroup';
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  groupLink?: Maybe<MenuGroupGroupLink>;
  groupName?: Maybe<Scalars['String']>;
  internalTitle?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFeaturedPagesFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<MenuGroupGroupLinkFilter>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** A group of items making up a section in the navigation menu [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<MenuGroupFeaturedPagesItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type MenuGroupFeaturedPagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type MenuGroupFeaturedPagesItem = Page;

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPages?: InputMaybe<CffeaturedPagesMultiTypeNestedFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink?: InputMaybe<CfgroupLinkMultiTypeNestedFilter>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupGroupLink = Page;

export type MenuGroupGroupLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
};


export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum MenuGroupLinkingCollectionsFooterMenuCollectionOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum MenuGroupLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MenuGroupOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/navigationMenu) */
export type NavigationMenu = Entry & {
  __typename?: 'NavigationMenu';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  sys: Sys;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation menu in the header [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum NavigationMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticle = Entry & {
  __typename?: 'NewsArticle';
  body?: Maybe<NewsArticleBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<NewsArticleLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** AM Articles [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/newsArticle) */
export type NewsArticleShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type NewsArticleBody = {
  __typename?: 'NewsArticleBody';
  json: Scalars['JSON'];
  links: NewsArticleBodyLinks;
};

export type NewsArticleBodyAssets = {
  __typename?: 'NewsArticleBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type NewsArticleBodyEntries = {
  __typename?: 'NewsArticleBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type NewsArticleBodyLinks = {
  __typename?: 'NewsArticleBodyLinks';
  assets: NewsArticleBodyAssets;
  entries: NewsArticleBodyEntries;
  resources: NewsArticleBodyResources;
};

export type NewsArticleBodyResources = {
  __typename?: 'NewsArticleBodyResources';
  block: Array<ResourceLink>;
};

export type NewsArticleCollection = {
  __typename?: 'NewsArticleCollection';
  items: Array<Maybe<NewsArticle>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type NewsArticleFilter = {
  AND?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsArticleFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type NewsArticleLinkingCollections = {
  __typename?: 'NewsArticleLinkingCollections';
  amFeaturedInsightsCollection?: Maybe<AmFeaturedInsightsCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type NewsArticleLinkingCollectionsAmFeaturedInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NewsArticleLinkingCollectionsAmFeaturedInsightsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type NewsArticleLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum NewsArticleLinkingCollectionsAmFeaturedInsightsCollectionOrder {
  EnableNewsBlockAsc = 'enableNewsBlock_ASC',
  EnableNewsBlockDesc = 'enableNewsBlock_DESC',
  HeaderTextAsc = 'headerText_ASC',
  HeaderTextDesc = 'headerText_DESC',
  NewsHeaderTextAsc = 'newsHeaderText_ASC',
  NewsHeaderTextDesc = 'newsHeaderText_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NewsArticleOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContent?: Maybe<PagePageContent>;
  pageName?: Maybe<Scalars['String']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageExtraSectionFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PagePageContentArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<SeoFilter>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageTopSectionFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageExtraSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageExtraSectionItem = AmCtaFeatureBlock | AmFeaturedInsights | AmFeaturedMedia | AmFeaturedMediaBlock | AmHero | AmTestimonial | AmTestimonialsBlock | AmValueProp | ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock | WhyAmBlock;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  entryCollection?: Maybe<EntryCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  whyAmBlockCollection?: Maybe<WhyAmBlockCollection>;
};


export type PageLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentDuplexCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMenuGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type PageLinkingCollectionsWhyAmBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsWhyAmBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum PageLinkingCollectionsComponentCtaCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export enum PageLinkingCollectionsComponentDuplexCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsMenuGroupCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsWhyAmBlockCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePageContent = AmHero | TopicBusinessInfo | TopicProduct | TopicProductFeature;

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTopSectionItem = AmHero | ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentProductTable | ComponentQuote | ComponentTextBlock | WhyAmBlock;

export type Query = {
  __typename?: 'Query';
  amCtaFeatureBlock?: Maybe<AmCtaFeatureBlock>;
  amCtaFeatureBlockCollection?: Maybe<AmCtaFeatureBlockCollection>;
  amFeaturedInsights?: Maybe<AmFeaturedInsights>;
  amFeaturedInsightsCollection?: Maybe<AmFeaturedInsightsCollection>;
  amFeaturedMedia?: Maybe<AmFeaturedMedia>;
  amFeaturedMediaBlock?: Maybe<AmFeaturedMediaBlock>;
  amFeaturedMediaBlockCollection?: Maybe<AmFeaturedMediaBlockCollection>;
  amFeaturedMediaCollection?: Maybe<AmFeaturedMediaCollection>;
  amHero?: Maybe<AmHero>;
  amHeroCollection?: Maybe<AmHeroCollection>;
  amInsights?: Maybe<AmInsights>;
  amInsightsCollection?: Maybe<AmInsightsCollection>;
  amPodcasts?: Maybe<AmPodcasts>;
  amPodcastsCollection?: Maybe<AmPodcastsCollection>;
  amTestimonial?: Maybe<AmTestimonial>;
  amTestimonialCollection?: Maybe<AmTestimonialCollection>;
  amTestimonialsBlock?: Maybe<AmTestimonialsBlock>;
  amTestimonialsBlockCollection?: Maybe<AmTestimonialsBlockCollection>;
  amValueProp?: Maybe<AmValueProp>;
  amValuePropCollection?: Maybe<AmValuePropCollection>;
  amVideos?: Maybe<AmVideos>;
  amVideosCollection?: Maybe<AmVideosCollection>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentDuplex?: Maybe<ComponentDuplex>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBanner?: Maybe<ComponentHeroBanner>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentInfoBlock?: Maybe<ComponentInfoBlock>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentProductTable?: Maybe<ComponentProductTable>;
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  componentQuote?: Maybe<ComponentQuote>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  componentTextBlock?: Maybe<ComponentTextBlock>;
  componentTextBlockCollection?: Maybe<ComponentTextBlockCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  insightsPage?: Maybe<InsightsPage>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  menuGroup?: Maybe<MenuGroup>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  newsArticle?: Maybe<NewsArticle>;
  newsArticleCollection?: Maybe<NewsArticleCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  topicBusinessInfo?: Maybe<TopicBusinessInfo>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicPerson?: Maybe<TopicPerson>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicProduct?: Maybe<TopicProduct>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductFeature?: Maybe<TopicProductFeature>;
  topicProductFeatureCollection?: Maybe<TopicProductFeatureCollection>;
  whyAmBlock?: Maybe<WhyAmBlock>;
  whyAmBlockCollection?: Maybe<WhyAmBlockCollection>;
};


export type QueryAmCtaFeatureBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmCtaFeatureBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmCtaFeatureBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmCtaFeatureBlockFilter>;
};


export type QueryAmFeaturedInsightsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmFeaturedInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedInsightsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmFeaturedInsightsFilter>;
};


export type QueryAmFeaturedMediaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmFeaturedMediaBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmFeaturedMediaBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmFeaturedMediaBlockFilter>;
};


export type QueryAmFeaturedMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmFeaturedMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmFeaturedMediaFilter>;
};


export type QueryAmHeroArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmHeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmHeroFilter>;
};


export type QueryAmInsightsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmInsightsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmInsightsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmInsightsFilter>;
};


export type QueryAmPodcastsArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmPodcastsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmPodcastsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmPodcastsFilter>;
};


export type QueryAmTestimonialArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmTestimonialCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmTestimonialFilter>;
};


export type QueryAmTestimonialsBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmTestimonialsBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmTestimonialsBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmTestimonialsBlockFilter>;
};


export type QueryAmValuePropArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmValuePropCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmValuePropOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmValuePropFilter>;
};


export type QueryAmVideosArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAmVideosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AmVideosOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AmVideosFilter>;
};


export type QueryAssetArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentDuplexArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};


export type QueryComponentHeroBannerArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};


export type QueryComponentInfoBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};


export type QueryComponentProductTableArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};


export type QueryComponentQuoteArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};


export type QueryComponentTextBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryComponentTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryInsightsPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<InsightsPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<InsightsPageFilter>;
};


export type QueryMenuGroupArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryNewsArticleArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryNewsArticleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<NewsArticleOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NewsArticleFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<SeoFilter>;
};


export type QueryTopicBusinessInfoArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicBusinessInfoFilter>;
};


export type QueryTopicPersonArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicPersonFilter>;
};


export type QueryTopicProductArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFilter>;
};


export type QueryTopicProductFeatureArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryTopicProductFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


export type QueryWhyAmBlockArgs = {
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


export type QueryWhyAmBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WhyAmBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<WhyAmBlockFilter>;
};

export type ResourceLink = {
  __typename?: 'ResourceLink';
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String'];
  type: Scalars['String'];
  urn: Scalars['String'];
};

/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type Seo = Entry & {
  __typename?: 'Seo';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  noFollow?: Maybe<Scalars['Boolean']>;
  noIndex?: Maybe<Scalars['Boolean']>;
  sys: Sys;
  title?: Maybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Open Graph (OG) meta tags for optimizing SEO visibility [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum SeoLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String'];
  firstPublishedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  publishedAt?: Maybe<Scalars['DateTime']>;
  publishedVersion?: Maybe<Scalars['Int']>;
  spaceId: Scalars['String'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  id?: InputMaybe<Scalars['String']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_exists?: InputMaybe<Scalars['Boolean']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id_not?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfo = Entry & {
  __typename?: 'TopicBusinessInfo';
  body?: Maybe<TopicBusinessInfoBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicBusinessInfoLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  sys: Sys;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoBodyArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for ever-green content like About us, Career pages, FAQ, Knowledge base & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicBusinessInfo) */
export type TopicBusinessInfoShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicBusinessInfoBody = {
  __typename?: 'TopicBusinessInfoBody';
  json: Scalars['JSON'];
  links: TopicBusinessInfoBodyLinks;
};

export type TopicBusinessInfoBodyAssets = {
  __typename?: 'TopicBusinessInfoBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicBusinessInfoBodyEntries = {
  __typename?: 'TopicBusinessInfoBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicBusinessInfoBodyLinks = {
  __typename?: 'TopicBusinessInfoBodyLinks';
  assets: TopicBusinessInfoBodyAssets;
  entries: TopicBusinessInfoBodyEntries;
  resources: TopicBusinessInfoBodyResources;
};

export type TopicBusinessInfoBodyResources = {
  __typename?: 'TopicBusinessInfoBodyResources';
  block: Array<ResourceLink>;
};

export type TopicBusinessInfoCollection = {
  __typename?: 'TopicBusinessInfoCollection';
  items: Array<Maybe<TopicBusinessInfo>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicBusinessInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicBusinessInfoLinkingCollections = {
  __typename?: 'TopicBusinessInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TopicBusinessInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicBusinessInfoLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicBusinessInfoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TopicBusinessInfoLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicBusinessInfoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicBusinessInfoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPerson = Entry & {
  __typename?: 'TopicPerson';
  avatar?: Maybe<Asset>;
  bio?: Maybe<TopicPersonBio>;
  cardStyle?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicPersonLinkingCollections>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sys: Sys;
  website?: Maybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonAvatarArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonBioArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonLocationArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for holding info about people (article authors, company leadership, quoted customers, etc.) [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicPerson) */
export type TopicPersonWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicPersonBio = {
  __typename?: 'TopicPersonBio';
  json: Scalars['JSON'];
  links: TopicPersonBioLinks;
};

export type TopicPersonBioAssets = {
  __typename?: 'TopicPersonBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicPersonBioEntries = {
  __typename?: 'TopicPersonBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicPersonBioLinks = {
  __typename?: 'TopicPersonBioLinks';
  assets: TopicPersonBioAssets;
  entries: TopicPersonBioEntries;
  resources: TopicPersonBioResources;
};

export type TopicPersonBioResources = {
  __typename?: 'TopicPersonBioResources';
  block: Array<ResourceLink>;
};

export type TopicPersonCollection = {
  __typename?: 'TopicPersonCollection';
  items: Array<Maybe<TopicPerson>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicPersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']>;
  bio_contains?: InputMaybe<Scalars['String']>;
  bio_exists?: InputMaybe<Scalars['Boolean']>;
  bio_not_contains?: InputMaybe<Scalars['String']>;
  cardStyle?: InputMaybe<Scalars['Boolean']>;
  cardStyle_exists?: InputMaybe<Scalars['Boolean']>;
  cardStyle_not?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<Scalars['String']>;
  location_contains?: InputMaybe<Scalars['String']>;
  location_exists?: InputMaybe<Scalars['Boolean']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location_not?: InputMaybe<Scalars['String']>;
  location_not_contains?: InputMaybe<Scalars['String']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']>;
  website_contains?: InputMaybe<Scalars['String']>;
  website_exists?: InputMaybe<Scalars['Boolean']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_not?: InputMaybe<Scalars['String']>;
  website_not_contains?: InputMaybe<Scalars['String']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TopicPersonLinkingCollections = {
  __typename?: 'TopicPersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TopicPersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TopicPersonOrder {
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProduct = Entry & {
  __typename?: 'TopicProduct';
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopicProductDescription>;
  featuredImage?: Maybe<Asset>;
  featuresCollection?: Maybe<TopicProductFeaturesCollection>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicProductLinkingCollections>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  sys: Sys;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container for product-specific information like card definitions, features, benefits, prices & more [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProduct) */
export type TopicProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicProductCollection = {
  __typename?: 'TopicProductCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicProductDescription = {
  __typename?: 'TopicProductDescription';
  json: Scalars['JSON'];
  links: TopicProductDescriptionLinks;
};

export type TopicProductDescriptionAssets = {
  __typename?: 'TopicProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductDescriptionEntries = {
  __typename?: 'TopicProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductDescriptionLinks = {
  __typename?: 'TopicProductDescriptionLinks';
  assets: TopicProductDescriptionAssets;
  entries: TopicProductDescriptionEntries;
  resources: TopicProductDescriptionResources;
};

export type TopicProductDescriptionResources = {
  __typename?: 'TopicProductDescriptionResources';
  block: Array<ResourceLink>;
};

/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeature = Entry & {
  __typename?: 'TopicProductFeature';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<TopicProductFeatureLinkingCollections>;
  longDescription?: Maybe<TopicProductFeatureLongDescription>;
  name?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<TopicProductFeatureShortDescription>;
  sys: Sys;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeatureLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Sub-container for product features enabling re-use of generic features across different products [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/topicProductFeature) */
export type TopicProductFeatureShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};

export type TopicProductFeatureCollection = {
  __typename?: 'TopicProductFeatureCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type TopicProductFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductFeatureLinkingCollections = {
  __typename?: 'TopicProductFeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
};


export type TopicProductFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductFeatureLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductFeatureLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductFeatureLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TopicProductFeatureLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductFeatureLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureLongDescription = {
  __typename?: 'TopicProductFeatureLongDescription';
  json: Scalars['JSON'];
  links: TopicProductFeatureLongDescriptionLinks;
};

export type TopicProductFeatureLongDescriptionAssets = {
  __typename?: 'TopicProductFeatureLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureLongDescriptionEntries = {
  __typename?: 'TopicProductFeatureLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureLongDescriptionLinks = {
  __typename?: 'TopicProductFeatureLongDescriptionLinks';
  assets: TopicProductFeatureLongDescriptionAssets;
  entries: TopicProductFeatureLongDescriptionEntries;
  resources: TopicProductFeatureLongDescriptionResources;
};

export type TopicProductFeatureLongDescriptionResources = {
  __typename?: 'TopicProductFeatureLongDescriptionResources';
  block: Array<ResourceLink>;
};

export enum TopicProductFeatureOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureShortDescription = {
  __typename?: 'TopicProductFeatureShortDescription';
  json: Scalars['JSON'];
  links: TopicProductFeatureShortDescriptionLinks;
};

export type TopicProductFeatureShortDescriptionAssets = {
  __typename?: 'TopicProductFeatureShortDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureShortDescriptionEntries = {
  __typename?: 'TopicProductFeatureShortDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureShortDescriptionLinks = {
  __typename?: 'TopicProductFeatureShortDescriptionLinks';
  assets: TopicProductFeatureShortDescriptionAssets;
  entries: TopicProductFeatureShortDescriptionEntries;
  resources: TopicProductFeatureShortDescriptionResources;
};

export type TopicProductFeatureShortDescriptionResources = {
  __typename?: 'TopicProductFeatureShortDescriptionResources';
  block: Array<ResourceLink>;
};

export type TopicProductFeaturesCollection = {
  __typename?: 'TopicProductFeaturesCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export enum TopicProductFeaturesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  features?: InputMaybe<CfTopicProductFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductLinkingCollections = {
  __typename?: 'TopicProductLinkingCollections';
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type TopicProductLinkingCollectionsComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsComponentProductTableCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type TopicProductLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum TopicProductLinkingCollectionsComponentProductTableCollectionOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlock = Entry & {
  __typename?: 'WhyAmBlock';
  bodyText?: Maybe<WhyAmBlockBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  heroSize?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<WhyAmBlockLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<WhyAmBlockTargetPage>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Some metrics [See type definition](https://app.contentful.com/spaces/l4jg3uoi3pbp/content_types/whyAmBlock) */
export type WhyAmBlockTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};

export type WhyAmBlockBodyText = {
  __typename?: 'WhyAmBlockBodyText';
  json: Scalars['JSON'];
  links: WhyAmBlockBodyTextLinks;
};

export type WhyAmBlockBodyTextAssets = {
  __typename?: 'WhyAmBlockBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type WhyAmBlockBodyTextEntries = {
  __typename?: 'WhyAmBlockBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type WhyAmBlockBodyTextLinks = {
  __typename?: 'WhyAmBlockBodyTextLinks';
  assets: WhyAmBlockBodyTextAssets;
  entries: WhyAmBlockBodyTextEntries;
  resources: WhyAmBlockBodyTextResources;
};

export type WhyAmBlockBodyTextResources = {
  __typename?: 'WhyAmBlockBodyTextResources';
  block: Array<ResourceLink>;
};

export type WhyAmBlockCollection = {
  __typename?: 'WhyAmBlockCollection';
  items: Array<Maybe<WhyAmBlock>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type WhyAmBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<WhyAmBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<WhyAmBlockFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette?: InputMaybe<Scalars['String']>;
  colorPalette_contains?: InputMaybe<Scalars['String']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']>;
  ctaText_contains?: InputMaybe<Scalars['String']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ctaText_not?: InputMaybe<Scalars['String']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline?: InputMaybe<Scalars['String']>;
  headline_contains?: InputMaybe<Scalars['String']>;
  headline_exists?: InputMaybe<Scalars['Boolean']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  headline_not?: InputMaybe<Scalars['String']>;
  headline_not_contains?: InputMaybe<Scalars['String']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']>;
  imageStyle?: InputMaybe<Scalars['Boolean']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']>;
};

export type WhyAmBlockLinkingCollections = {
  __typename?: 'WhyAmBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  insightsPageCollection?: Maybe<InsightsPageCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type WhyAmBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WhyAmBlockLinkingCollectionsInsightsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WhyAmBlockLinkingCollectionsInsightsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WhyAmBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Array<InputMaybe<WhyAmBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum WhyAmBlockLinkingCollectionsInsightsPageCollectionOrder {
  FeaturedInsightAsc = 'featuredInsight_ASC',
  FeaturedInsightDesc = 'featuredInsight_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum WhyAmBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum WhyAmBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type WhyAmBlockTargetPage = Page;

export type CfAmInsightsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAmInsightsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAmInsightsNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_exists?: InputMaybe<Scalars['Boolean']>;
  featuredInsight_not?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  type?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_exists?: InputMaybe<Scalars['Boolean']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_not?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfAmPodcastsNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAmPodcastsNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAmPodcastsNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfAmTestimonialNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAmTestimonialNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAmTestimonialNestedFilter>>>;
  backgroundImage_exists?: InputMaybe<Scalars['Boolean']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredMedia_exists?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  testimonialBody?: InputMaybe<Scalars['String']>;
  testimonialBody_contains?: InputMaybe<Scalars['String']>;
  testimonialBody_exists?: InputMaybe<Scalars['Boolean']>;
  testimonialBody_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  testimonialBody_not?: InputMaybe<Scalars['String']>;
  testimonialBody_not_contains?: InputMaybe<Scalars['String']>;
  testimonialBody_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness?: InputMaybe<Scalars['String']>;
  witnessTitle?: InputMaybe<Scalars['String']>;
  witnessTitle_contains?: InputMaybe<Scalars['String']>;
  witnessTitle_exists?: InputMaybe<Scalars['Boolean']>;
  witnessTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witnessTitle_not?: InputMaybe<Scalars['String']>;
  witnessTitle_not_contains?: InputMaybe<Scalars['String']>;
  witnessTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness_contains?: InputMaybe<Scalars['String']>;
  witness_exists?: InputMaybe<Scalars['Boolean']>;
  witness_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  witness_not?: InputMaybe<Scalars['String']>;
  witness_not_contains?: InputMaybe<Scalars['String']>;
  witness_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfAmVideosNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfAmVideosNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfAmVideosNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']>;
  groupName?: InputMaybe<Scalars['String']>;
  groupName_contains?: InputMaybe<Scalars['String']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  groupName_not?: InputMaybe<Scalars['String']>;
  groupName_not_contains?: InputMaybe<Scalars['String']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle?: InputMaybe<Scalars['String']>;
  internalTitle_contains?: InputMaybe<Scalars['String']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfNewsArticleNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfNewsArticleNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfNewsArticleNestedFilter>>>;
  body_contains?: InputMaybe<Scalars['String']>;
  body_exists?: InputMaybe<Scalars['Boolean']>;
  body_not_contains?: InputMaybe<Scalars['String']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription?: InputMaybe<Scalars['String']>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_not?: InputMaybe<Scalars['String']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']>;
  noIndex?: InputMaybe<Scalars['Boolean']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_exists?: InputMaybe<Scalars['Boolean']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title_not?: InputMaybe<Scalars['String']>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type CfTopicProductFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTopicProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']>;
  description_exists?: InputMaybe<Scalars['Boolean']>;
  description_not_contains?: InputMaybe<Scalars['String']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_exists?: InputMaybe<Scalars['Boolean']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_not?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  price?: InputMaybe<Scalars['Float']>;
  price_exists?: InputMaybe<Scalars['Boolean']>;
  price_gt?: InputMaybe<Scalars['Float']>;
  price_gte?: InputMaybe<Scalars['Float']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  price_lt?: InputMaybe<Scalars['Float']>;
  price_lte?: InputMaybe<Scalars['Float']>;
  price_not?: InputMaybe<Scalars['Float']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfextraSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type CffeaturedPagesMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CfgroupLinkMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']>;
  slug?: InputMaybe<Scalars['String']>;
  slug_contains?: InputMaybe<Scalars['String']>;
  slug_exists?: InputMaybe<Scalars['Boolean']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  slug_not?: InputMaybe<Scalars['String']>;
  slug_not_contains?: InputMaybe<Scalars['String']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  sys?: InputMaybe<SysFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']>;
};

export type CftopSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type AmHeroFieldsFragment = { __typename: 'AmHero', headerCopy?: string | null, subHeaderCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', fileName?: string | null, url?: string | null } | null };

export type CtfAmHeroQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfAmHeroQuery = { __typename?: 'Query', amHero?: { __typename: 'AmHero', headerCopy?: string | null, subHeaderCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename?: 'Asset', fileName?: string | null, url?: string | null } | null } | null };

export type AmWhyAmFieldsFragment = { __typename: 'WhyAmBlock', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'WhyAmBlockBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfAmWhyAmQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfAmWhyAmQuery = { __typename?: 'Query', whyAmBlock?: { __typename: 'WhyAmBlock', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'WhyAmBlockBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type BusinessInfoFieldsFragment = { __typename: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfBusinessInfoQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfBusinessInfoQuery = { __typename?: 'Query', topicBusinessInfo?: { __typename: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type AmCtaFeatureBlockieldsFragment = { __typename: 'AmCtaFeatureBlock', headline?: string | null, bodyCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfCtaFeatureBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfCtaFeatureBlockQuery = { __typename?: 'Query', amCtaFeatureBlock?: { __typename: 'AmCtaFeatureBlock', headline?: string | null, bodyCopy?: string | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string }, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type CtaFieldsFragment = { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null };

export type CtfCtaQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfCtaQuery = { __typename?: 'Query', componentCta?: { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null } | null };

export type DuplexFieldsFragment = { __typename: 'ComponentDuplex', containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfDuplexQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfDuplexQuery = { __typename?: 'Query', componentDuplex?: { __typename: 'ComponentDuplex', containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type FeaturedNewsFieldsFragment = { __typename?: 'NewsArticle', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type InsightsPageFieldsFragment = { __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type AmFeaturedInsightsFieldsFragment = { __typename: 'AmFeaturedInsights', headerText?: string | null, newsHeaderText?: string | null, enableNewsBlock?: boolean | null, sys: { __typename?: 'Sys', id: string }, featuredInsight?: { __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, featuredNewsCollection?: { __typename?: 'AmFeaturedInsightsFeaturedNewsCollection', items: Array<{ __typename?: 'NewsArticle', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, additionalInsightsCollection?: { __typename?: 'AmFeaturedInsightsAdditionalInsightsCollection', items: Array<{ __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null };

export type CtfFeaturedInsightsQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfFeaturedInsightsQuery = { __typename?: 'Query', amFeaturedInsights?: { __typename: 'AmFeaturedInsights', headerText?: string | null, newsHeaderText?: string | null, enableNewsBlock?: boolean | null, sys: { __typename?: 'Sys', id: string }, featuredInsight?: { __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, featuredNewsCollection?: { __typename?: 'AmFeaturedInsightsFeaturedNewsCollection', items: Array<{ __typename?: 'NewsArticle', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, additionalInsightsCollection?: { __typename?: 'AmFeaturedInsightsAdditionalInsightsCollection', items: Array<{ __typename?: 'AmInsights', name?: string | null, slug?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null };

export type PodcastFieldsFragment = { __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type VideoFieldsFragment = { __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type AmFeaturedMediaBlockFieldsFragment = { __typename: 'AmFeaturedMediaBlock', headerText?: string | null, sys: { __typename?: 'Sys', id: string }, featuredVideo?: { __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, featuredPodcast?: { __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, podcastsCollection?: { __typename?: 'AmFeaturedMediaBlockPodcastsCollection', items: Array<{ __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, videosCollection?: { __typename?: 'AmFeaturedMediaBlockVideosCollection', items: Array<{ __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null };

export type CtfFeaturedMediaBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfFeaturedMediaBlockQuery = { __typename?: 'Query', amFeaturedMediaBlock?: { __typename: 'AmFeaturedMediaBlock', headerText?: string | null, sys: { __typename?: 'Sys', id: string }, featuredVideo?: { __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, featuredPodcast?: { __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, podcastsCollection?: { __typename?: 'AmFeaturedMediaBlockPodcastsCollection', items: Array<{ __typename?: 'AmPodcasts', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null, videosCollection?: { __typename?: 'AmFeaturedMediaBlockVideosCollection', items: Array<{ __typename?: 'AmVideos', name?: string | null, slug?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string, firstPublishedAt?: any | null }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null };

export type FooterFieldsFragment = { __typename?: 'FooterMenuCollection', items: Array<{ __typename: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null } | null> };

export type CtfFooterQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footerMenuCollection?: { __typename?: 'FooterMenuCollection', items: Array<{ __typename: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null } | null> } | null };

export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, ctaTargetLink?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfHeroBannerQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, ctaTargetLink?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type InfoBlockFieldsFragment = { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null };

export type CtfInfoBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfInfoBlockQuery = { __typename?: 'Query', componentInfoBlock?: { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null } | null };

export type NavigationFieldsFragment = { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, link?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, children?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null } | null> };

export type CtfNavigationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfNavigationQuery = { __typename?: 'Query', navigationMenuCollection?: { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, link?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null, children?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null> } | null } | null> } | null };

type PageTopSectionFields_AmHero_Fragment = { __typename: 'AmHero' };

type PageTopSectionFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageTopSectionFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageTopSectionFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable' };

type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageTopSectionFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

type PageTopSectionFields_WhyAmBlock_Fragment = { __typename: 'WhyAmBlock' };

export type PageTopSectionFieldsFragment = PageTopSectionFields_AmHero_Fragment | PageTopSectionFields_ComponentCta_Fragment | PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentInfoBlock_Fragment | PageTopSectionFields_ComponentProductTable_Fragment | PageTopSectionFields_ComponentQuote_Fragment | PageTopSectionFields_ComponentTextBlock_Fragment | PageTopSectionFields_WhyAmBlock_Fragment;

type PageContentFields_AmHero_Fragment = { __typename: 'AmHero' };

type PageContentFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo' };

type PageContentFields_TopicProduct_Fragment = { __typename: 'TopicProduct' };

type PageContentFields_TopicProductFeature_Fragment = { __typename: 'TopicProductFeature' };

export type PageContentFieldsFragment = PageContentFields_AmHero_Fragment | PageContentFields_TopicBusinessInfo_Fragment | PageContentFields_TopicProduct_Fragment | PageContentFields_TopicProductFeature_Fragment;

type PageExtraSectionItemFields_AmCtaFeatureBlock_Fragment = { __typename: 'AmCtaFeatureBlock' };

type PageExtraSectionItemFields_AmFeaturedInsights_Fragment = { __typename: 'AmFeaturedInsights' };

type PageExtraSectionItemFields_AmFeaturedMedia_Fragment = { __typename: 'AmFeaturedMedia' };

type PageExtraSectionItemFields_AmFeaturedMediaBlock_Fragment = { __typename: 'AmFeaturedMediaBlock' };

type PageExtraSectionItemFields_AmHero_Fragment = { __typename: 'AmHero' };

type PageExtraSectionItemFields_AmTestimonial_Fragment = { __typename: 'AmTestimonial' };

type PageExtraSectionItemFields_AmTestimonialsBlock_Fragment = { __typename: 'AmTestimonialsBlock' };

type PageExtraSectionItemFields_AmValueProp_Fragment = { __typename: 'AmValueProp' };

type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageExtraSectionItemFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

type PageExtraSectionItemFields_WhyAmBlock_Fragment = { __typename: 'WhyAmBlock' };

export type PageExtraSectionItemFieldsFragment = PageExtraSectionItemFields_AmCtaFeatureBlock_Fragment | PageExtraSectionItemFields_AmFeaturedInsights_Fragment | PageExtraSectionItemFields_AmFeaturedMedia_Fragment | PageExtraSectionItemFields_AmFeaturedMediaBlock_Fragment | PageExtraSectionItemFields_AmHero_Fragment | PageExtraSectionItemFields_AmTestimonial_Fragment | PageExtraSectionItemFields_AmTestimonialsBlock_Fragment | PageExtraSectionItemFields_AmValueProp_Fragment | PageExtraSectionItemFields_ComponentCta_Fragment | PageExtraSectionItemFields_ComponentDuplex_Fragment | PageExtraSectionItemFields_ComponentHeroBanner_Fragment | PageExtraSectionItemFields_ComponentInfoBlock_Fragment | PageExtraSectionItemFields_ComponentQuote_Fragment | PageExtraSectionItemFields_ComponentTextBlock_Fragment | PageExtraSectionItemFields_WhyAmBlock_Fragment;

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type PersonFieldsFragment = { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfPersonQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPersonQuery = { __typename?: 'Query', topicPerson?: { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type ProductFeatureFieldsFragment = { __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfProductFeatureQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfProductFeatureQuery = { __typename?: 'Query', topicProductFeature?: { __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type ProductTableFieldsFragment = { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<{ __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null> } | null };

export type CtfProductTableQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfProductTableQuery = { __typename?: 'Query', componentProductTable?: { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<{ __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null> } | null } | null };

export type ProductFieldsFragment = { __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type CtfProductQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfProductQuery = { __typename?: 'Query', topicProduct?: { __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

export type QuoteFieldsFragment = { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfQuoteQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null };

export type CtfRichTextHyperlinkQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfRichTextHyperlinkQuery = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null };

export type AmTestimonialFieldsFragment = { __typename: 'AmTestimonial', testimonialBody?: string | null, witness?: string | null, witnessTitle?: string | null, sys: { __typename?: 'Sys', id: string }, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfTestimonialQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfTestimonialQuery = { __typename?: 'Query', amTestimonial?: { __typename: 'AmTestimonial', testimonialBody?: string | null, witness?: string | null, witnessTitle?: string | null, sys: { __typename?: 'Sys', id: string }, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type AmTestimonialsBlockFieldsFragment = { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string }, testimonialsCollection?: { __typename?: 'AmTestimonialsBlockTestimonialsCollection', items: Array<{ __typename: 'AmTestimonial', testimonialBody?: string | null, witness?: string | null, witnessTitle?: string | null, sys: { __typename?: 'Sys', id: string }, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null };

export type CtfTestimonialsBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfTestimonialsBlockQuery = { __typename?: 'Query', amTestimonialsBlock?: { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string }, testimonialsCollection?: { __typename?: 'AmTestimonialsBlockTestimonialsCollection', items: Array<{ __typename: 'AmTestimonial', testimonialBody?: string | null, witness?: string | null, witnessTitle?: string | null, sys: { __typename?: 'Sys', id: string }, featuredMedia?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, backgroundImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | null };

export type TextBlockFieldsFragment = { __typename: 'ComponentTextBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfTextBlockQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfTextBlockQuery = { __typename?: 'Query', componentTextBlock?: { __typename: 'ComponentTextBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<{ __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } } | { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } } | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type AmValuePropFieldsFragment = { __typename: 'AmValueProp', headerTextLeft?: string | null, metricsBlockTitle?: string | null, metrics?: any | null, supplementalNavigation?: boolean | null, supplementalNavigationTitle?: string | null, supplementalNavigationTitleLeft?: string | null, supplementalNavigationItemsLeft?: any | null, supplementalNavigationTitleRight?: string | null, supplementalNavigationItemsRight?: any | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string } };

export type CtfValuePropQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfValuePropQuery = { __typename?: 'Query', amValueProp?: { __typename: 'AmValueProp', headerTextLeft?: string | null, metricsBlockTitle?: string | null, metrics?: any | null, supplementalNavigation?: boolean | null, supplementalNavigationTitle?: string | null, supplementalNavigationTitleLeft?: string | null, supplementalNavigationItemsLeft?: any | null, supplementalNavigationTitleRight?: string | null, supplementalNavigationItemsRight?: any | null, ctaCopy?: string | null, ctaTargetLink?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null };

type ComponentReferenceFields_AmCtaFeatureBlock_Fragment = { __typename: 'AmCtaFeatureBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmFeaturedInsights_Fragment = { __typename: 'AmFeaturedInsights', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmFeaturedMedia_Fragment = { __typename: 'AmFeaturedMedia', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmFeaturedMediaBlock_Fragment = { __typename: 'AmFeaturedMediaBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmHero_Fragment = { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmInsights_Fragment = { __typename: 'AmInsights', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmPodcasts_Fragment = { __typename: 'AmPodcasts', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmTestimonial_Fragment = { __typename: 'AmTestimonial', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmTestimonialsBlock_Fragment = { __typename: 'AmTestimonialsBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmValueProp_Fragment = { __typename: 'AmValueProp', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_AmVideos_Fragment = { __typename: 'AmVideos', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentCta_Fragment = { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_InsightsPage_Fragment = { __typename: 'InsightsPage', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NewsArticle_Fragment = { __typename: 'NewsArticle', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicPerson_Fragment = { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProduct_Fragment = { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProductFeature_Fragment = { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_WhyAmBlock_Fragment = { __typename: 'WhyAmBlock', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_AmCtaFeatureBlock_Fragment | ComponentReferenceFields_AmFeaturedInsights_Fragment | ComponentReferenceFields_AmFeaturedMedia_Fragment | ComponentReferenceFields_AmFeaturedMediaBlock_Fragment | ComponentReferenceFields_AmHero_Fragment | ComponentReferenceFields_AmInsights_Fragment | ComponentReferenceFields_AmPodcasts_Fragment | ComponentReferenceFields_AmTestimonial_Fragment | ComponentReferenceFields_AmTestimonialsBlock_Fragment | ComponentReferenceFields_AmValueProp_Fragment | ComponentReferenceFields_AmVideos_Fragment | ComponentReferenceFields_ComponentCta_Fragment | ComponentReferenceFields_ComponentDuplex_Fragment | ComponentReferenceFields_ComponentHeroBanner_Fragment | ComponentReferenceFields_ComponentInfoBlock_Fragment | ComponentReferenceFields_ComponentProductTable_Fragment | ComponentReferenceFields_ComponentQuote_Fragment | ComponentReferenceFields_ComponentTextBlock_Fragment | ComponentReferenceFields_FooterMenu_Fragment | ComponentReferenceFields_InsightsPage_Fragment | ComponentReferenceFields_MenuGroup_Fragment | ComponentReferenceFields_NavigationMenu_Fragment | ComponentReferenceFields_NewsArticle_Fragment | ComponentReferenceFields_Page_Fragment | ComponentReferenceFields_Seo_Fragment | ComponentReferenceFields_TopicBusinessInfo_Fragment | ComponentReferenceFields_TopicPerson_Fragment | ComponentReferenceFields_TopicProduct_Fragment | ComponentReferenceFields_TopicProductFeature_Fragment | ComponentReferenceFields_WhyAmBlock_Fragment;

export type MenuGroupFieldsFragment = { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?: { __typename: 'AmHero', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } } | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } } | null } | null> };
