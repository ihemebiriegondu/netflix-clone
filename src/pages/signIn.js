import Head from "next/head";
import Header from "@/components/signin/header";


export default function signIn() {
    return (
        <>
            <Head>
                <title>Netflix clone signIn</title>
                <meta name="description" content="Netflix clone app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/4375011_logo_netflix_icon.png" />
            </Head>
            <main className="absolute top-0 bottom-0 w-full herosection">
                <div className="absolute h-full w-full bg-black/60">
                    <Header />
                </div>
            </main>
        </>
    )
}
