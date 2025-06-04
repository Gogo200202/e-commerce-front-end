"use server";
import { cookies } from "next/headers";
async function createCookie(username: string, Jwt: string) {
  "use server";
  const cookieStore = await cookies();
  cookieStore.set({
    name: "JWT",
    value: Jwt,
    httpOnly: true,
  });
  cookieStore.set({
    name: "name",
    value: username,
    httpOnly: true,
  });
}

async function checkIfLogIn() {
  "use server";
  const cookieStore = await cookies();

  if (cookieStore.get("JWT") != null) {
    return true;
  } else {
    return false;
  }
}

async function getJwt() {
  "use server";
  const cookieStore = await cookies();

  return cookieStore.get("JWT")
}


async function getName() {
  "use server";
  const cookieStore = await cookies();

  return cookieStore.get("name")
}
export { createCookie, checkIfLogIn,getJwt,getName };
