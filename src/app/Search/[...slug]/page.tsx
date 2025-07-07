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
  let nameOfProduct = decodeURIComponent(obgParams.slug[0]).slice(2);
  let itemCategory = decodeURIComponent(obgParams.slug[1]).slice(2);
  let itemLocation = decodeURIComponent(obgParams.slug[2]).slice(2);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nameOfProduct: nameOfProduct,
      itemCategory: itemCategory,
      itemLocation: itemLocation,
    }),
  };

  const response = await fetch(
    "http://localhost:8080/getItemsByParams/",
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
