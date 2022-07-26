import type { NextApiRequest, NextApiResponse } from 'next'

type Post = {
  id: number;
  name: string;
}

const POSTS: Post[] = [
  {
    id: 1,
    name: 'Title #1'
  },
  {
    id: 2,
    name: 'Title #2'
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  res.status(200).json(POSTS)
}
