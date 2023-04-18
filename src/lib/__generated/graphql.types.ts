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
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

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

/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplex = Entry & {
  __typename?: 'ComponentDuplex';
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  containerLayout?: Maybe<Scalars['Boolean']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying side-by-side image and copy, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentDuplexOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
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

/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & {
  __typename?: 'ComponentHeroBanner';
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']>;
  heroSize?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width container for displaying images and snappy copy; can include an optional CTA [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export enum ComponentHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
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

/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
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


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Full-width component for quotes, reviews and testimonials, includes multiple layout options [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/componentQuote) */
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
  pageCollection?: Maybe<PageCollection>;
};


export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

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
};

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

/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenu = Entry & {
  __typename?: 'FooterMenu';
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']>;
  instagramLink?: Maybe<Scalars['String']>;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Navigation content type used for powering the Footer menu [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/footerMenu) */
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
  linkedinLink?: InputMaybe<Scalars['String']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type Page = Entry & {
  __typename?: 'Page';
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageName?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  sys: Sys;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']>;
};


/** Container that enables editors to publish a page, define its slug, select & arrange its content [See type definition](https://app.contentful.com/spaces/6l2051vujkx5/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']>;
  internalName_contains?: InputMaybe<Scalars['String']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  internalName_not?: InputMaybe<Scalars['String']>;
  internalName_not_contains?: InputMaybe<Scalars['String']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName?: InputMaybe<Scalars['String']>;
  pageName_contains?: InputMaybe<Scalars['String']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  pageName_not?: InputMaybe<Scalars['String']>;
  pageName_not_contains?: InputMaybe<Scalars['String']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
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

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
};

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

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int'];
  skip: Scalars['Int'];
  total: Scalars['Int'];
};

export type PageTopSectionItem = ComponentDuplex | ComponentHeroBanner | ComponentQuote;

export type Query = {
  __typename?: 'Query';
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  componentDuplex?: Maybe<ComponentDuplex>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentHeroBanner?: Maybe<ComponentHeroBanner>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentQuote?: Maybe<ComponentQuote>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  entryCollection?: Maybe<EntryCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
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

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type DuplexFieldsFragment = { __typename: 'ComponentDuplex', internalName?: string | null, containerLayout?: boolean | null, headline?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfDuplexQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfDuplexQuery = { __typename?: 'Query', componentDuplex?: { __typename: 'ComponentDuplex', internalName?: string | null, containerLayout?: boolean | null, headline?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type FooterFieldsFragment = { __typename?: 'FooterMenuCollection', items: Array<{ __typename?: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null } | null> };

export type CtfFooterQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footerMenuCollection?: { __typename?: 'FooterMenuCollection', items: Array<{ __typename?: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null } | null> } | null };

export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, headline?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfHeroBannerQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: { __typename: 'ComponentHeroBanner', internalName?: string | null, headline?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', internalName?: string | null };

type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', internalName?: string | null };

type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', internalName?: string | null };

export type PageTopSectionFieldsFragment = PageTopSectionFields_ComponentDuplex_Fragment | PageTopSectionFields_ComponentHeroBanner_Fragment | PageTopSectionFields_ComponentQuote_Fragment;

export type CtfPageFieldsFragment = { __typename?: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<{ __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null> } | null };

export type QuoteFieldsFragment = { __typename: 'ComponentQuote', internalName?: string | null, quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<{ __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfQuoteQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: { __typename: 'ComponentQuote', internalName?: string | null, quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<{ __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } } | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } } | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } } | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfRichTextHyperlinkQueryVariables = Exact<{
  id: Scalars['String'];
  locale?: InputMaybe<Scalars['String']>;
  preview?: InputMaybe<Scalars['Boolean']>;
}>;


export type CtfRichTextHyperlinkQuery = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', internalName?: string | null, sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment = ComponentReferenceFields_ComponentDuplex_Fragment | ComponentReferenceFields_ComponentHeroBanner_Fragment | ComponentReferenceFields_ComponentQuote_Fragment | ComponentReferenceFields_FooterMenu_Fragment | ComponentReferenceFields_Page_Fragment;
