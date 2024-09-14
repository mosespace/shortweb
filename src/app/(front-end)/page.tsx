import React from "react";
import { getShort } from "@/actions/shorts";
import Cards from "@/components/front-end/cards";
import { getAllCategories } from "@/actions/categories";

export default async function page() {
  const shorts: any = await getShort();
  const categories: any = await getAllCategories();

  // console.log(`categories:`, categories);

  return (
    <div className='bg-secondary min-h-screen dark:bg-primary-foreground'>
      <Cards data={shorts} categories={categories} />
    </div>
  );
}
