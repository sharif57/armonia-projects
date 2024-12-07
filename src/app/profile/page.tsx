import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Profile() {
  return (
    <div className='bg-white h-screen text-black flex gap-8 px-28 mx-auto'>
      <div className='w-1/4 border-2 flex flex-col mx-auto px-16 space-y-6 pt-6'>
    
        <div className="w-64 h-screen bg-gray-50 shadow-md flex flex-col items-center px-8">

          <div className="mt-6 flex flex-col items-center">
            <Image src="/logo-footer.png" alt="Logo" height={200} width={100} className="" />
            
          </div>


          <nav className="mt-10 w-full">

            <div className="mt-6">
              <Link  href={'/myPr'} >
                <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300">
                My Profile
                </button>
              </Link>
            </div>
            <div className="mt-6">
              <Link  href={'OTP/reset'} >
                <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300">
                Booking Details
                </button>
              </Link>
            </div>
            <div className="mt-6">
              <Link  href={'OTP/reset'} >
                <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300">
                Messages
                </button>
              </Link>
            </div>
            

          </nav>

          <div className="mt-auto w-full px-6">
            <button className="flex items-center gap-4 w-full px-4 py-3 text-red-600 border-t border-gray-200">
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>
        </div>

      </div>
      <div className='w-3/4 border-2'>

      </div>
    </div>
  )
}
