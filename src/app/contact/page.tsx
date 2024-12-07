'use client'
import { DatePicker, DatePickerProps, TimePicker } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Contact() {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const [time, setTime] = useState(null);

    const onChanges = (time, timeString) => {
        setTime(timeString);
        console.log('Selected time:', timeString);
    };

    const services = [
        { name: "Nail care", price: "€25" },
        { name: "Hair Styling", price: "€30" },
        { name: "Make up", price: "€50" },
        { name: "Cosmetology", price: "€30" },
        { name: "SPA procedures", price: "€40" },
    ];

    const total = services.reduce((sum, service) => sum + parseFloat(service.price.slice(1)), 0);
    return (
        <div className='lg:h-screen bg-white '>
            <div className=" bg-[#E7D9BE] lg:h-[480px] pt-8">
                <div className="text-black p-6  lg:flex justify-center items-start gap-8">
                    <Image
                        src={'/Img.png'}
                        height={702}
                        width={334}
                        className="hidden sm:block" alt='img'
                    />
                    <div className='space-y-4'>
                        <p className='text-xl font-semibold font-Playfair_Display'>Beautician</p>
                        <h1 className="lg:text-5xl text-4xl font-bold text-[#142F62] font-Playfair_Display">
                            Book Appointment
                        </h1>
                        <p>Please fill this form to book an appointment</p>
                        <div className=" space-y-4">
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="username"
                                >
                                    User Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="username"
                                >
                                    Email (Not Editable)
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="text"
                                    placeholder="Email"
                                />
                            </div>
                            <div className='w-full lg:flex justify-between items-center gap-5'>
                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="username"
                                    >
                                        Date
                                    </label>
                                    <DatePicker onChange={onChange} className='lg:w-[300px] w-full py-2 px-3' />
                                </div>

                                <div>
                                    <label
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                        htmlFor="username"
                                    >
                                        Time
                                    </label>
                                    <TimePicker className='lg:w-[300px] w-full py-2 px-3' onChanges={onChanges} value={time} defaultValue={time} />
                                    {time && <p>Selected Time: {time}</p>}
                                </div>
                            </div>
                            <div className="lg:p-8 mt-20  mx-auto">
                                <h1 className="lg:text-5xl text-3xl font-bold font-Playfair_Display text-[#142F62] mb-8">
                                    Selected Service Prices
                                </h1>
                                <ul className="space-y-4">
                                    {services.map((service, index) => (
                                        <li
                                            key={index}
                                            className="flex justify-between items-center border-b border-dotted pb-2 text-gray-700"
                                        >
                                            <span>{service.name}</span>
                                            <span className="text-[#142F62]">from {service.price}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between items-center mt-8 font-bold text-lg">
                                    <span>Total</span>
                                    <span className="text-green-600">€{total}</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center '>
                            <button className='bg-[#142F62] w-[600px] py-4 mb-28 text-xl font-bold font-Playfair_Display text-white rounded-3xl transition duration-300 ease-in-out transform hover:bg-[#1F4B99] hover:scale-105'>
                                Send Request
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

