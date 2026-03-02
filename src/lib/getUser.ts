import { cookies } from "next/headers";

export async function getUser() {
  const cookieStore = cookies();

  const res = await fetch(`${process.env.API_URL}/auth/me`, {
    headers: {
      cookie: (await cookieStore).toString(),
    },
    cache: "no-cache",
  });

  if (!res.ok) return null;

  return res.json();
}
