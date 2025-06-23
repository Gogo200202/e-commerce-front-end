"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, ChangeEvent } from "react";
import { useParams } from "next/navigation";
import { useSearchParams } from "next/navigation";

import { usePathname } from "next/navigation";

function isEmpty(obj: any) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}

const categories = [
  {
    name: "Електроника",
    id: 0,
  },
  {
    name: "Спорт",
    id: 1,
  },
  {
    name: "Дрехи",
    id: 2,
  },
  {
    name: "Животни",
    id: 3,
  },
  {
    name: "Работа",
    id: 4,
  },
  ,
  {
    name: "Недвижими имоти",
    id: 5,
  },
];

let TakeOneThing = true;
export default function searchable() {
  const router = useRouter();

  function pushRoutToAll() {
    router.push("/Search/" + input + "/" + location);
  }

  const [input, setInput] = useState("");
  const [location, setLocation] = useState("");

  function typing(event: any) {
    setInput(event.target.value);
  }

  function typingLocation(event: any) {
    setLocation(event.target.value);
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
  }, [input, location]);

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
