
'use client'
import { Button, Flex, Input, Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import { Rate } from 'antd';

export default function bookService() {
    const booked = [
        {
            name: "Lona Mari",
            postCode: "EC3P",
            price: "65",
            date: "03-16-25 | 01:30 AM"
        },
        {
            name: "Emma Stone",
            postCode: "AB45",
            price: "70",
            date: "03-17-25 | 02:00 PM"
        },
        {
            name: "Sophia Turner",
            postCode: "DF56",
            price: "75",
            date: "03-18-25 | 11:00 AM"
        },
        {
            name: "Michael Brown",
            postCode: "GH78",
            price: "80",
            date: "03-19-25 | 04:15 PM"
        },
        {
            name: "Olivia Davis",
            postCode: "KL90",
            price: "50",
            date: "03-20-25 | 09:00 AM"
        },
        {
            name: "James Wilson",
            postCode: "MN12",
            price: "85",
            date: "03-21-25 | 05:00 PM"
        }
    ];

    const { TextArea } = Input;

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };



    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };


    return (
        <div>
            <header className="bg-blue-500 p-6 text-2xl font-semibold font-Playfair_Display">
                Booked Service
            </header>
            <div className=" mx-auto sm:p-4 dark:text-gray-800">

                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className=" border-b-2 border-black">
                            <tr className=" text-left">
                                <th className="p-3 border-r-4">SI NO.</th>
                                <th className="p-3 border-r-4">Beautician Name</th>
                                <th className="p-3 border-r-4">Post Code</th>
                                <th className="p-3 border-r-4">Price</th>
                                <th className="p-3 border-r-4 text-right">Appointment Date & Time</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                booked.map((book, index) => (
                                    <tr key={index} className="border-b border-opacity-20">
                                        <td className="p-3">
                                            <p>#{index + 1}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{book.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Post Code: {book.postCode}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>Price: ${book.price}</p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <p>{book.date}</p>
                                        </td>
                                        <td className="p-3 text-right">

                                            <Button type="ds" onClick={showModal}>
                                                <span className="px-3 py-1 font-semibold rounded-md bg-blue-500 text-white">
                                                    Review
                                                </span>
                                            </Button>
                                            <Modal
                                                open={open}

                                                onOk={handleOk}
                                                onCancel={handleCancel}
                                                footer={[
                                                    <Button className='hover:bg-[#f1f3f7] font-Playfair_Display text-white text-xs hover:text-black py-4 px-4 border-2 font-medium rounded-md bg-[#142f62] transition duration-300 w-full' key="back" onClick={handleCancel}>

                                                        Submit Now

                                                    </Button>,


                                                ]}
                                            >
                                                <div className=" bg-white flex items-center justify-center">
                                                    <div className=" mx-auto  rounded-lg ">
                                                        {/* Header */}
                                                        <div className="text-center mb-6 space-y-3">



                                                            <h1 className="text-2xl font-bold text-black font-Playfair_Display">Review</h1>

                                                            <p className="text-gray-400">Dear Client Please give a feedback for Us, How was feel you in our Salon service</p>
                                                        </div>



                                                        <form action="" className='px-12'>
                                                            {/* Input Fields */}
                                                            <div className="mb-4 space-y-4 text-center">

                                                                {/* <input
                                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                                    id="email"
                                                                    type="email"
                                                                    placeholder="Card number"
                                                                    required
                                                                /> */}
                                                                <Rate
                                                                    allowHalf
                                                                    defaultValue={2.5}
                                                                    className="!text-[#ffc500]"
                                                                    style={{ fontSize: '40px' }}
                                                                />

                                                                <Flex vertical gap={32}>
                                                                    <label htmlFor="">Comment (Optional)</label>

                                                                    <TextArea
                                                                        showCount
                                                                        maxLength={100}
                                                                        onChange={onChange}
                                                                        placeholder="Add a comment......"
                                                                        style={{ height: 120, resize: 'none' }}
                                                                    />
                                                                </Flex>
                                                            </div>

                                                        </form>

                                                    </div>
                                                </div>
                                            </Modal>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
