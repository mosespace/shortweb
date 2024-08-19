import { z } from "zod";

export const FormSchema = z.object({
  userId: z.string(),
  slug: z.string(),
  name: z.string().min(4, {
    message: "Name must be at least 4 characters long.",
  }),
  category: z.string({
    required_error: "You need to choose a category",
  }),
  url: z.string().url({
    message: "Not a valid url type",
  }),
  description: z.string().min(20, {
    message: "Description must be at least 20 characters long.",
  }),
  isApproved: z.boolean().default(false).optional(),
});

export const NameSchema = z.object({
  userId: z.string().optional(),
  slug: z.string(),
  name: z.string().min(4, {
    message: "Name must be at least 4 characters long.",
  }),
});

export const contentSchema = z.object({
  userId: z.string().optional(),
  content: z.string(),
});

export const taskSchema = z.object({
  id: z.string(),
  username: z.string(),
  title: z.string(),
  status: z.string(),
  tech_stack: z.string(),
  priority: z.string(),
  userId: z.string(),
});

export const userAuthSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "You've not specified an email or not a valid email",
    }),
  firstName: z
    .string()
    .min(2, {
      message: "First Name must be at least 2 characters long.",
    })
    .optional(),
  image: z.string().optional(),
  name: z.string().optional(),
  lastName: z
    .string()
    .min(2, {
      message: "Last Name must be at least 2 characters long.",
    })
    .optional(),
  phone: z
    .string()
    .min(2, {
      message: "Phone Number must be at least 2 characters long.",
    })
    .optional(),
  password: z
    .string()
    .refine(
      (val) =>
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
          val
        ),
      {
        message:
          "Password must be at least 8 characters long and contain at least one uppercase character, one lowercase character, and one special symbol",
      }
    ),
});

export const categorySchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  userId: z.string().optional(),
  slug: z.string().optional(),
});

export const shortSchema = z.object({
  tag: z
    .string()
    .min(2, {
      message: "Tag must be at least 2 characters long.",
    })
    .optional(),
  content: z.string().min(2, {
    message: "Content must be at least 2 characters long.",
  }),
  userId: z.string().optional(),
  categoryId: z.string().optional(),
});

export const onBoardingAuth = z.object({
  name: z
    .string({
      required_error: "Names are required",
    })
    .min(6, {
      message: "Names too short - should be 6 chars minimum",
    }),
  image: z.string(),
});

export const DeleteConfirmation = z.object({
  confirmation: z.string({
    required_error: "Confirmation is required",
  }),
});

export type Task = z.infer<typeof taskSchema>;
