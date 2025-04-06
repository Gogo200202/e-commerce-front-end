"use client";

import { useParams } from "next/navigation";
import Searchbare from "@/app/components/searchbare";

export default function ExampleClientComponent() {
  const params = useParams<{ slug: string }>();

  console.log(params);

  return (
    <>
    <Searchbare/>
    <div className="grid h-screen place-items-center">

      <div className="h-auto w-[380px] lg:h-2/3 lg:w-2/3 bg-amber-100  rounded-2xl lg:relative ">
        <div className=" mt-10 ml-4 w-[350] lg:w-2/5 ">
          <img
            className=" rounded-2xl"
            src="/img/gothic-girl-4k-re-2048x2048-771658380.jpg"
            alt="Sunset in the mountains"
          />
          <div className="text-black">tel:0899123843</div>
        </div>
        <div className="lg:absolute top-1/6 right-0 lg:w-3/6">
          <div className=" m-2 text-black  font-bold  ">
            Testvane na zaglavieto
          </div>
          <div className="text-black font-bold m-2">Take goriq neshto</div>
          <div className="m-2 text-black">
            test da produkti s mnogo dulgi imena test da produkti s mnogo dulgi
            imena test da produkti s mnogo dulgi imena test da produkti s mnogo
            dulgi imena
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
