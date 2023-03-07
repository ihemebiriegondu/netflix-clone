import Image from "next/image"

export default function Herosection() {
    return (
        <section className="md:px-[132px] sm:px-[90px] px-[10px] py-[74px] text-white">
            <div className="2xl:w-1/2 xl:w-1/2 lg:w-3/5 md:w-10/11 sm:w-full  mx-auto">
                <h2 className="2xl:text-[64px] sm:text-5xl text-2xl sm:leading-[70px] text-center sm:mb-4 mb-3 font-bold">Unlimited movies, TV shows, and more.</h2>
                <p className="sm:text-[26px] text-lg text-center mb-4">Watch anywhere. Cancel anytime.</p>
            </div>
            <div className="mb-[70px] flex flex-col justify-center content-center">
                <p className="lg:text-[19px] sm:text-[23px] text-[18px] text-center mb-[19px]">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="2xl:w-2/3 xl:w-3/4 lg:w-10/12 w-11/12 flex lg:flex-row flex-col justify-center mx-auto">
                    <input type="email" placeholder="Email address" className="lg:w-3/5 lg:mb-0 mb-[10px] w-full px-[8px] lg:py-[25px] py-[10px] rounded-tl-[2px] rounded-bl-[2px] border border-[#8C8C8C] outline-none hover:outline-none text-black" />
                    <button className="flex content-center w-auto lg:mx-0 mx-auto bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] text-white lg:py-[16px] lg:px-[31px] px-4 py-2 rounded-tr-[2px] rounded-br-[2px] shadow-[0px_1px_0px_rgba(0,0,0,0.45)]">
                        <span className="mr-4 lg:text-3xl text-base">Get Started</span>
                        <span className="relative lg:w-[9.22px] w-[8px] lg:h-[20.36px] h-[15px] flex justify-center lg:mt-2 mt-1">
                            <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                                src='/assets/Vector (1).png'
                                alt="netflix logo"
                                fill
                            />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    )
}
