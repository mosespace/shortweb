import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { MdOutlineWebStories } from "react-icons/md";

export default function Header() {
  return (
    <section className='relative bg-secondary/30 backdrop-blur-md dark:bg-primary-foreground/30 border-b border-white/10 overflow-hidden'>
      <div className='relative w-full mx-auto max-w-7xl'>
        <div className='relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6'>
          <div className='flex flex-row items-center justify-between text-sm dark:text-white lg:justify-start'>
            <Link href='/' className='inline-flex items-center gap-2 font-bold'>
              <MdOutlineWebStories className='size-8' />
              shortweb
            </Link>
            {/* <button className='inline-flex items-center justify-center p-2 dark:text-white focus:outline-none focus:text-white/50 hover:text-white md:hidden'>
              <svg
                className='size-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  className='inline-flex'
                  d='M4 6h16M4 12h16M4 18h16'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></path>
                <path
                  className='hidden'
                  d='M6 18L18 6M6 6l12 12'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                ></path>
              </svg>
            </button> */}
          </div>
          <nav className='flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0'>
            <Link
              href='/login'
              className='block px-4 py-2 mt-2 text-sm dark:text-white focus:outline-none focus:shadow-outline hover:text-white/50 md:mt-0'
            >
              Sign in{" "}
            </Link>
            <Link
              href='/register'
              className='items-center justify-center focus:outline-none inline-flex dark:text-white hover:bg-[#687af0]/5 rounded-xl active:bg-primary active:text-#fff bg-[#687af0]/10 focus-visible:outline-2 focus-visible:outline-[#687af0] focus-visible:outline-offset-2 group px-4 py-2 text-sm'
            >
              Sign up
            </Link>
            <div className='ml-2'>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
