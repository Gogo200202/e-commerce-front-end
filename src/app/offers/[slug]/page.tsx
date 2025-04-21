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
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpreview.free3d.com%2Fimg%2F2015%2F12%2F2279230813763536303%2Fkp10u1da.jpg&f=1&nofb=1&ipt=5bc77f3f08a188ef86b76834638b1e35ec0d16c8266f830c03958c8703a2393c"
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
