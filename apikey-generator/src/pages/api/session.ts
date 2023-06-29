import { db } from '@/lib/db';
import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';
import { formatDistance } from 'date-fns';

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

    const apiKeys = await db.apiKey.findMany({
      where: { userId: session.user.id}
    });

    const activeApiKey = await apiKeys.find((apiKey) => apiKey.enabled);

    if(!activeApiKey) return; //if there is no active api key then return;

    const userRequests = await db.apiRequest.findMany({
      where: {
        apiKeyId: {
          in: apiKeys.map((key) => key.id),
        }
      }
    })

    const serializedRequest = userRequests.map((req) => ({
      ...req,
      timestamp: formatDistance(new Date(req.timeStamps), new Date()),
    }))
  
    res.status(200).json({ session, apiKey, apiKeys, activeApiKey, userRequests, serializedRequest });
    // return { session, apiKey};
  } catch(error: any) {
    res.status(500).json({ error: "Internal Server Error" });
    throw new Error(error.message);
  }
}
