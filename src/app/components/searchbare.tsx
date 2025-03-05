"use client";
import React, { useState } from "react";
export default function Searchbare() {
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <div className="h-16 w-full border-x-[3vw] border-(--background)   ">
      <div className="bg-whiteSearchBar h-full w-full rounded-md flex">
        <img
          className="h-16 ml-1  flex-none"
          src="/svg/search.svg"
          alt="search"
        />
        <input
          type="text"
          className="h-16 w-1/3 md:w-2/3 lg:w-5/6 flex-none text-black focus:outline-none "
          placeholder="Search branch name..."
          required
        />

        <div className="flex-none ">
          <div className="group">
            <img
              className=" h-16 "
              src="/svg/filter.svg"
              alt="filter"
            />

            <div className="invisible absolute  z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Sunday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Tuesday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Wednesday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Thursday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Friday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Saturday
              </a>
            </div>
          </div>
        </div>

        <div className="flex-none  m-0">
          <div className="group">
            <img
              className=" h-16"
              src="/svg/location.svg"
              alt="location"
            />
            <div className="invisible absolute  z-50 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Sunday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Monday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Tuesday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Wednesday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Thursday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Friday
              </a>

              <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                Saturday
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
