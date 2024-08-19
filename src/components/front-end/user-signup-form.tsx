"use client";

import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { TbLoader } from "react-icons/tb";
import { createUser } from "@/actions/users";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { userAuthSchema } from "@/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TextInput from "@/components/re-useable/text-input";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof userAuthSchema>;
export function UserSignupForm({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema),
  });
  const [emailErr, setEmailErr] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [mediaLoading, setMediaLoading] = React.useState<boolean>(false);

  const router = useRouter();

  async function onSubmit(data: FormData) {
    console.log(`User Data:`, data);
    setIsLoading(true);
    data.name = `${data.firstName} ${data.lastName}`;
    data.image =
      "https://utfs.io/f/e9f27b3a-3be5-4879-a1b1-cea8f6b11718-9olsm9.jpg";
    try {
      const res = await createUser(data as any);
      if (res.status === 409) {
        setEmailErr(res.error);
      } else if (res.status === 200) {
        toast.success("Your account has been created successfully 🎉");
        router.push("/login");
      } else {
        toast("Something went wrong. 😥", {
          action: {
            label: "try again!",
            onClick: () => onSubmit(data),
          },
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast.error("Its seems something is wrong, try again");
    } finally {
      setIsLoading(false);
      reset();
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-2 gap-4'>
          <TextInput
            isLoading={isLoading}
            mediaLoading={mediaLoading}
            register={register}
            errors={errors}
            label='Enter First Name'
            type='text'
            name='firstName'
            placeholder='Uncle'
          />
          <TextInput
            isLoading={isLoading}
            mediaLoading={mediaLoading}
            register={register}
            errors={errors}
            label='Enter Last Name'
            type='text'
            name='lastName'
            placeholder='Moses'
          />
          <TextInput
            isLoading={isLoading}
            mediaLoading={mediaLoading}
            register={register}
            errors={errors}
            label='Enter Tel:'
            type='tel'
            name='phone'
            placeholder='+256 770 981 193'
          />
          <div>
            <TextInput
              isLoading={isLoading}
              mediaLoading={mediaLoading}
              register={register}
              errors={errors}
              label='Enter Your Email'
              type='email'
              name='email'
              placeholder='info@mosespace.com'
            />
            {emailErr && (
              <p className='text-red-500 text-xs mt-2'>{emailErr}</p>
            )}
          </div>
        </div>
        <div className='mt-4'>
          <TextInput
            isLoading={isLoading}
            mediaLoading={mediaLoading}
            register={register}
            errors={errors}
            label='Enter Password'
            type='password'
            name='password'
            placeholder='*********'
          />
        </div>
        <Button type='submit' className='w-full mt-4' disabled={isLoading}>
          {isLoading && <TbLoader className='mr-2 h-4 w-4 animate-spin' />}
          Sign in now
        </Button>
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
