"use client"
import React, { useState } from 'react'

const shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState(false);

    return (
        <div className='flex flex-col justify-center items-center mx-auto p-8 gap-4'>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className='bg-gray-900/50 backdrop-blur-md rounded-xl shadow-2xl p-8 max-w-lg w-full flex flex-col gap-6 border border-violet-700'>
                <h1 className='text-white text-3xl md:text-4xl font-extrabold text-center tracking-wide'>Generate your shortened URL</h1>
                <div className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Enter your URL'
                        value={url}
                        onChange={(e)=>{seturl(e.target.value)}}
                        className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out'/>
                    <input
                        type="text"
                        placeholder='Enter your preferred short URL'
                        value={shorturl}
                        onChange={(e)=>{setshorturl(e.target.value)}}
                        className='bg-gray-800 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 placeholder-gray-400 transition duration-300 ease-in-out'/>
                    <button className='bg-violet-700 hover:bg-violet-600 text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900'>Generate</button>
                </div>
            </div>
        </div>
  )
}

export default shorten
