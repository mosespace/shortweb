"use client";

import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TbLoader } from "react-icons/tb";
import { FcGoogle } from "react-icons/fc";
import { LoginProps } from "@/types/user";
import TextInput from "../re-useable/text-input";
import { userAuthSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { buttonVariants } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema> & { name: string };

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [passErr, setPassErr] = React.useState("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [mediaLoading, setMediaLoading] = React.useState<boolean>(false);

  const router = useRouter();
  const params = useSearchParams();
  const returnUrl = params.get("returnUrl") || "/dashboard";

  async function onSubmit(data: LoginProps) {
    try {
      setIsLoading(true);
      setPassErr("");
      const loginData = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      console.log("SignIn response:", loginData);
      if (loginData?.error) {
        toast.error(
          "There was a problem with your signIn check your credentials"
        );
        setPassErr("Wrong Credentials, Check again");
      } else {
        reset();
        toast.success("Login has been successful 🎉");
        setPassErr("");
        router.push(returnUrl);
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <TextInput
            isLoading={isLoading}
            mediaLoading={mediaLoading}
            register={register}
            errors={errors}
            label='Enter Email Address'
            type='email'
            name='email'
            placeholder='info@mosespace.com'
          />
          <div>
            <TextInput
              isLoading={isLoading}
              mediaLoading={mediaLoading}
              register={register}
              errors={errors}
              label='Enter Password'
              type='password'
              name='password'
              placeholder='************'
            />
            {passErr && <p className='text-red-500 mt-2 text-xs'>{passErr}</p>}
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <TbLoader className='mr-2 h-4 w-4 animate-spin' />}
            Sign in with credentials
          </button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <button
        type='button'
        className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary py-3'
        onClick={() => {
          setMediaLoading(true);
          signIn("google");
        }}
        disabled={isLoading || mediaLoading}
      >
        {mediaLoading ? (
          <TbLoader className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <FcGoogle className='mr-2 h-4 w-4' />
        )}{" "}
        Google
      </button>
      <button
        type='button'
        className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary py-3'
        onClick={() => {
          setMediaLoading(true);
          signIn("github");
        }}
        disabled={isLoading || mediaLoading}
      >
        {mediaLoading ? (
          <TbLoader className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <FaGithub className='mr-2 h-4 w-4' />
        )}{" "}
        Github
      </button>
    </div>
  );
}
