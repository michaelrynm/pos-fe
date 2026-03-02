"use server";

import { redirect } from "next/navigation";
import { login } from "@/features/internal/auth/services/auth-service";

export interface LoginActionState {
  error: string | null;
}

export async function loginAction(
  _prevState: LoginActionState,
  formData: FormData,
): Promise<LoginActionState> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  if (!username || !password) {
    return { error: "Username and password are required." };
  }

  try {
    await login({ username, password });
  } catch {
    return { error: "Invalid credentials. Please try again." };
  }

  redirect("/dashboard");
}
