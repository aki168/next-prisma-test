// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const createMany = await prisma.user.createMany({
    data: [
      {
        id: "1",
        name: "aki",
        email: "aki@mail.com",
      }
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  
  res.status(200).json({ msg: "success" })
}



