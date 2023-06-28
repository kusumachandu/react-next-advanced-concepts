import { createApiKey } from "@/helpers/create-api-key";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { CreateApiData } from "@/types/api";
import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth";
import {nanoid} from "nanoid";
import { z } from "zod";
import { withMethods } from "@/lib/api-middlewares/with-methods";
import { getSession } from "next-auth/react";

const handler = async (req: NextApiRequest, res: NextApiResponse<CreateApiData> ) => {
  try {
    const user = await getSession({req})
    console.log(user);

    if(!user) {
      return res.status(401).json({
        error: 'unauthorised to perform this action',
        createdApiKey: null
      })
    }

    const existingApiKey = await db.apiKey.findFirst({
      where: {userId: user.user.id, enabled: true}
    })

    console.log(existingApiKey);

    if(existingApiKey) {
      return res.status(400).json({
        error: 'already having a valid api key',
        createdApiKey: null,
      })
    }

    const createdApiKey = await db.apiKey.create({
      data: {
        userId: user.user.id,
        key: nanoid()
      }
    })

    return res.status(200).json({error: null, createdApiKey})

  } catch (error) {
    console.log(error);
    if(error instanceof z.ZodError) {
      return res.status(400).json({error: error.issues, createdApiKey: null})
    }

    return res.status(500).json({error: "something internal server error", createdApiKey: null})
  }
}

export default withMethods(['GET'], handler);