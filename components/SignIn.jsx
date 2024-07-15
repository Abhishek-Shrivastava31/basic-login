'use client';
import Image from 'next/image';
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email is ", { email }, " and password is ", { password });
    }
    return (
        <div className='flex-align-center flex-col w-11/12 p-4 '>
            <div className='flex-align-center mb-6'>
                <Image src='/assets/images/logo.png' alt='Logo' width={40} height={40} className='pr-2' />
                <h1 className='text-3xl'>Sign In</h1>
            </div>
            <form onSubmit={handleSubmit} className='w-4/5'>
                <div className='w-auto'>
                    <label className='label' htmlFor="email">Email :</label>
                    <input
                        className='input-box'
                        type="email"
                        name='email'
                        id="email"
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                </div>
                <div>
                    <label className='label' htmlFor='passowrd'>Password :</label>
                    <input
                        className='input-box'
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div ><button className='primary-btn w-full my-3' type='submit'>Submit</button></div>
            </form>
        </div >
    )
}

export default SignIn
