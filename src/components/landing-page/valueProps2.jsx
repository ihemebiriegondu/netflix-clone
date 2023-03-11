import Image from "next/image"

export default function ValueProp2() {
    return (
        <section className="bg-black py-[30px] text-white">
            <div className="2xl:w-3/4 xl:w-4/5 w-11/12 mx-auto flex lg:flex-row-reverse flex-col">
                <div className="lg:pt-[112px] lg:pb-[112px] pt-[45px] pb-0 lg:pr-16 lg:w-7/12 w-full">
                    <h3 className="lg:text-[50px] sm:text-[2.5rem] sm:leading-[60px] text-2xl font-black lg:mb-8 mb-6 lg:text-start text-center">Download your shows to watch offline.</h3>
                    <p className="lg:text-[26px] sm:text-xl text-lg lg:text-start text-center">Save your favorites easily and always have something to watch.</p>
                </div>
                <div className="relative lg:w-[530px] sm:w-2/3 w-full lg:mx-0 mx-auto lg:h-[398px] h-[400px] sm:mt-0">
                    <Image className="md:object-cover object-scale-down absolute top-0 bottom-0 w-full h-full"
                        src='/assets/strangerthings.jpg'
                        alt="stranger things"
                        fill
                    />
                    <div className="absolute bottom-[27px] w-full h-[104px] z-20">
                        <div className="flex justify-between content-center lg:w-[330px] sm:w-[384px] w-[270px] mx-auto py-[10px] px-[14px] bg-black border border-2 border-[rgba(255,255,255,0.25)] shadow-[0px_0px_32px_#000000] rounded-[12px]">
                            <div className="flex content-center">
                                <div className="md:h-[4.5rem] sm:h-[4rem] h-[3rem] w-[53px] mr-[16.35px] relative">
                                    <Image className="md:object-cover object-scale-down absolute top-0 bottom-0 w-full h-full"
                                        src='/assets/boxshot.png'
                                        alt="stranger things"
                                        fill
                                    />
                                </div>
                                <div className="my-auto">
                                    <p className="sm:text-base text-sm">Stranger Things</p>
                                    <p className="sm:text-sm text-xs text-[#0071EB]">Downloading...</p>
                                </div>
                            </div>
                            <div className="lg:h-[3.75rem] h-[3rem] w-[3rem] relative my-auto">
                                <Image className="md:object-cover object-scale-down absolute top-0 bottom-0 w-full h-full"
                                    src='/assets/download-icon.gif'
                                    alt="stranger things"
                                    fill
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}