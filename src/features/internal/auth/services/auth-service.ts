import { cookies } from "next/headers";

export async function login(data: { username: string; password: string }) {
  const res = await fetch(`${process.env.API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Invalid Credentials");
  }

  // Ambil access_token dari Set-Cookie header backend, teruskan ke browser
  const setCookieHeader = res.headers.get("set-cookie");
  if (setCookieHeader) {
    const cookieStore = await cookies();

    const parts = setCookieHeader.split(";").map((p) => p.trim());
    const [nameValue] = parts;
    const value = nameValue.replace("access_token=", "").trim();

    const isHttpOnly = parts.some((p) => p.toLowerCase() === "httponly");
    const isSecure = parts.some((p) => p.toLowerCase() === "secure");
    const pathPart = parts.find((p) => p.toLowerCase().startsWith("path="));
    const path = pathPart ? pathPart.split("=")[1] : "/";

    cookieStore.set("access_token", value, {
      httpOnly: isHttpOnly,
      secure: isSecure,
      path,
      sameSite: "lax",
    });
  }

  return res.json();
}
