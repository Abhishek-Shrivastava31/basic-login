import React from 'react'
import SignIn from './SignIn'
import LeftFooter from './LeftFooter'
import SignInLinks from './SignInLinks'
import Link from 'next/link'

const Left = () => {
    return (
        <div className="flex-1 lg:flex-[4] w-full flex flex-col items-center h-screen justify-center max-md:justify-start max-md:mt-[4vh] ">
            <SignIn />
            <SignInLinks />
            <div className='or'>
                <hr className='bar ' />
                <span className='px-2 text-sm'>OR</span>
                <hr className='bar' />
            </div>

            <Link className='secondary-btn p-8 m-2' href="/sign-up">
                <button>
                    Create an account ?
                </button>
            </Link>

            <LeftFooter />
        </div>
    )
}

export default Left
