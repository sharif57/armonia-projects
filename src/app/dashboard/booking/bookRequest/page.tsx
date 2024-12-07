
'use client'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Link from 'next/link';

export default function bookRequest() {

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
        Send Request
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
                      {/* <span className="px-3 py-1 font-semibold rounded-md bg-green-500 text-white">
                        payment
                      </span> */}
                      <Button type="primary" onClick={showModal}>
                        payment
                      </Button>
                      <Modal
                        open={open}
                   
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                          <Button className='hover:bg-[#f1f3f7] text-white text-xs hover:text-black py-4 px-4 border-2 font-medium rounded-md bg-[#142f62] transition duration-300 w-full' key="back" onClick={handleCancel}>

                            Save Changes

                          </Button>,


                        ]}
                      >
                        <div className=" bg-white flex items-center justify-center">
                          <div className=" mx-auto  rounded-lg ">
                            {/* Header */}
                            <div className="text-center mb-6 space-y-3">
                              <div className='flex items-center lg:gap-40 gap-6'>
                                <Link href={'/dashboard/bookRequest'}>
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6489 20.0485C11.1803 20.5171 10.4205 20.5171 9.95186 20.0485L2.75186 12.8485C2.28323 12.3799 2.28323 11.6201 2.75186 11.1514L9.95186 3.95145C10.4205 3.48282 11.1803 3.48282 11.6489 3.95145C12.1175 4.42008 12.1175 5.17988 11.6489 5.6485L6.49745 10.8H20.4004C21.0631 10.8 21.6004 11.3372 21.6004 12C21.6004 12.6627 21.0631 13.2 20.4004 13.2L6.49745 13.2L11.6489 18.3514C12.1175 18.8201 12.1175 19.5799 11.6489 20.0485Z" fill="#262626" />
                                  </svg>
                                </Link>

                                <h1 className="text-2xl font-bold text-black font-Playfair_Display">Pay Now</h1>
                              </div>
                              <p className="text-gray-400">For Confirm your booking pay now</p>
                            </div>



                            <form action="" className='px-12'>
                              {/* Input Fields */}
                              <div className="mb-4 space-y-4">

                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="email"
                                  type="email"
                                  placeholder="Card number"
                                  required
                                />
                                <input
                                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                  id="email"
                                  type="email"
                                  placeholder="card name"
                                  required
                                />
                                <div className='flex gap-6'>
                                  <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="expiration date (MM/YY)"
                                    required
                                  />
                                  <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Security code"
                                    required
                                  />
                                </div>
                              </div>





                              {/* Button */}


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
