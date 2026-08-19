import type { NextApiRequest, NextApiResponse } from 'next';

import { getContentfulQuery } from '@src/lib/contentfulQueries';
import { fetchContentful } from '@src/lib/serverFetchConfig';

type ContentfulResponse = {
  data?: unknown;
  errors?: unknown;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentfulResponse | { error: string }>,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({ error: 'Request body must be JSON' });
  }

  const { operationName, variables } = req.body as {
    operationName?: string;
    variables?: Record<string, unknown> & { preview?: boolean | null };
  };

  if (typeof operationName !== 'string' || !operationName.trim()) {
    return res.status(400).json({ error: 'Operation name is required' });
  }

  const query = getContentfulQuery(operationName);

  if (!query) {
    return res.status(400).json({ error: 'Unknown operation' });
  }

  try {
    const response = await fetchContentful(query, variables);
    const body = (await response.json()) as ContentfulResponse;

    return res.status(response.status).json(body);
  } catch (error) {
    console.error('Contentful proxy request failed', error);
    return res.status(502).json({ error: 'Contentful request failed' });
  }
}
