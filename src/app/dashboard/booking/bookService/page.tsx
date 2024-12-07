
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
                                            <span className="px-3 py-1 font-semibold rounded-md bg-blue-500 text-white">
                                                Review
                                            </span>
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
