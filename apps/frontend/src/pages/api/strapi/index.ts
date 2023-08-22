import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { HttpMethod } from '@/types';
import { getPageBySlug } from '@/utils/strapi';
import { authOptions } from '../[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // const session = await getServerSession(req, res, authOptions);

  // if (!session) {
  //   return res.status(403).end();
  // }

  switch (req.method) {
    case HttpMethod.GET:
      return getPageBySlug('home', 'en');
    default:
      res.setHeader('Allow', HttpMethod.GET);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
