"use server";

import { db } from "@/connections/db";
import { Short } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function createShort(data: Short) {
  try {
    const newShort = await db.short.create({
      data,
    });
    // console.log(`New short created successfully:`, newShort);
    revalidatePath("/dashboard/categories");

    return {
      error: null,
      status: 201,
      data: newShort,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function createBulkShorts(data: Short[]) {
  try {
    const newShorts = await Promise.all(
      data.map(async (data) => {
        const newShort = await db.short.create({
          data,
        });
        return newShort;
      })
    );

    // Revalidate path after creating all shorts
    revalidatePath("/dashboard/categories");
    console.log(`Created Shorts Successfully`);
    return {
      error: null,
      status: 201,
      data: newShorts,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getShort() {
  try {
    const shorts = await db.short.findMany();

    return shorts;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function deleteManyShirts() {
  try {
    const deletedShorts = await db.short.deleteMany();

    console.log(`Deletion Successful`);
    return deletedShorts;
  } catch (error) {
    console.log(error);
    return null;
  }
}
