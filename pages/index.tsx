import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import { sanityClient, urlFor } from "../sanity"
import { Post } from "../typings"

interface Props {
  posts: [Post];
}

// const Home: NextPage = (props: Props) => {
export default function Home({ posts }: Props) {
  console.log(posts)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="">Hello World</h1>
      <p>replacer</p>
    </div>

  )
}

// export default Home

export const getServersideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
      name,
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    }
  }
}