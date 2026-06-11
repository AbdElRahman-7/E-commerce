"use server";

import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { createSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { deleteSession } from "@/lib/session";

const mockUser = {
  id: "1",
  email: "test@test.com",
  passwordHash: "$2b$10$hpkJRwgBpL.8Kf6/fa15quIGjmndQLZWerXkcgmAZudUKr8BbNZr2",
};

export async function login(_prevState: unknown, formData: FormData) {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  const password = String(formData.get("password") ?? "").trim();

  if (email !== mockUser.email) {
    return { error: "email is not correct" };
  }

  const isPasswordValid = await bcrypt.compare(password, mockUser.passwordHash);

  if (!isPasswordValid) {
    return { error: "password is not correct" };
  }

  await createSession(mockUser.id);
  redirect("/dashboard");
}
{
  /*With the help of AI */
}
export async function register(_prevState: unknown, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password || !name) {
    return { error: "Please enter all the data." };
  }

  if (password.length < 6) {
    return { error: "The password must be at least 6 characters long." };
  }

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();

  revalidatePath("/", "layout");

  redirect("/auth/login");
}
