import type { NextPage, GetServerSideProps } from 'next'

type Post = {
  id: number;
  title: string;
}

interface IProps {
  data: Post[];
}

const POST: NextPage<IProps> = ({data}) => {
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/posts`)
  const data = await res.json()
  return { props: { data }}
}

export default POST
