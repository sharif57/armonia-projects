"use client";

import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }) {
    const isAdmin = true;

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-64 min-h-screen     bg-white pt-6">

                <div className="mt-6 flex flex-col items-center">
                    <Image src="/logo-footer.png" alt="Logo" height={200} width={100} className="" />

                </div>
                <ul className="menu p-4 space-y-4">
                    {/* Conditional Links */}
                    {isAdmin ? (
                        <>


                            <nav className="mt-10 w-full">

                                <div className="mt-6">
                                    <Link href={'/dashboard/myProfile'} >
                                        <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300">
                                            My Profile
                                        </button>
                                    </Link>
                                </div>

                                <div className="mt-6">
                                    <Link href={'/dashboard/message'} >
                                        <button className="bg-[#142F62] w-full py-2 text-white font-bold rounded-md hover:bg-[#1F4B99] transition duration-300">
                                            Messages
                                        </button>
                                    </Link>
                                </div>

                                <div className="mt-6 group relative">
                                    {/* Main Button */}
                                    <button className="bg-[#142F62] w-full py-2 text-white flex items-center justify-around font-bold rounded-md hover:bg-[#1F4B99]  duration-300">
                                        Booking Details
                                        <svg width="24" height="24" className="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_2416_2468)">
                                                <path d="M11.9998 16.0013C11.7661 16.0017 11.5397 15.9203 11.3598 15.7713L5.35979 10.7713C5.15557 10.6015 5.02715 10.3576 5.00277 10.0932C4.97839 9.82875 5.06005 9.56547 5.22979 9.36125C5.39953 9.15704 5.64344 9.02861 5.90786 9.00423C6.17229 8.97985 6.43557 9.06151 6.63979 9.23125L11.9998 13.7113L17.3598 9.39125C17.4621 9.30819 17.5798 9.24615 17.7061 9.20872C17.8324 9.17129 17.9649 9.1592 18.096 9.17314C18.227 9.18708 18.354 9.22677 18.4696 9.28995C18.5853 9.35312 18.6873 9.43853 18.7698 9.54125C18.8614 9.64407 18.9307 9.7647 18.9735 9.89557C19.0163 10.0264 19.0316 10.1647 19.0185 10.3018C19.0053 10.4389 18.964 10.5717 18.8971 10.6921C18.8303 10.8125 18.7392 10.9177 18.6298 11.0013L12.6298 15.8313C12.4447 15.9568 12.2229 16.0166 11.9998 16.0013Z" fill="black" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2416_2468">
                                                    <rect width="24" height="24" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>

                                    </button>

                                    {/* Dropdown Menu (Appears on hover) */}
                                    <div className="absolute top-full left-0 w-full bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
                                        <Link href="/dashboard/booking/bookService">
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-400">
                                                Booked Service
                                            </button>
                                        </Link>
                                        <Link href="/dashboard/booking/bookRequest">
                                            <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-400">
                                                Send Request
                                            </button>
                                        </Link>

                                    </div>
                                </div>



                            </nav>

                            <div className="mt-auto w-full px-6">
                                <button className="flex items-center gap-4 w-full px-4 py-3 text-red-600 border-t border-gray-200">
                                    <i className="fas fa-sign-out-alt"></i> Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link href="/dashboard/profile" className="text-white hover:underline">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/myPost" className="text-white hover:underline">
                                    My Posts
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/blogPostForm" className="text-white hover:underline">
                                    Share Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/dashboard/bookMark" className="text-white hover:underline">
                                    Book Marks
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>

            {/* Dynamic Content */}
            <div className="flex-1  bg-[#fffbef]">{children}</div>
        </div>
    );
}
