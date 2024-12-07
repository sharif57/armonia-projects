'use client';

import Link from "next/link";
import React from "react";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="flex bg-yellow-50 text-black min-h-screen">
            
            {/* Sidebar */}
            <div className="fixed top-0 left-0 w-[326px] min-h-screen flex flex-col justify-between bg-white shadow-2xl py-8 px-6">
                <div className="space-y-6">
                    {/* Logo */}
                    <div className="text-center mb-6">
                        <img className=" mx-auto" src="/logo-footer.png" alt="Logo" />
                    </div>

                    {/* Navigation Links */}
                    <ul className="mt-4 text-black max-h-[650px] overflow-y-auto space-y-3">
                        <li>
                            <Link
                                href="/dashboard"
                                className="hover:text-primary text-lg hover:bg-gray-200 w-full px-6 py-3 flex items-center justify-start gap-4 rounded-full transition-all"
                            >
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/settings"
                                className="hover:text-primary text-lg hover:bg-gray-200 w-full px-6 py-3 flex items-center justify-start gap-4 rounded-full transition-all"
                            >
                                <span>Settings</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/profile"
                                className="hover:text-primary text-lg hover:bg-gray-200 w-full px-6 py-3 flex items-center justify-start gap-4 rounded-full transition-all"
                            >
                                <span>Profile</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Log Out Button */}
                <div className="mt-6 px-4">
                    <button
                        onClick={() => console.log("Logging out...")}
                        className="bg-red-500 text-white w-full px-6 py-3 rounded-full text-lg shadow-md border border-red-600"
                    >
                        Log Out
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 ml-[326px]">
                
                {/* Fixed Header */}
                <div className="fixed top-0 left-[326px] w-[calc(100%-326px)] p-6 bg-blue-300 rounded-b-xl shadow-md z-10">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-white">My Dashboard</h1>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded shadow-md">
                            Logout
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="pt-[96px] p-6 space-y-6 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
