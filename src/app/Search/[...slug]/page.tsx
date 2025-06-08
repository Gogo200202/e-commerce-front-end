"use server";

import CardSearch from "@/app/components/cardsSearch";
// import { useParams } from "next/navigation";
// import { useSearchParams } from "next/navigation";

import Searchbare from "@/app/components/searchbare";
//import { useEffect, useState } from "react";

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

  const items = await response.json();

  return (
    <>
      <Topbare />
      <Searchbare />
      <h2 className="text-2xl font-bold tracking-tight text-white">
          Customers also purchased
        </h2>

      <CardSearch data={items.items} />
    </>
  );
}
