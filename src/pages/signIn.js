import Head from "next/head";
import Header from "@/components/signin/header";
import Form from "@/components/signin/form";


export default function signIn() {
    return (
        <>
            <Head>
                <title>Netflix clone signIn</title>
                <meta name="description" content="Netflix clone app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/4375011_logo_netflix_icon.png" />
            </Head>
            <main className="h-full herosection">
                <div className="sm:bg-black/60 bg-black pb-[90px]">
                    <Header />
                    <Form />
                </div>
            </main>
        </>
    )
}
