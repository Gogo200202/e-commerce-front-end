"use client";

import Link from "next/link";
import { useState } from "react";
interface item {
  _id: number;
  img: string;
  name: string;
  price: string;
}
export default function CardSearch(props: item[]) {
  let items = JSON.parse(props.data);

  let totalPageCount = Math.ceil(items.length / 8);
  
const [pageCount, setPageCount] = useState(1);
  const [page, setPage] = useState(0);
  const [startingIndex, setStartingIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [currentItems, setItems] = useState(items.slice(page, 8));

  function NextItems() {
    let startingIndex = page + 8; 

    let endIndex = startingIndex + 8; 

    setItems(items.slice(startingIndex, endIndex));
    let addPage = page + 8; 
    setPage(addPage);
    setStartingIndex(startingIndex);
    setEndIndex(endIndex);
    let nextPageCount=pageCount+1;
    setPageCount(nextPageCount)
    
  }
  function BackItems() {
   
   let prevStartInd=startingIndex-8;
  
   let prevEndIndex=endIndex-8;

    setItems(items.slice(prevStartInd, prevEndIndex));
   let prevPage=page-8;
    setPage(prevPage);
   
    setStartingIndex(prevStartInd);
    setEndIndex(prevEndIndex);
    let nextPageCount=pageCount-1;
    setPageCount(nextPageCount)
  }
  return (
    <>
      <div className="mx-auto  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="h-auto mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {currentItems.map((post: item) => (
            <Link key={post._id} href={`/offers/${post._id}`}>
              <div className="group relative">
                <img
                  src={post.img}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {post.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-white-900">
                    ${post.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="md:grid md:grid-cols-3 content-center">
          {1<pageCount?<><button onClick={BackItems}>{"<<"}Back</button></>:<></>}
          
          <div className=" text-center">{pageCount}</div>
          {totalPageCount>pageCount?<><button onClick={NextItems}>Next{">>"}</button></>:<></>}
          {/* <button onClick={NextItems}>Next{">>"}</button> */}
        </div>
      </div>
    </>
  );
}
