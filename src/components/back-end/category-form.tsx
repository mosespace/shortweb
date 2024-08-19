"use client";

import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { TbLoader } from "react-icons/tb";
import { useRouter } from "next/navigation";
import TextInput from "../re-useable/text-input";
import { categorySchema } from "@/schema/schema";
import { generateSlug } from "@/lib/generate-slug";
import { createCategory } from "@/actions/categories";
import { zodResolver } from "@hookform/resolvers/zod";
import { buttonVariants } from "@/components/ui/button";

type FormData = z.infer<typeof categorySchema> & { name: string };

export function CategoryForm({ userId }: { userId: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(categorySchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const router = useRouter();

  async function onSubmit(data: any) {
    const slug = generateSlug(data.name);
    data.userId = userId;
    data.slug = slug;

    try {
      setIsLoading(true);
      const res = await createCategory(data);
      if (res?.status === 409) {
        toast.error(`${res.error}`);
      } else if (res?.status === 201) {
        toast.success("Category has been created successfully 🎉");
        // router.push("/dashboard");
      } else {
        toast.error("Something went wrong. It might be network error");
        reset();
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <TextInput
            isLoading={isLoading}
            register={register}
            errors={errors}
            label='Enter category name'
            type='name'
            name='name'
            placeholder='slogans, erros'
          />

          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && <TbLoader className='mr-2 h-4 w-4 animate-spin' />}
            Create category
          </button>
        </div>
      </form>
    </div>
  );
}
