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
    router.push("/Search/" + input + "?a=" + location);
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
  const searchParamsURl = useSearchParams();
  const locationURl = searchParamsURl.get("a");

  if (!isEmpty(searchUrl)) {
    if (TakeOneThing) {
      TakeOneThing = false;
      let realUrl = decodeURIComponent(searchUrl.slug);
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
          className="h-16 ml-1  flex-none"
          src="/svg/search.svg"
          alt="search"
        />
        <input
          type="text"
          onChange={typing}
          defaultValue={input}
          className="h-16 w-1/3 md:w-2/3 lg:w-5/6 flex-none text-black focus:outline-none "
          placeholder="Search branch name..."
          required
        />

        <div className="flex-none">
          <div className="group">
            <img className=" h-16 " src="/svg/filter.svg" alt="filter" />

            <div className="invisible absolute  z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              {categories.map(function (data) {
                return (
                  <a
                    key={data?.id}
                    className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                  >
                    {data?.name}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex-none  m-0">
          <div className="group">
            <img className=" h-16" src="/svg/location.svg" alt="location" />
            <div className="invisible absolute  z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <input
                onChange={typingLocation}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Населено място..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
