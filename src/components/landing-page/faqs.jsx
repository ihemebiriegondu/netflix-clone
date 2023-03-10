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

    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            document.getElementById('emailInput2').focus();
        }
        setEmail('')
    }


    return (
        <section className="sm:px-[45px] py-[70px] bg-black text-white">
            <h1 className="text-center font-black lg:text-[50px] sm:text-[2.5rem] text-2xl mb-[52px]">Frequently Asked Questions</h1>
            <div className="xl:w-10/12 w-full sm:px-0 px-6 mx-auto sm:mb-[53px] mb-[22.5px]">
                {
                    faqs.map((faq, i) => (
                        <div key={i} className='mb-[9px]'>
                            <div className="bg-[#303030] hover:bg-[#4e4e4e] flex justify-between content-center transition-all duration-200 ease-in-out sm:px-[31px] px-[21.6px] sm:py-[21px] py-[14.4px] mb-px cursor-pointer"
                                onClick={() => {
                                    if (accordionNo === i) {
                                        setShowAccordion(value => !value);
                                    } else {
                                        setShowAccordion(true)
                                        setAccordionNo(i)
                                    }
                                }}>
                                <p className="sm:text-[26px] text-lg mr-1">{faq.question}</p>
                                <BsPlusLg className={`my-auto sm:text-[30px] text-xl ${showAccordion === true && accordionNo === i ? 'hidden' : 'inline'}`} />
                                <RxCross1 className={`my-auto sm:text-[26px] text-lg ${showAccordion === true && accordionNo === i ? 'inline' : 'hidden'}`} />
                            </div>
                            {
                                showAccordion && (
                                    <div className={`bg-[#303030] px-[31px] transition-all duration-500 ease-in-out ${accordionNo === i ? 'h-auto py-[21px] transition-all duration-500 ease-in-out delay-150' : 'h-0 overflow-hidden transition-all duration-100 ease-in-out'}`}>
                                        <p className="sm:text-[26px] text-lg mb-[21px]">{faq.answer}</p>
                                        <p className="sm:text-[26px] text-lg">{faq.answer2}</p>
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <form onSubmit={(e) => {handleSubmit(e)}} className="mb-[70px] lg:w-9/12 md:w-10/12 sm:w-8/12 w-full sm:px-[0px] px-8 mx-auto flex flex-col justify-center content-center">
                <p className="lg:text-[1.25rem] text-lg text-center mb-[19px]">Ready to watch? Enter your email to create or restart your membership.</p>
                <div className="2xl:w-2/3 xl:w-3/4 lg:w-10/12 w-11/12 flex md:flex-row flex-col justify-center mx-auto">
                    <input type="email" id="emailInput2" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email address" className="md:w-3/5 md:mb-0 mb-[10px] w-full px-[8px] md:py-2 py-4 rounded-md bg-black/40 mr-2 border border-[#8C8C8C] outline-none hover:outline-none text-white focus:border-white focus:border-2 transition-all duration-100 ease-in-out" />
                    <button className="flex content-center w-auto md:mx-0 mx-auto bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] text-white md:py-3 md:px-6 px-4 py-2 rounded-md shadow-[0px_1px_0px_rgba(0,0,0,0.45)]">
                        <span className="mr-3 md:text-2xl text-lg md:font-black font-bold">Get Started</span>
                        <span className="relative md:w-[9.22px] w-[8px] md:h-[20.36px] h-[15px] flex justify-center mt-2 font-black">
                            <Image className="object-scale-down absolute top-0 bottom-0 w-full h-full"
                                src='/assets/Vector (1).png'
                                alt="netflix logo"
                                fill
                            />
                        </span>
                    </button>
                </div>
            </form>
        </section>
    )
}
