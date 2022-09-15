export interface ContentfulConfig {
  mainSpace: SpaceConfig;
}

export interface SpaceConfig {
  spaceId: string;
  apiKey: string;
  previewApiKey: string;
}
