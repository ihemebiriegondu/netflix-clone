import Link from "next/link"


export default function Footer() {
    return (
        <footer className="pt-[73px] pb-[33px] bg-black text-[#757575]">
            <div className="xl:w-8/12 lg:w-9/12 w-10/12 mx-auto">
                <Link href='/' className="mb-[30.23px] inline-block">Questions? Contact us.</Link>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-x-2 text-[13px] md:mb-[35px] mb-[20px]">
                    <ul className="">
                        <li className="mb-[15px]"><Link href='/'>FAQ</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Cookie Preferences</Link></li>
                        <li className="mb-[15px] md:hidden sm:block hidden"><Link href='/'>Privacy</Link></li>
                        <li className="mb-[15px] sm:hidden block"><Link href='/'>Terms of Use</Link></li>
                        <li className="mb-[15px] sm:hidden block"><Link href='/'>Cookie Preferences</Link></li>
                    </ul>
                    <ul className="">
                        <li className="mb-[15px]"><Link href='/'>Help Center</Link></li>
                        <li className="mb-[15px] md:hidden sm:hidden"><Link href='/'>Privacy</Link></li>
                        <li className="mb-[15px] md:block sm:hidden"><Link href='/'>Corporate Infomation</Link></li>
                        <li className="mb-[15px] sm:block md:hidden hidden"><Link href='/'>Cookie Preferences</Link></li>
                    </ul>
                    <ul className="">
                        <li className="mb-[15px] sm:block hidden"><Link href='/'>Terms of Use</Link></li>
                        <li className="mb-[15px] sm:block md:hidden hidden"><Link href='/'>Corporate Infomation</Link></li>
                    </ul>

                    <ul className="">
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Privacy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
