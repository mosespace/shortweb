"use server";

import bcrypt from "bcrypt";
import { UserProps } from "@/types/user";
import { revalidatePath } from "next/cache";
import { db } from "@/connections/db";

export async function createUser(data: UserProps) {
  const { email, password, firstName, lastName, name, phone, image } = data;
  try {
    // Hash the Password
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        error: `Sorry, Email already exists`,
        status: 409,
        data: null,
      };
    }
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        name,
        phone,
        image,
      },
    });
    revalidatePath("/dashboard/users");
    console.log(`New User Created Successfully:`, newUser);
    return {
      error: null,
      status: 200,
      data: newUser,
    };
  } catch (error) {
    console.log(error);
    return {
      error: `Something Went wrong, Please try again`,
      status: 500,
      data: null,
    };
  }
}
