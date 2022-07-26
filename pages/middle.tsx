import type { NextPage, GetServerSideProps } from 'next'
import { useEffect } from 'react'

const Middle: NextPage = () => {

  useEffect(() => {
    const res = fetch(`http://localhost:3000/api/middle`)
  }, [])
  return (
    <div>Middle</div>
  )
}

export default Middle
