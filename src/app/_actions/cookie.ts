"use server";
import { cookies } from "next/headers";

async function createCookie(username: string, Jwt: string) {
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
  const cookieStore = await cookies();

  if (cookieStore.get("JWT") != null) {
    return true;
  } else {
    return false;
  }
}

async function getJwt() {
  const cookieStore = await cookies();

  return cookieStore.get("JWT");
}

async function getName() {
  const cookieStore = await cookies();

  return cookieStore.get("name");
}

async function deleteAll() {
  const cookieStore = await cookies();

  await cookieStore.delete("name");
  await cookieStore.delete("JWT");
}

export { createCookie, checkIfLogIn, getJwt, getName, deleteAll };
