import React from "react";
import Link from "next/link";
import Header from "./header";

export default function Alert() {
  return (
    <div className='fixed inset-x-0 top-0 z-50'>
      <div className='items-center flex text-center bg-primary dark:bg-primary z-20 top-0 gap-x-6 isolate overflow-hidden px-6 py-2.5 sm:px-3.5'>
        <div className='relative flex flex-wrap items-center justify-center mx-auto text-center gap-x-4 gap-y-2'>
          <p className='text-sm leading-6 text-white'>
            Get free 0$ developer resources
          </p>
          <Link
            className='text-white text-sm focus-visible:outline-2 focus-visible:outline-offset-2 bg-primary-foreground flex-none focus-visible:outline focus-visible:outline-gray-900 font-semibold hover:bg-gray-700 px-3.5 py-1 rounded-full shadow-sm'
            href='https:resources.mosespace.com'
            target='_blank'
          >
            @resources <span aria-hidden='true'>→</span>
          </Link>
        </div>
      </div>

      <div>
        <Header />
      </div>
    </div>
  );
}
