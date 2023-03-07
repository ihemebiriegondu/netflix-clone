import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between py-6 px-8">
            <Link href='/' className="w-[167px] h-[49px] inline-block relative">
                <Image className="object-cover absolute top-0 bottom-0 w-full h-full"
                    src='/assets/Logo.png'
                    alt="netflix logo"
                    fill
                />
            </Link>
            <Link href='/signin' className="px-[18px] mb-0 leading-[30px] py-[7px] bg-primaryRed text-white rounded-[3px]">Sign In</Link>
        </header>
    )
}
