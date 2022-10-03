import { createClient } from 'contentful-management';

import { ProvisionStep } from './types';

import catchify from 'catchify';

interface SetPreviewUrlsProps {
  spaceId: string;
  cmaToken: string;
  deploymentUrl: string;
}

export const setPreviewUrls: ProvisionStep<SetPreviewUrlsProps> = async ({
  spaceId,
  cmaToken,
  deploymentUrl,
}) => {
  const client = createClient({
    accessToken: cmaToken,
  });

  const [previewsError, previews] = await catchify(
    client.rawRequest({
      method: 'GET',
      url: `https://api.contentful.com/spaces/${spaceId}/preview_environments`,
    }),
  );

  if (previewsError !== null) {
    console.error(previewsError);
    return {
      state: 'error',
      error: 'Failed to set preview urls - get preview_environments error',
    };
  }

  const webPreview = previews.items.find(preview => preview.name === 'Web Preview');

  if (webPreview !== undefined) {
    // A preview already exists (as it would if we are re-using space),
    // update it with a new Vercel url
    const [updatePreviewError, updatePreview] = await catchify(
      client.rawRequest({
        method: 'PUT',
        url: `https://api.contentful.com/spaces/${spaceId}/preview_environments/${webPreview.sys.id}`,
        data: {
          configurations: [
            {
              contentType: 'page',
              enabled: true,
              example: false,
              url: `https://${deploymentUrl}/en/{entry.fields.slug}?preview=1`,
            },
            {
              contentType: 'category',
              enabled: true,
              example: false,
              url: `https://${deploymentUrl}/en/category/{entry.fields.slug}?preview=1`,
            },
            {
              contentType: 'post',
              enabled: true,
              example: false,
              url: `https://${deploymentUrl}/en/post/{entry.fields.slug}?preview=1`,
            },
          ],
          name: 'Web Preview',
          description: '',
        },
      }),
    );

    if (updatePreviewError !== null || !updatePreview) {
      console.error(updatePreviewError);
      return {
        state: 'error',
        error: 'Failed to set preview urls - update preview_environments error',
      };
    }

    return {
      state: 'success',
      payload: updatePreview,
    };
  }

  const [createPreviewError, createPreview] = await catchify(
    client.rawRequest({
      method: 'POST',
      url: `https://api.contentful.com/spaces/${spaceId}/preview_environments`,
      data: {
        configurations: [
          {
            contentType: 'page',
            enabled: true,
            example: false,
            url: `https://${deploymentUrl}/en/{entry.fields.slug}?preview=1`,
          },
          {
            contentType: 'category',
            enabled: true,
            example: false,
            url: `https://${deploymentUrl}/en/category/{entry.fields.slug}?preview=1`,
          },
          {
            contentType: 'post',
            enabled: true,
            example: false,
            url: `https://${deploymentUrl}/en/post/{entry.fields.slug}?preview=1`,
          },
        ],
        name: 'Web Preview',
        description: '',
      },
    }),
  );

  if (createPreviewError !== null || !createPreview) {
    console.error(createPreviewError);
    return {
      state: 'error',
      error: 'Failed to set preview urls - preview_environments error',
    };
  }

  return {
    state: 'success',
    payload: createPreview,
  };
};
