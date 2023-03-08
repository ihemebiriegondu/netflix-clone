import Link from "next/link"
import Image from "next/image"

export default function Custom404() {
    return (
        <div className="error absolute top-0 bottom-0 w-full h-full">
            <div className="bg-black absolute top-0 w-full px-8 py-4">
                <Link href='/' className="lg:w-[108px] w-[30%] lg:h-[32px] h-[24px] flex justify-start mt-[10px] relative">
                    <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                        src='/assets/Logo.png'
                        alt="netflix logo"
                        fill
                    />
                </Link>
            </div>
            <div className="my-auto h-full flex flex-col justify-center bg-black/20">
                <h1 className="text-white text-[4rem] font-semibold text-center mb-6">Lost your way?</h1>
                <p className="text-white text-2xl text-center mb-4">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page.</p>
                <div className="flex justify-center">
                    <Link className="bg-white px-[26px] py-[9px] rounded font-semibold font-xl" href='/'>Netflix Home</Link>
                </div>
            </div>
        </div>
    )
}