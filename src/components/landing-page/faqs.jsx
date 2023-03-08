import { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { RxCross1 } from 'react-icons/rx'
import Image from 'next/image';

export default function Faqs() {

    const [showAccordion, setShowAccordion] = useState(false);
    const [accordionNo, setAccordionNo] = useState('0');

    const faqs = [
        {
            question: 'What is Netflix?',
            answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
            answer2: 'You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There\'s always something new to discover and new TV shows and movies are added every week!'
        },
        {
            question: 'How much does Netflix cost?',
            answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.',
            answer2: ''
        },
        {
            question: 'Where can I watch?',
            answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.',
            answer2: 'You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you\'re on the go and without an internet connection. Take Netflix with you anywhere.'
        },
        {
            question: 'How do I cancel?',
            answer: 'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
            answer2: ''
        },
        {
            question: 'What can I watch on Netflix?',
            answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
            answer2: ''
        },
        {
            question: 'Is Netflix good for kids?',
            answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.',
            answer2: 'Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.'
        }
    ]

    return (
        <section className="sm:px-[45px] py-[70px] bg-black text-white">
            <h1 className="text-center font-bold lg:text-[50px] sm:text-[2.5rem] text-2xl mb-[52px]">Frequently Asked Questions</h1>
            <div className="xl:w-7/12 lg:w-3/4 sm:w-11/12 w-full mx-auto mb-[53px] h-auto overflow-auto">
                {
                    faqs.map((faq, i) => (
                        <div key={i} className='mb-[9px]'>
                            <div className="bg-[#303030] flex justify-between content-center px-[31px] py-[21px] mb-px cursor-pointer"
                                onClick={() => {
                                    if (accordionNo === i) {
                                        setShowAccordion(value => !value);
                                    } else {
                                        setShowAccordion(true)
                                        setAccordionNo(i)
                                    }
                                }}>
                                <p className="sm:text-[26px] text-lg">{faq.question}</p>
                                <BsPlusLg className={`my-auto sm:text-[30px] text-xl ${showAccordion === true && accordionNo === i ? 'hidden' : 'inline'}`} />
                                <RxCross1 className={`my-auto sm:text-[26px] text-lg ${showAccordion === true && accordionNo === i ? 'inline' : 'hidden'}`} />
                            </div>
                            {
                                showAccordion && (
                                    <div className={`bg-[#303030] px-[31px] py-[21px] transition-all duration-500 ease-in-out delay-150 ${accordionNo === i ? 'visible transition-all duration-500 ease-in-out delay-150' : 'invisible hidden transition-all duration-500 ease-in-out delay-150'}`}>
                                        <p className="sm:text-[26px] text-lg mb-[21px]">{faq.answer}</p>
                                        <p className="sm:text-[26px] text-lg">{faq.answer2}</p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
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
