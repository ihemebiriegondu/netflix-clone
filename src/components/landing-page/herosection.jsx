import { useState } from "react";
import Image from "next/image"

export default function Herosection() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            document.getElementById('emailInput').focus();
        }
        setEmail('')
    }

    return (
        <section className="px-[10px] md:pt-[74px] pt-8 pb-[74px] text-white">
            <div className="lg:w-[899.237px] mx-auto">
                <h2 className="lg:text-[3rem] text-[2rem] sm:leading-[70px] text-center sm:mb-4 mb-3 font-black" style={({fontFamily: 'netflixSanBold'})}>Unlimited movies, TV shows, and more.</h2>
                <p className="lg:text-[26px] text-lg text-center mb-4">Watch anywhere. Cancel anytime.</p>
            </div>
            <form onSubmit={(e) => {handleSubmit(e)}} className="mb-[70px] lg:w-[835.237px] md:w-10/12 sm:w-8/12 w-full sm:px-[0px] px-8 mx-auto flex flex-col justify-center content-center">
                <p className="lg:text-[1.25rem] text-lg text-center mb-[19px]">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="2xl:w-2/3 xl:w-3/4 lg:w-10/12 w-11/12 flex md:flex-row flex-col justify-center mx-auto">
                    <input type="email" id="emailInput" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="Email address" className="md:w-3/5 md:mb-0 mb-[10px] w-full px-[8px] md:py-2 py-4 rounded-md bg-black/40 mr-2 border border-[#8C8C8C] outline-none hover:outline-none text-white focus:border-white focus:border-2 transition-all duration-100 ease-in-out" />
                    <button className="flex content-center w-auto md:mx-0 mx-auto bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] text-white md:py-3 md:px-6 px-4 py-2 rounded-md shadow-[0px_1px_0px_rgba(0,0,0,0.45)]">
                        <span className="mr-3 md:text-2xl text-lg md:font-black font-bold">Get Started</span>
                        <span className="relative md:w-[9.22px] w-[8px] md:h-[20.36px] h-[15px] flex justify-center sm:mt-[6px] mt-[16px] font-black">
                            <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                                src='/assets/Vector.png'
                                alt="next icon"
                                fill
                            />
                        </span>
                    </button>
                </div>
            </form>
        </section>
    )
}
