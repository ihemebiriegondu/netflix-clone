import Link from "next/link"
import { BsGlobe2, BsFillCaretDownFill } from 'react-icons/bs'


export default function Footer() {
    return (
        <footer className="pt-[73px] pb-[33px] bg-black text-[#757575]">
            <div className="xl:w-8/12 lg:w-9/12 w-10/12 mx-auto">
                <Link href='/' className="mb-[30.23px] inline-block">Questions? Contact us.</Link>
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 text-[13px] md:mb-[35px] mb-[20px]">
                    <ul className="sm:block hidden">
                        <li className="mb-[15px]"><Link href='/'>FAQ</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Media Center</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Ways to Watch</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Cookie Preferences</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Investor Relations</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Privacy</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Speed Test</Link></li>
                    </ul>
                    <ul className="sm:block hidden">
                        <li className="mb-[15px]"><Link href='/'>Help Center</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Investor Relations</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Terms of Use</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Corporate Infomation</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Jobs</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Cookie Preferences</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Legal Notices</Link></li>
                    </ul>
                    <ul className="sm:block hidden">
                        <li className="mb-[15px]"><Link href='/'>Account</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Jobs</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Privacy</Link></li>
                        <li className="mb-[15px] block md:hidden"><Link href='/'>Contact Us</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Ways to Watch</Link></li>
                        <li className="mb-[15px] md:block hidden"><Link href='/'>Corporate Infomation</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Only on Netflix</Link></li>
                    </ul>
                    <ul className="sm:block hidden">
                        <li className="mb-[15px]"><Link href='/'>Media Center</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Terms of Use</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Contact Us</Link></li>
                    </ul>

                    <ul className="block sm:hidden">
                        <li className="mb-[15px]"><Link href='/'>FAQ</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Account</Link></li>
                        <li className="mb-[15px]"><Link href='/'></Link>Investor Relations</li>
                        <li className="mb-[15px]"><Link href='/'>Ways to Watch</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Privacy</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Corporate Information</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Speed Test</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Only on Netflix</Link></li>
                    </ul>
                    <ul className="block sm:hidden">
                        <li className="mb-[15px]"><Link href='/'>Help Center</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Media Center</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Jobs</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Terms of Use</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Cookie Preferences</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Contact Us</Link></li>
                        <li className="mb-[15px]"><Link href='/'>Legal Notices</Link></li>
                    </ul>
                </div>
                <div className="flex content-center border border-[#8C8C8C] text-white rounded-[2px] w-fit mb-6 px-4 py-1">
                    <BsGlobe2 className="mt-1 mr-2" />
                    <p className="mb-0">English</p>
                    <BsFillCaretDownFill className="mt-[6px] ml-2 text-[13px]" />
                </div>
                <p className="text-[13px]">Netflix Nigeria</p>
            </div>
        </footer>
    )
}
