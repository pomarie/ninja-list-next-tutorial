import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/comps/Navbar'
import Footer from '@/comps/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

export default function Home({ ninjas }) {
  return (
    <>
      <Head>
        <title>Page Title</title>
      </Head>
      <div>
        <h1 className={styles.title}>Look at these people!</h1>
        {/* {console.log(ninjas)} */}

        {ninjas.map(ninja => (
          <div key={ninja.id}>
            <Link style={{ "text-align": 'center' }} href={`/${ninja.id}`}>{ninja.name}</Link>
          </div>
        ))}

        <Link className={styles.btn} href="/about">Go to about page</Link>
      </div>
    </>
  )
}
