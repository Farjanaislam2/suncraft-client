import React from 'react'
import solar1 from './coverimage/cover1.jpg'


export default function DoProject() {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.name.value)

    }

  return (
    <div className="relative">
    <img
        src={solar1}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
    />
    <div className="relative bg-opacity-75 bg-deep-purple-accent-700">
        <svg
            className="absolute inset-x-0 bottom-0 text-white"
            viewBox="0 0 1160 163"
        >
            <path
                fill="currentColor"
                d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
            />
        </svg>
        <div className="relative px-4 py-8  overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-[300px] xl:pr-16 xl:w-7/12 ">
                    <p className="text-center  font-semibold text-4xl ">Submit a Solar Project Enquiry </p>
                    <p className="text-center  font-semibold text-2xl  ">We will contact you for further discussion </p>

                </div>
                <div className="w-full max-w-xl  xl:w-8/14 ">
                    <div className="bg-blue-900 rounded-lg shadow-2xl p-7 sm:p-10">
                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-sky-100">
                            Welcome to Suncraft Energy
                        </h3>
                        <form onSubmit={submitHandler}>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="Name"
                                    className="inline-block mb-1 font-medium text-white"
                                >
                                    Your Name
                                </label>
                                <input
                                    placeholder="John"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="name"
                                    name="name"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label className="inline-block mb-1 font-medium text-white">
                                    Your Number
                                </label>
                                <input
                                    name="number"
                                    type="number"
                                    placeholder="Number"
                                    required
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="email"
                                    className="inline-block mb-1 font-medium text-white"
                                 >
                                    E-mail
                                </label>
                                <input
                                    placeholder="john.doe@example.org"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="Name"
                                    className="inline-block mb-1 font-medium text-white"
                                >
                                    Company Name
                                </label>
                                <input
                                    placeholder="Company Name"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="CompanyName"
                                    name="CompanyName"
                                />
                            </div>
                            <div className="mb-1 sm:mb-2">
                                <label
                                    htmlFor="Name"
                                    className="inline-block mb-1 font-medium text-white"
                                >
                                    Enter Average Monthly Electricity Bill
                                </label>
                                <input
                                    placeholder="Enter Average Monthly Electricity Bill"
                                    required
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                    id="ElectricityBill"
                                    name="ElectricityBill"
                                />
                            </div>

                            <div className="mt-4 mb-2 sm:mb-4">
                                <button type="submit" className="btn w-full btn-outline btn-success ring-offset-2 ring-4">
                                    Submit
                                </button>
                            </div>

                            <p className="text-xs text-green-300 sm:text-sm font-semibold ">
                                We respect your privacy. Unsubscribe at any time.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}



