"use client"
import React from 'react'

const contact = () => {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className='bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 max-w-lg w-full flex flex-col gap-6 border border-violet-700 text-white'>
                <h1 className='text-3xl md:text-4xl font-extrabold text-center tracking-wide'>
                    Contact Us
                </h1>
                <p className='text-lg leading-relaxed text-center'>
                    Have questions, feedback, or suggestions? We'd love to hear from you!
                    Please fill out the form below, and we'll get back to you as soon as possible.
                </p>
                <div className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Your Name'
                        className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out'
                    />
                    <input
                        type="email"
                        placeholder='Your Email'
                        className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out'
                    />
                    <textarea
                        placeholder='Your Message'
                        rows="5"
                        className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out resize-y' // `resize-y` allows vertical resizing
                    ></textarea>
                    <button className='bg-violet-700 hover:bg-violet-600 text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900'>
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}

export default contact