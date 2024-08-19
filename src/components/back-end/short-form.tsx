"use client";

import * as z from "zod";
import * as React from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { TbLoader } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { shortSchema } from "@/schema/schema";
import TextArea from "../re-useable/text-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import FormSelectInput from "../re-useable/select-input";
import { createShort } from "@/actions/shorts";

type FormData = z.infer<typeof shortSchema> & { name: string };

export function ShortForm({ categories }: { categories: any }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(shortSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<string>("");

  const router = useRouter();

  // Map categories to expected value-label structure
  const formattedCategories = categories.map((category: any) => ({
    value: category.id,
    label: category.name,
  }));

  async function onSubmit(data: any) {
    data.categoryId = selected;
    try {
      setIsLoading(true);
      const res = await createShort(data);

      if (res?.status === 201) {
        toast.success("Short has been created successfully 🎉");
        router.push("/dashboard");
      } else {
        toast.error("Something went wrong. It might be network error");
      }
    } catch (error) {
      console.error("Network Error:", error);
    } finally {
      reset();
      setIsLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-4'>
          <FormSelectInput
            label='Choose category'
            optionsArray={formattedCategories}
            selected={selected}
            setSelected={setSelected}
          />
          <TextArea
            isLoading={isLoading}
            register={register}
            errors={errors}
            label='Enter shortweb content'
            name='content'
          />
        </div>
        <Button className='w-full mt-4' disabled={isLoading}>
          {isLoading && <TbLoader className='mr-2 h-4 w-4 animate-spin' />}
          Create short
        </Button>
      </form>
    </div>
  );
}
