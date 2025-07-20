"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Shorten = () => {
    const [url, seturl] = useState("");
    const [shorturl, setshorturl] = useState("");
    const [generated, setgenerated] = useState("");

    const generate = () =>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
        "url": url,
        "shorturl": shorturl
        });

        const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
            seturl("");
            setshorturl("");
            if(result.success==true){
                toast.success(result.message);
            }
            else if(result.success==false){
                toast.error(result.message);
            }
            console.log(result)})
        .catch((error) => console.error(error));
    }

    // Function to handle copying the URL to clipboard
    const copyToClipboard = () => {
        if (generated) {
            navigator.clipboard.writeText(generated)
                .then(() => toast.success("URL copied to clipboard!"))
                .catch(err => {
                    console.error("Failed to copy:", err);
                    toast.error("Failed to copy URL to clipboard.");
                });
        }
    }

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
                    <button onClick={generate} className='bg-violet-700 hover:bg-violet-600 text-white font-bold py-4 rounded-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900'>Generate</button>
                </div>
            </div>
            {generated && (
                    <div className='mt-4 p-4 bg-gray-800 rounded-lg text-center text-white flex flex-col items-center gap-2 border border-gray-700'>
                        <p className='text-gray-400 text-sm'>Your new short URL:</p>
                        <Link
                            href={generated}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-violet-400 hover:text-violet-300 underline text-lg font-medium break-all'
                        >
                            {generated}
                        </Link>
                        <button
                            onClick={copyToClipboard}
                            className='mt-2 bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-md transition duration-200 ease-in-out text-sm'
                        >
                            Copy URL
                        </button>
                    </div>
                )}

        </div>
  )
}

export default Shorten
