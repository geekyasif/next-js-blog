import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='contianer flex justify-between py-6 text-center'>
            <Link href='/'>
                <h5 className='text-primary font-bold text-xl'>Geeky Blog</h5>
            </Link>
            <ul className='flex item-center space-x-4 '>
                <li>
                    <a href="#">Products</a>
                </li>

                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Docs</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li>
            </ul>
            <ul className='flex item-center  space-x-4'>
                <li>
                    <a href="#">
                        Log in
                    </a>
                </li>

                <li className='bg-primary px-2'>
                    <a href="#">
                        Sing up
                    </a>
                </li>

            </ul>
        </nav>
    )
}
