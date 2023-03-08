import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/landing-page/header'
import Herosection from '@/components/landing-page/herosection'
import Separator from '@/components/landing-page/separator'
import ValueProp1 from '@/components/landing-page/valueProp1'
import ValueProp2 from '@/components/landing-page/valueProps2'
import ValueProp3 from '@/components/landing-page/valueProps3'
import ValueProp4 from '@/components/landing-page/valueProp4'
import Faqs from '@/components/landing-page/faqs'
import Footer from '@/components/landing-page/footer'

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
        <ValueProp2 />
        <Separator />
        <ValueProp3 />
        <Separator />
        <ValueProp4 />
        <Separator />
        <Faqs />
        <Separator />
        <Footer />
      </main>
    </>
  )
}
