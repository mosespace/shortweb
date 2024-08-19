import React from "react";
import { getShort } from "@/actions/shorts";
import Cards from "@/components/front-end/cards";
import { getAllCategories } from "@/actions/categories";
import HeroSection from "@/components/front-end/hero-section";

export default async function page() {
  const shorts: any = await getShort();
  const categories: any = await getAllCategories();

  // console.log(`categories:`, categories);

  return (
    <div className='bg-secondary dark:bg-primary-foreground'>
      <Cards data={shorts} categories={categories} />
      {/* <HeroSection /> */}
    </div>
  );
}
