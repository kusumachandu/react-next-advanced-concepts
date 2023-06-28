import { db } from '@/lib/db';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function sessionHandler(req: NextApiRequest, res: NextApiResponse) {

  try {
    const session = await getSession({req});
  
    if (!session) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }
    const apiKey = await db.apiKey.findFirst({
      where: { userId: session.user.id, enabled: true },
    });
  
    res.status(200).json({ session, apiKey });
    // return { session, apiKey};
  } catch(error: any) {
    res.status(500).json({ error: "Internal Server Error" });
    throw new Error(error.message);
  }
}
