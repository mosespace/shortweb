"use client";

import Link from "next/link";
import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { signOut, useSession } from "next-auth/react";
import { MdOutlineWebStories } from "react-icons/md";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default async function Header() {
  const { data: session } = useSession();
  const user = session?.user;

  const router = useRouter();
  return (
    <section className='relative bg-secondary/30 backdrop-blur-md dark:bg-primary-foreground/30 border-b border-white/10 overflow-hidden'>
      <div className='relative w-full mx-auto max-w-7xl'>
        <div className='relative flex flex-col w-full p-5 mx-auto lg:px-16 md:flex-row md:items-center md:justify-between md:px-6'>
          <div className='flex flex-row items-center justify-between text-sm dark:text-white lg:justify-start'>
            <Link href='/' className='inline-flex items-center gap-2 font-bold'>
              <MdOutlineWebStories className='size-8' />
              shortweb
            </Link>
          </div>
          <nav className='flex-col items-center flex-grow hidden md:flex md:flex-row md:justify-end md:pb-0'>
            {user?.role === "ADMIN" ? (
              <>
                <Button onClick={() => router.push("/dashboard")}>
                  Go to Dashboard
                </Button>
              </>
            ) : (
              <>
                {user ? (
                  <>
                    <Button onClick={() => signOut()}>Log-Out</Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => router.push("/register")}
                      className='items-center justify-center focus:outline-none inline-flex dark:text-white hover:bg-[#687af0]/5 rounded-xl active:bg-primary active:text-#fff bg-[#687af0]/10 focus-visible:outline-2 focus-visible:outline-[#687af0] focus-visible:outline-offset-2 group px-4 py-2 text-sm'
                    >
                      Sign up
                    </Button>
                  </>
                )}
              </>
            )}

            <div className='ml-2'>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
