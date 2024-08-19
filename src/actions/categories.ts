"use server";

import { db } from "@/connections/db";
import { Category } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createCategory(data: Category) {
  const slug = data.slug;
  try {
    const existingCategory = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (existingCategory) {
      return {
        error: `Sorry, Category already exists`,
        status: 409,
        data: null,
      };
    }
    const newCategory = await db.category.create({
      data,
    });
    // console.log(`New Category created successfully:`, newCategory);
    revalidatePath("/dashboard/categories");

    return {
      error: null,
      status: 201,
      data: null,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllCategories() {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateCategoryById(id: string, data: Category) {
  try {
    const updatedCategory = await db.category.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/categories");
    return updatedCategory;
  } catch (error) {
    console.log(error);
  }
}
export async function getCategoryById(id: string) {
  try {
    const category = await db.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteCategory(id: string) {
  try {
    const deletedCategory = await db.category.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedCategory,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkCategories(categories: Category[]) {
  try {
    for (const category of categories) {
      await createCategory(category);
    }
  } catch (error) {
    console.log(error);
  }
}
