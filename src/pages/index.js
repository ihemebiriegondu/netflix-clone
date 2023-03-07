import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/landing-page/header'
import Herosection from '@/components/landing-page/herosection'
import Separator from '@/components/landing-page/separator'
import ValueProp1 from '@/components/landing-page/valueProp1'

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
        <div className="herosection">
          <Header />
          <Herosection />
        </div>
        <Separator />
        <ValueProp1 />
        <Separator />
      </main>
    </>
  )
}
