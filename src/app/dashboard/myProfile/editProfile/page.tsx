import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function editProfile() {
    return (
        <div className=''>
            <header className="bg-blue-500 p-6 text-2xl font-semibold font-Playfair_Display flex items-center gap-6 ">
                <Link href={'/dashboard/myProfile'}>
                    <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.37927 10.6967L11.7504 0.325489L14.3428 2.91782L5.26777 11.9928L14.3428 21.0678L11.7504 23.6602L1.37927 13.289C1.03558 12.9452 0.842499 12.479 0.842499 11.9928C0.842499 11.5067 1.03558 11.0405 1.37927 10.6967Z" fill="#FDFDFD" />
                    </svg>
                </Link>

                Edit Profile
            </header>
            <div className="bg-white p-5 rounded-lg shadow-md flex gap-6 items-center w-1/2 mx-auto mt-14">

                <div className="mb-4">
                    <Image
                        height={300}
                        width={300}
                        src="/myprofile.png"
                        alt="Profile Image"
                    />
                </div>

                <div className="w-full">

                    <input
                        type="text"
                        placeholder="Anilo Mari"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                    />

                    <input
                        type="text"
                        placeholder="abc@gmail.com"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                    />

                    <input
                        type="number"
                        placeholder="213 48992201298"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 mb-4"
                    />
                </div>

            </div>
            <div className="mt-6 flex justify-center w-full">
                <div className="w-1/4">
                    <Link href="">
                        <button className="hover:bg-[#f1f3f7] text-white hover:text-black py-2 px-4 border-2 font-bold rounded-md bg-[#1F4B99] transition duration-300 w-full">
                            Save Changes
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
