"use server";
import CardSearch from "@/app/components/cardsSearch";
import Footer from "@/app/components/footer";
import Searchbare from "@/app/components/searchbare";
import Topbare from "@/app/components/topbare";

export default async function Search({ params }) {
  interface item {
    _id: number;
    img: string;
    name: string;
    description: string;
  }

  let obgParams = await params;

  let searchUrl = decodeURIComponent(obgParams.slug);

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
      <h2 className=" text-2xl font-bold tracking-tight text-white">
        Продукти за търсене
        <CardSearch data={JSON.stringify(items.items)} />
      </h2>

      <Footer />
    </>
  );
}
