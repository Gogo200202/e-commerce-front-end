"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";
var towns = require("../json/towns.json");

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
    name: "Недвижими имоти",
    id: 1,
  },
  {
    name: "Дрехи",
    id: 2,
  },
  {
    name: "Автомобили",
    id: 3,
  },
  {
    name: "Животни",
    id: 4,
  },
  ,
  {
    name: "За дома",
    id: 5,
  },
  {
    name: "Работа",
    id: 6,
  },
];

let TakeOneThing = true;
export default function searchable() {
  const router = useRouter();

  const [input, setInput] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  function pushRoutToAll() {
    console.log(location);
    router.push("/Search/t=" + input + "/c=" + category + "/l=" + location);
  }

  function AddCategory(event: any) {
    let className =
      "my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2";

    for (let i = 0; i < event.target.parentElement.children.length; i++) {
      event.target.parentElement.children[i].className = className;
    }
    let text = event.target.text;

    event.target.className = "font-bold";
    setCategory(event.target.text);
  }

  function typingLocation(event: any) {
    
    setLocation(event.target.value);
  }

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
  });

  const searchUrl = useParams<{ slug: string }>();

  if (!isEmpty(searchUrl)) {
    if (TakeOneThing) {
      TakeOneThing = false;
      let itemName = decodeURIComponent(searchUrl.slug[0]).slice(2);
      let itemCategory = decodeURIComponent(searchUrl.slug[1]).slice(2);
      let itemLocation = decodeURIComponent(searchUrl.slug[2]).slice(2);

      const pathname = usePathname();
      if (!pathname.startsWith("/offers")) {
        setInput(itemName);
        setCategory(itemCategory);
        setLocation(itemLocation);
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
                    onClick={AddCategory}
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
            <img className=" h-16" src="/svg/location.svg"  />
            <div className="invisible absolute  z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <input
              list="location"
                onChange={typingLocation}
                className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Населено място..."
              />
              <datalist id="location">
                {towns.map((town: any) => (
                  <option key={town.id} value={town.name} />
                ))}
              </datalist>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
