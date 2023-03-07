import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix clone</title>
        <meta name="description" content="Netflix clone app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          <h1 className={inter.className}>Hiiii</h1>
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        </div>
      </main>
    </>
  )
}
