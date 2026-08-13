import type { NextApiRequest, NextApiResponse } from 'next';

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

  const { query, variables } = req.body as {
    query?: string;
    variables?: { preview?: boolean | null };
  };

  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }

  const response = await fetchContentful(query, variables);

  const body = (await response.json()) as ContentfulResponse;

  return res.status(response.status).json(body);
}
