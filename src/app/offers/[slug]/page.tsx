"use server";
import { getJwt } from "@/app/_actions/cookie";
import Topbare from "@/app/components/topbare";
import Searchbare from "@/app/components/searchbare";
import DeleteButton from "@/app/components/deleteButton";
import LikeItemButton from "@/app/components/likeItemButton";
import Footer from "@/app/components/footer";
export default async function Offers({ params }: { params: { slug: string } }) {
  const slug = await params;
  let id: string = await slug.slug;
  let jwt = await getJwt();
  let img;
  let name;
  let description;
  let phone;
  let price;

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    };

    const response = await fetch(
      "http://localhost:8080/getById",
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    let data = await response.json();
    data = data.item;
    img = data.img;
    name = data.name;
    description = data.description;
    phone = data.phone;
    price = data.price;
  } catch (error: any) {
    console.error(error.message);
  }
  let IsYours = false;
  try {
    const myHeaders = new Headers();
    myHeaders.append("gfg_token_header_key", jwt!?.value);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      _id: id,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "http://localhost:8080/user/checkIfItemBelongsToUser",
      requestOptions
    );

    let data = await response.json();
    IsYours = data.IsYours;
  } catch (error: any) {
    console.error(error.message);
  }

  let didYouLikedIt;

  const myHeaders = new Headers();
  myHeaders.append("gfg_token_header_key", jwt!?.value);
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    _id: id,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  let fetchIsItLiked = await fetch(
    "http://localhost:8080/user/checkIfUserLikedThisItem",
    requestOptions
  );
  let isItLiked = await fetchIsItLiked.json();

  didYouLikedIt = isItLiked.IsItLiked;
  return (
    <>
      <Topbare />
      <Searchbare />

      <div className=" h-screen md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
          <div className=" relative">
            <img className="w-full" alt="image of a girl posing" src={img} />
            <div className="absolute  top-3 right-3 h-10 w-11 " >
              <DeleteButton
                Id={id}
                Jwt={jwt?.value}
                IsYours={IsYours}
              ></DeleteButton>
            </div>
            <div className=" absolute  bottom-3 right-3 h-10 w-11 ">
              <LikeItemButton
                Id={id}
                Jwt={jwt?.value}
                DidYouLikedIt={didYouLikedIt}
              ></LikeItemButton>
            </div>
          </div>
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              sloji kategoriq
            </p>
            <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 dark:text-white mt-2">
              {name}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Phone
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300">
                {phone}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
              Price
            </p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 dark:text-gray-300 mr-3">
                {price}
              </p>
            </div>
          </div>

          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              {description}
            </p>
          </div>
        </div>
      </div>
      <Footer/>

      {/* <div className="grid h-screen place-items-center">
        <div className="h-auto w-[380px] lg:h-2/3 lg:w-2/3 bg-amber-100  rounded-2xl lg:relative ">
          <div className=" mt-10 ml-4 w-[350] lg:w-2/5 ">
            <img
              className=" rounded-2xl"
              src={img}
              alt="Sunset in the mountains"
            />
            <div className="text-black">tel:{phone}</div>
          </div>
          <div className="lg:absolute top-1/6 right-0 lg:w-3/6">
            <div className=" m-2 text-black  font-bold  ">{description}</div>

            <div className="m-2 text-black">{name}</div>
          </div>
        </div>
      </div> */}
    </>
  );
}
