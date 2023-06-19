import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '~/components/section/Hero'
import HowItWorks from '~/components/section/HowItWorks'
import Layout from '~/components/Layout/main'
const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
    </Layout>
  )
}

export default Home
