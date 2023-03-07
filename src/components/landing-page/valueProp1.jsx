import Image from "next/image"

export default function ValueProp1() {
    return (
        <section className="bg-black py-[30px] text-white">
            <div className="w-3/4 mx-auto flex">
                <div className="py-[112px] pr-16 w-7/12">
                    <h3 className="text-[50px] font-bold mb-2">Enjoy on your TV.</h3>
                    <p className="text-[26px]">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                </div>
                <div className="relative w-[530px] h-[398px]">
                    <Image className="object-cover absolute top-0 bottom-0 w-full h-full"
                        src='/assets/Frame 6.png'
                        alt="netflix logo"
                        fill
                    />
                </div>
            </div>
        </section>
    )
}
