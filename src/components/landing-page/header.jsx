import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between py-6 xl:px-[168px] sm:px-8 px-5 md:mb-[70px]">
            <Link href='/' className="lg:w-[140px] w-[89px] lg:h-[40px] h-[24px] flex justify-start relative">
                <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                    src='/assets/Logo.png'
                    alt="netflix logo"
                    fill
                />
            </Link>
            <Link href='/signIn' className="sm:px-[16px] px-2 mb-0 leading-[30px] flex flex-col justify-center bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] text-white rounded-[3px]">Sign In</Link>
        </header>
    )
}
