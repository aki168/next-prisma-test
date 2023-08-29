// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PostProps } from '../../components/Post'
import prisma from '../../lib/prisma'

export type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const createMany = await prisma.post.createMany({
    data: [
      {
        id: "3",
        title: "Prisma is the perfect ORM for Next.js",
        content:
        "tttt Next.js go _great_ together!",
        published: true,
        authorId: "1"
      },
      {
        id: "4",
        title: "go next",
        content:
        "gogo",
        published: true,
        authorId: "1"
      },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
  
  res.status(200).json({ msg: "success" })
}



