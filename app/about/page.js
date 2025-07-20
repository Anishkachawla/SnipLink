"use client"
import React from 'react'
import Link from 'next/link';

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center p-4'>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className='bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-6 max-w-lg w-full flex flex-col gap-6 border border-violet-700 text-white'>
                <h1 className='text-3xl md:text-4xl font-extrabold text-center tracking-wide'>
                    About SnipLink
                </h1>
                <p className='text-lg leading-relaxed text-center'>
                    Welcome to SnipLink, your ultimate solution for simplifying long and cumbersome URLs.
                    We believe that sharing links should be effortless and elegant.
                </p>
                <p className='text-lg leading-relaxed text-center'>
                    Our mission is to provide a fast, reliable, and user-friendly service that transforms
                    your lengthy web addresses into short, memorable, and shareable links. Whether it&apos;s
                    for social media, email, or simply for better readability, SnipLink makes your links
                    cleaner and more professional.
                </p>
                <p className='text-lg leading-relaxed text-center'>
                    With SnipLink, you get more than just a short URL; you get a tool designed to make
                    your online presence smoother and more efficient. Try it out and experience the
                    power of brevity!
                </p>
                <Link href="/shorten" passHref>
                    <button className='bg-violet-700 hover:bg-violet-600 text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900 w-full'>
                        Try SnipLink Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default About