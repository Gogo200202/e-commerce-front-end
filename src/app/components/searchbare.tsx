"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";


import { usePathname } from "next/navigation";

function isEmpty(obj: any) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}



let TakeOneThing = true;
export default function searchable() {
  const router = useRouter();

  function pushRoutToAll() {
    router.push("/Search/" + input );
  }

  const [input, setInput] = useState("");

  function typing(event: any) {
    setInput(event.target.value);
  }

 
  function searchbareIcon() {
    TakeOneThing = true;

    pushRoutToAll();
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        TakeOneThing = true;
        pushRoutToAll();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [input]);

  const searchUrl = useParams<{ slug: string }>();

  if (!isEmpty(searchUrl)) {
    if (TakeOneThing) {
      TakeOneThing = false;
      let realUrl = decodeURIComponent(searchUrl.slug[0]);
      const pathname = usePathname();
      if (!pathname.startsWith("/offers")) {
        setInput(realUrl);
      }
    }
  }

  return (
    <div className="  my-5 h-16 w-full border-x-[3vw] border-(--background)   ">
      <div className="bg-whiteSearchBar h-full w-full rounded-md flex">
        <img
          onClick={searchbareIcon}
          className="h-16 ml-1  "
          src="/svg/search.svg"
          alt="search"
        />
        <input
          type="text"
          onChange={typing}
          defaultValue={input}
          className="h-16   text-black focus:outline-none "
          placeholder="Search branch name..."
          required
        />

      </div>
    </div>
  );
}
