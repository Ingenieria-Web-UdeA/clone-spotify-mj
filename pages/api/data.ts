// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Playlists } from '@/datos';

export default function handler(req: NextApiRequest, res: NextApiResponse<typeof Playlists>) {
  res.status(200).json({ ...Playlists });
}
