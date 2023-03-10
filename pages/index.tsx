import type { NextPage } from 'next'
import HomePage from '../components/home/HomePage'
import { fetchApi } from '../utils/hangouts'

const Index: NextPage = ({data}:any) => {

  return (
   <HomePage data={data} />
  )
}

export default Index

export async function getStaticProps() {
  const data = await fetchApi()
  return {
    props: { data },
  }
}
