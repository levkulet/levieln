'use client'

import React from "react";
import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Header() {

    const [nav, setNav] = useState(false);

    //toggle nav
    const handleNav = () => {
        setNav(!nav);
    };

    //nav menu items
    const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Web & App' },
        { id: 3, text: 'Graphic' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
    ];

    return (
        <header>
            <div className='bg-white flex justify-between items-center h-224 mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Leviel Nicolas</h1>

                {/* Desktop */}
                <ul className='hidden md:flex'>
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation Icon */}
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>

                {/* Mobile Navigation Menu */}
                <ul
                    className={
                        nav
                            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                    }
                >
                    {/* Mobile Logo */}
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Leviel</h1>

                    {/* Mobile Navigation Items */}
                    {navItems.map(item => (
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}