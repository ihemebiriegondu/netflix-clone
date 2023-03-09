import Link from "next/link"


export default function Form() {
    return (
        <div className="sm:bg-black/75 bg-black sm:w-[450px] w-full mx-auto sm:pt-[60px] pt-[20px] pb-[143px] md:px-[68px] sm:px-[34.75px] px-[16px]">
            <form className="sm:mb-[46px] mb-[16px]">
                <h3 className="mb-[26px] text-white text-[2rem] font-bold">Sign In</h3>
                <input type="text" placeholder="Email or phone number" className="bg-[#333333] w-full rounded-[4px] py-[15px] px-[20px] placeholder:text-[#8C8C8C] text-white border-none outline-none mb-[14px]" />
                <input type="password" placeholder="Password" className="bg-[#333333] w-full rounded-[4px] py-[15px] px-[20px] placeholder:text-[#8C8C8C] text-white border-none outline-none mb-[42px]" />
                <button className="text-white bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] mb-[15px] shadow-[0px_1px_0px_rgba(0,0,0,0.55)] font-bold py-[1rem] px-4 w-full rounded-[4px]">Sign In</button>
                <div className="flex justify-between">
                    <div className="flex">
                        <input type="checkbox" name="" id="" className="accent-[#B3B3B3] w-[18px] h-[21.6px] mr-2" />
                        <p className="text-[#B3B3B3] text-[13px]">Remember me</p>
                    </div>
                    <p className="text-[#B3B3B3] text-[13px]">Need help?</p>
                </div>
            </form>
            <div className="pt-4">
                <p className="text-[#B3B3B3] mb-[14px]">New to Netflix? <span className="text-white">Sign up now</span>.</p>
                <p className="text-[#B3B3B3] text-[13px]">This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link href='' className="text-[#0071EB]">Learn more.</Link></p>
            </div>
        </div>
    )
}
