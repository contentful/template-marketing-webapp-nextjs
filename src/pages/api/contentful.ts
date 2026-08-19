import type { NextApiRequest, NextApiResponse } from 'next';

import { getContentfulQuery } from '@src/lib/contentfulQueries';
import { fetchContentful } from '@src/lib/serverFetchConfig';

type ContentfulResponse = {
  data?: unknown;
  errors?: unknown;
};

type ContentfulVariables = {
  id?: string | null;
  locale?: string | null;
  preview?: boolean | null;
  slug?: string | null;
};

type ContentfulRequestBody = {
  operationName?: string;
  variables?: ContentfulVariables;
};

const isRequestBody = (value: ContentfulRequestBody | null): value is ContentfulRequestBody =>
  value !== null && Object.prototype.toString.call(value) === '[object Object]';

const isNonEmptyString = (value: string | undefined): value is string =>
  value !== undefined &&
  Object.prototype.toString.call(value) === '[object String]' &&
  value.trim().length > 0;

const isContentfulVariables = (value: ContentfulVariables | null): value is ContentfulVariables => {
  if (value === null || Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  return (
    (value.id === undefined ||
      value.id === null ||
      Object.prototype.toString.call(value.id) === '[object String]') &&
    (value.locale === undefined ||
      value.locale === null ||
      Object.prototype.toString.call(value.locale) === '[object String]') &&
    (value.preview === undefined ||
      value.preview === null ||
      value.preview === true ||
      value.preview === false) &&
    (value.slug === undefined ||
      value.slug === null ||
      Object.prototype.toString.call(value.slug) === '[object String]')
  );
};

const isContentfulResponse = (value: ContentfulResponse | null): value is ContentfulResponse =>
  value !== null &&
  Object.prototype.toString.call(value) === '[object Object]' &&
  ('data' in value || 'errors' in value);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentfulResponse | { error: string }>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isRequestBody(req.body)) {
    return res.status(400).json({ error: 'Request body must be JSON' });
  }

  const { operationName, variables } = req.body;

  if (!isNonEmptyString(operationName)) {
    return res.status(400).json({ error: 'Operation name is required' });
  }

  const query = getContentfulQuery(operationName);

  if (!query) {
    return res.status(400).json({ error: 'Unknown operation' });
  }

  if (variables !== undefined && !isContentfulVariables(variables)) {
    return res.status(400).json({ error: 'Variables must be a JSON object' });
  }

  try {
    const response = await fetchContentful(query, variables);
    const body = await response.json();

    if (!isContentfulResponse(body)) {
      return res.status(502).json({ error: 'Invalid Contentful response' });
    }

    return res.status(response.status).json(body);
  } catch (error) {
    console.error('Contentful proxy request failed', error);
    return res.status(502).json({ error: 'Contentful request failed' });
  }
}
