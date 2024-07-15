import Link from 'next/link'
import React from 'react'

const LeftFooter = () => {
    return (
        <footer className='main-footer'>
            <p>Copyright &copy;2024@Sluralpright All Rights Reserved</p>
            <div className='footer-links'>
                <Link href="/terms">Terms of use</Link>
                <p className='px-2 text-white'> | </p>
                <Link href="/policy">Privacy policy</Link>
            </div>
        </footer>
    )
}

export default LeftFooter
