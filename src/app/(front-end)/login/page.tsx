import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { UserAuthForm } from "@/components/front-end/user-auth-form";
import { MdOutlineWebStories } from "react-icons/md";

export const metadata = {
  title: "Create an account | NextJs Inc",
  description: "Create an account to get started.",
};

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session?.user) {
    return redirect("/dashboard");
  }
  return (
    <div className='dark:bg-primary-foreground h-screen items-center flex justify-center border-b border-white/10'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <Link
            href='/'
            className='inline-flex justify-center items-center gap-2 font-bold'
          >
            <MdOutlineWebStories className='size-8' />
            shortweb
          </Link>

          <h1 className='text-2xl font-semibold tracking-tight'>
            Create an account
          </h1>
          <p className='text-sm text-muted-foreground'>
            Enter your email below to create your account
          </p>
        </div>
        <Suspense fallback={<div></div>}>
          <UserAuthForm />
        </Suspense>
        <p className='px-8 text-center text-sm text-muted-foreground'>
          By clicking continue, you agree to our&nbsp;
          <Link
            href='/terms'
            className='hover:text-brand underline underline-offset-4'
          >
            Terms of Service&nbsp;
          </Link>
          and&nbsp;
          <Link
            href='/privacy'
            className='hover:text-brand underline underline-offset-4'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
