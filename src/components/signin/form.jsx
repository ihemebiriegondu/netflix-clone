import { useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link"
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi'


export default function Form() {

    const [checked, setChecked] = useState(true);
    const [showError, setShowError] = useState(false);
    const [errorType, setErrorType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordType, setPasswordType] = useState('password')
    const router = useRouter();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let noSpacePassword = password.split(' ').join('')
        //console.log(noSpacePassword)

        if (email === '' || password === '') {
            if (password === '' || noSpacePassword.length < 4 || noSpacePassword.length > 60) {
                setShowError(true);
                setErrorType('password');
            }
            if (email === '') {
                setShowError(true);
                setErrorType('email');
            }
        } else {
            router.push('/home')
        }
    }

    return (
        <div className="sm:bg-black/75 bg-black sm:w-[450px] w-full mx-auto sm:pt-[60px] pt-[20px] pb-[143px] md:px-[68px] sm:px-[34.75px] px-[16px]">
            <form className="sm:mb-[46px] mb-[16px]" onSubmit={(e) => { handleSubmit(e) }}>
                <h3 className="mb-[26px] text-white text-[2rem] font-bold">Sign In</h3>
                <div className="mb-[15px]">
                    <input type="text" placeholder="Email or phone number"
                        className={`bg-[#333333] w-full rounded-[4px] py-[15px] px-[20px] placeholder:text-[#8C8C8C] text-white outline-none ${showError === true && errorType === 'email' ? 'border-b-2 border-orange-500' : 'border-none'}`}
                        onChange={(e) => { setEmail(e.target.value) }}
                        onClick={() => { setShowError(false); setErrorType('') }}
                    />
                    {
                        showError && (
                            <p className={`text-orange-400 text-[13px] font-thin mt-2 ${errorType === 'email' ? 'block' : 'hidden'}`}>Please enter a valid email or phone number.</p>
                        )
                    }
                </div>
                <div className="mb-[42px]">
                    <div className={`flex justify-between content-between bg-[#333333] py-[15px] px-[20px] rounded-[4px] ${showError === true && errorType === 'password' ? 'border-b-2 border-orange-500' : 'border-none'}`}>
                        <input type={passwordType} placeholder="Password" id="passwordInput"
                            className={`bg-[#333333] w-full placeholder:text-[#8C8C8C] text-white outline-none`}
                            onChange={(e) => { setPassword(e.target.value) }}
                            onClick={() => { setShowError(false) }}
                        />

                        <HiOutlineEye
                            className={`text-white my-auto text-2xl cursor-pointer ${showPassword === true ? 'hidden' : 'block'}`}
                            onClick={() => { setShowPassword(true); setPasswordType('text') }}
                        />
                        <HiOutlineEyeOff
                            className={`text-white my-auto text-2xl cursor-pointer ${showPassword === true ? 'block' : 'hidden'}`}
                            onClick={() => { setShowPassword(false); setPasswordType('password') }}
                        />
                    </div>
                    {
                        showError && (
                            <p className={`text-orange-400 text-[13px] font-thin mt-2 ${errorType === 'password' ? 'block' : 'hidden'}`}>Your password must contain between 4 and 60 characters.</p>
                        )
                    }
                </div>
                <button className="text-white bg-primaryRed hover:bg-[#F40612] active:bg-[#E50914] mb-[15px] shadow-[0px_1px_0px_rgba(0,0,0,0.55)] font-bold py-[1rem] px-4 w-full rounded-[4px]">Sign In</button>
                <div className="flex justify-between">
                    <div className="flex">
                        <input type="checkbox" name="" checked={checked} onChange={() => { setChecked(value => !value) }} id="" className="accent-[#B3B3B3] w-[18px] h-[21.6px] mr-2" />
                        <p className="text-[#B3B3B3] text-[13px]">Remember me</p>
                    </div>
                    <p className="text-[#B3B3B3] text-[13px]">Need help?</p>
                </div>
            </form>
            <div className="pt-4">
                <p className="text-[#B3B3B3] mb-[14px]">New to Netflix? <Link href='/' className="text-white">Sign up now</Link>.</p>
                <p className="text-[#B3B3B3] text-[13px]">This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot. <Link href='' className="text-[#0071EB]">Learn more.</Link></p>
            </div>
        </div>
    )
}
