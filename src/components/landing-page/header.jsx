import Image from "next/image"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between py-6 sm:px-8 px-5 mb-[70px]">
            <Link href='/' className="2xl:w-[167px] xl:w-[134px] lg:w-[108px] w-[30%] 2xl:h-[49px] xl:h-[36px] lg:h-[32px] h-[24px] flex justify-start mt-[10px] relative">
                <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                    src='/assets/Logo.png'
                    alt="netflix logo"
                    fill
                />
            </Link>
            <Link href='/signin' className="px-[17px] mb-0 leading-[30px] py-[7px] bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] text-white rounded-[3px]">Sign In</Link>
        </header>
    )
}
