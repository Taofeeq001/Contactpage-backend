'use client'
import React, { useState } from 'react'

const Contact = () => {
    //States for the inputs declared here
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return (
        <div className='flex flex-col w-full h-[100vh] items-center justify-center'>
            <form className='lg:w-[70%] w-[95%] flex flex-col gap-4' action="">
                <div className='flex flex-col gap-1 border-b-2 border-grey'>
                    <h1 className='text-3xl font-extrabold '>CONTACT US</h1>
                    <b className='mb-3'>Please fill the form below</b>
                </div>
                <span className='flex flex-col gap-1 lg:mt-3 mt-2'>
                    <label className='font-bold text-md' htmlFor="Full name">Full Name</label>
                    <input
                        className='py-2 pl-4 shadow-lg border-2 outline-none border-gray-200 shadow-gray-300 ' type="text"
                        placeholder='Simsuraj Ola'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </span>
                <span className='flex flex-col gap-1'>
                    <label className='font-bold text-md' htmlFor="Full name">Email Address</label>
                    <input
                        className='py-2 pl-4 shadow-lg border-2 outline-none border-gray-200 shadow-gray-300 '
                        type="text"
                        placeholder='e.g example@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </span>
                <span className='flex flex-col gap-1'>
                    <label className='font-bold text-md' htmlFor="Full name">Your Message</label>
                    <textarea
                        className='py-2 pl-4 shadow-lg border-2 outline-none border-gray-200 shadow-gray-300 '
                        name="" id="" cols="30" rows="10"
                        value={message}
                        onChange={(e)=> setMessage(e.target.value)}
                    ></textarea>
                </span>
                <button className='bg-[green] py-3 text-2xl text-white'>Send</button>
            </form>
        </div>
    )
}

export default Contact