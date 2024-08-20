import Link from "next/link";
import React from "react";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className='bg-primary-foreground'>
      <div className='px-8 py-12 mx-auto md:px-12 lg:px-32 max-w-7xl'>
        <div className='flex flex-col justify-between gap-8 md:flex-row md:items-end'>
          <p className='text-2xl font-bold uppercase text-white'>mosespace</p>
          <div className='flex gap-6'>
            <Link
              className='p-1 -m-1 group'
              aria-label='Follow on Twitter'
              href='https://twitter.com/bantu_creative'
              target="_blank"
            >
              <FaTwitter className='size-6 transition  fill-white hover:text-accent-500 md hydrated' />
            </Link>
            <Link
              className='p-1 -m-1 group'
              aria-label='Follow on Instagram'
              href='https://instagram.com/typifymedia'
              target="_blank"
            >
              <FaInstagram className='size-6 transition  fill-white hover:text-accent-500 md hydrated' />
            </Link>
            <Link
              className='p-1 -m-1 group'
              aria-label='Follow on GitHub'
              href='https://github.com/mosespace'
              target="_blank"
            >
              <FaGithub className='size-6 transition  fill-white hover:text-accent-500 md hydrated' />
            </Link>
            <Link
              className='p-1 -m-1 group'
              aria-label='Follow on LinkedIn'
              href='https://linkedin.com/kisakyemoses'
              target="_blank"
            >
              <FaLinkedin className='size-6 transition  fill-white hover:text-accent-500 md hydrated' />
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-8 py-12 mt-4 mb-12 text-sm font-medium text-gray-500 border-y lg:grid-cols-3 xl:col-span-2'>
          <div>
            <h3 className='text-base dark:text-white text-white'>
              Information
            </h3>
            <ul role='list' className='mt-4 space-y-2'>
              <li>
                <Link href='#_' className='hover:text-white text-white/30'>
                  License
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-base dark:text-white text-white'>Socials</h3>
            <ul role='list' className='mt-4 space-y-2'>
              <li>
                <Link
                  href='https://twitter.com/bantu_creative'
                  className='hover:dark:text-white text-white/30'
                  target="_blank"
                >
                  @kisakye_moses
                </Link>
              </li>
              <li>
                <Link
                  href='https://twitter.com/bantu_creative'
                  className='hover:dark:text-white text-white/30'
                  target="_blank"
                >
                  @mosespace
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-base dark:text-white text-white'>
              Premium Themes
            </h3>
            <ul role='list' className='mt-4 space-y-2'>
              <li>
                <Link
                  href='https://resources.mosespace.com/'
                  className='hover:dark:text-white text-white/30'
                  target="_blank"
                >
                  Developer Resources
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className='flex flex-col mt-12 md:flex-row md:items-center md:justify-between'
          x-data='{ year: new Date().getFullYear() }'
        >
          <span className='text-sm font-medium text-gray-500 text-balance'>
            Beautifully designed NextJS, React and Tailwind starter kit! Save
            months of time and build your startup landing page in minutes.
          </span>
          <form className='w-full max-w-sm ml-auto'>
            <div className='flex flex-col w-full gap-2 lg:flex-row'>
              <label className='sr-only'>Email address</label>
              <input
                name='email'
                id='email-address'
                type='email'
                placeholder='Enter your email'
                aria-describedby='emailHelp'
                className='block w-full h-12 bg-transparent px-4 py-2 duration-200 border rounded-lg appearance-none bg-chalk border-primary text-accent-500 placeholder-zinc-300 focus:border-primary/30 focus:outline-none focus:ring-primary/30 sm:text-sm'
              />
              <span id='emailHelp' className='sr-only'>
                Please enter your email address to subscribe.
              </span>
              <Button
                type='submit'
                className='h-12 px-5 py-3 font-medium text-white duration-200 bg-primary md:w-auto rounded-xl hover:bg-primary-foreground'
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
}
