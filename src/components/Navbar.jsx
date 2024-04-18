import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import RxHamburgerMenu from 'react-hamburger-menu';

const Menu = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'New',
        link: '/#Services',
    },
    {
        id: 3,
        name: 'Top-discounts',
        link: '/',
    },
    {
        id: 4,
        name: 'Services',
        link: '/',
    },
    {
        id: 5,
        name: 'Contact us',
        link: '/',
    },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* upper nav */}
            <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40 top-0 w-full'>
                <div className="bg-primary/90 py-2">
                    <div>
                        <nav className='flex justify-between items-center container md:py-1 pt-6 pb-3'>
                            <a href="/" className='flex items-center'><img src={Logo} alt="Company Logo" className='w-auto h-10' /></a>

                            <div className="relative flex w-full sm:w-[300px] group-hover:w-[400px]">
                                <input 
                                    type="text" 
                                    placeholder='search' 
                                    className='items-center justify-center flex-1 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-black mx-auto transition-width' 
                                />
                                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <IoMdSearch className="text-gray-500" />
                                </span>
                            </div>

                            {/* Account and Cart options in upper nav */}
                            <div className='text-lg text-black sm:flex items-center gap-4 hidden'>
                                <a href="/" className='flex items-center gap-2'><CiUser />Account</a>
                                <a href="/" className='flex items-center gap-2'><IoCartOutline />Cart</a>
                            </div>

                            {/* Hamburger menu */}
                            <div className="sm:hidden">
                                <RxHamburgerMenu isOpen={isOpen} menuClicked={toggleMenu} width={32} height={24} strokeWidth={3} color='black' borderRadius={2} animationDuration={0.5} />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* lower nav */}
            <div className='flex justify-center shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
                <ul className={`sm:flex items-center gap-4 ${isOpen ? '' : 'hidden'}`}>
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar;
