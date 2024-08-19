"use client";

import Card from "./card";
import React, { useState } from "react";
import { CardProps } from "@/types/types";
import { Category } from "@prisma/client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

export default function Cards({
  data,
  categories,
}: {
  data: CardProps[];
  categories: Category[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (categorySlug: string) => {
    setActiveCategory(categorySlug);
  };

  const getFilteredCards = () => {
    let filteredData = data;

    if (activeCategory !== "all") {
      filteredData = filteredData.filter(
        (item) => item.categoryId === activeCategory
      );
    }

    if (searchTerm) {
      filteredData = filteredData.filter(
        (item) =>
          item.content.toLowerCase().includes(searchTerm) ||
          item.tag?.toLowerCase().includes(searchTerm)
      );
    }

    return filteredData;
  };

  return (
    <div className='cards relative items-center w-full mx-auto max-w-8xl lg:px-16 lg:py-36 md:px-12'>
      {/* Search Input */}
      <div className='mb-4'>
        <Input
          type='text'
          placeholder='Search shortweb...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='w-full p-8 rounded-2xl'
        />
      </div>

      {/* Category Tabs */}
      <Tabs
        value={activeCategory}
        onValueChange={handleCategoryChange}
        className='w-full'
      >
        <TabsList className='flex gap-4 dark:bg-secondary'>
          <TabsTrigger className='lg:px-8' value='all'>
            All
          </TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger
              className='lg:px-8'
              key={category.id}
              value={category.id}
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={activeCategory}>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 pt-4'>
            {getFilteredCards().map((item) => (
              <Card
                key={item.id}
                name={item.name}
                content={item.content}
                tag={item.tag}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
