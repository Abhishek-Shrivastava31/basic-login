import Link from 'next/link'
import React from 'react'

const SignInLinks = () => {
    return (
        <div className='signIn-links'>
            <Link href='/forgot-password'>Forgot Password</Link>
            <Link href='/signup'>Don't have an account</Link>
        </div>
    )
}

export default SignInLinks
