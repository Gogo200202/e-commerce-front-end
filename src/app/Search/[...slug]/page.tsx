"use server";

// import { useParams } from "next/navigation";
// import { useSearchParams } from "next/navigation";

import Searchbare from "@/app/components/searchbare";
//import { useEffect, useState } from "react";
import Link from "next/link";
import Topbare from "@/app/components/topbare";

export default async function Search({ params }) {
  interface item {
    _id: number;
    img: string;
    name: string;
    description: string;
  }
  // const params = useParams();
  // const search = useParams<{ slug: string }>();
  let obgParams = await params;
 console.log(obgParams);
  let searchUrl = decodeURIComponent(obgParams.slug);


  // const searchParams = useSearchParams();

  // const [data, setData] = useState<item[]>([]);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: searchUrl }),
  };

  const response = await fetch(
    "http://localhost:8080/getByName/",
    requestOptions
  );

  const data = await response.json();


  return (
    <>
      <Topbare />
      <Searchbare />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.items.map((post: item) => (
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
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">$35</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
