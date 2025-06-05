"use client";
import Link from "next/link";
import { checkIfLogIn, getName } from "../_actions/cookie";
import { useState, useEffect } from "react";

export default function Topbare() {
  const [logedIN, setLogedIN] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    async function GetDataFromCookie() {
      let logedIN = await checkIfLogIn();

      let name = await getName();
      setLogedIN(logedIN);
      setName(name?.value!);
    }
    GetDataFromCookie();
  }, [logedIN, name]);

  return (
    <div className="h-24  bg-topbare relative">
      <Link href="/">
        <img
          className="h-16 absolute  bottom-5 left-5"
          src="/svg/ecommerce.svg"
        />
      </Link>

      <div className="absolute top-5  right-5 grid grid-cols-2 grid-rows-2 ">
        <div className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500">
          {" "}
          {name?.value}
        </div>
        {logedIN ? (
          <Link
            className="h-10 w-40 border-t-8 border-(--color-whiteSearchBar)  rounded-md bg-whiteSearchBar   text-black text-center  hover:text-white "
            href="/AddProduct"
          >
            Добави обява
          </Link>
        ) : (
          <Link
            className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
            href="/SignUp"
          >
            Създаите профил
          </Link>
        )}
      </div>
    </div>
  );
}
