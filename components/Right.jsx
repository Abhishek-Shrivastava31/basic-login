import Link from 'next/link'
import React from 'react'

const Right = () => {
    return (
        <div className=" flex-1 lg:flex-[6] max-md:hidden">
            <div className='showcase'>
                <div className='showcase-content'>
                    <h1 className='showcase-text'>Let's create the future <strong>together</strong></h1>
                    <button className='secondary-btn'><Link href="/trial">Start a FREE 10-day trial</Link></button>

                </div>
            </div>
        </div>
    )
}

export default Right
