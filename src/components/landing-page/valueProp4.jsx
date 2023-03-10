import Image from "next/image"

export default function ValueProp4() {
    return (
        <section className="bg-black py-[30px] text-white">
            <div className="2xl:w-3/4 xl:w-4/5 w-11/12 mx-auto flex lg:flex-row-reverse flex-col">
                <div className="lg:pt-[112px] lg:pb-[112px] pt-[45px] pb-0 lg:pr-16 lg:w-7/12 w-full">
                    <h3 className="lg:text-[50px] sm:text-[2.5rem] text-2xl font-black lg:mb-8 mb-6 lg:text-start text-center">Create profiles for kids.</h3>
                    <p className="lg:text-[26px] sm:text-xl text-lg lg:text-start text-center">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
                </div>
                <div className="relative lg:w-[530px] sm:w-2/3 w-full lg:mx-0 mx-auto lg:h-[398px] h-[400px] sm:mt-0">
                    <Image className="md:object-cover object-scale-down absolute top-0 bottom-0 w-full h-full"
                        src='/assets/nigkids.png'
                        alt="netflix logo"
                        fill
                    />
                </div>
            </div>
        </section>
    )
}