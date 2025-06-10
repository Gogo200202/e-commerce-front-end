"use server";
import { getJwt } from "@/app/_actions/cookie";
import Topbare from "@/app/components/topbare";
import Searchbare from "@/app/components/searchbare";
import DeleteButton from "@/app/components/deleteButton";
import LikeItemButton from "@/app/components/likeItemButton";
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
      <DeleteButton Id={id} Jwt={jwt?.value} IsYours={IsYours}></DeleteButton>
      <LikeItemButton
        Id={id}
        Jwt={jwt?.value}
        DidYouLikedIt={didYouLikedIt}
      ></LikeItemButton>
      <div className=" md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block ">
          <img className="w-full" alt="image of a girl posing" src={img} />
        </div>

        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600 dark:text-gray-300 ">
              Balenciaga Fall Collection
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
          <button className="dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 focus:outline-none">
            <svg
              className="mr-3 text-white dark:text-gray-900"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66699 4.83333V4.84166"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.333 11.5V11.5083"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Check availability in store
          </button>
          <div>
            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 dark:text-gray-300 mt-7">
              {description}
            </p>
            <p className="text-base leading-4 mt-7 text-gray-600 dark:text-gray-300">
              Product Code: 8BN321AF2IF0NYA
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Length: 13.2 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Height: 10 inches
            </p>
            <p className="text-base leading-4 mt-4 text-gray-600 dark:text-gray-300">
              Depth: 5.1 inches
            </p>
            <p className="md:w-96 text-base leading-normal text-gray-600 dark:text-gray-300 mt-4">
              Composition: 100% calf leather, inside: 100% lamb leather
            </p>
          </div>
          <div>
            <div className="border-t border-b py-4 mt-7 border-gray-200">
              <div
                data-menu
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Shipping and returns
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <svg
                    className="transform text-gray-300 dark:text-white"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                id="sect"
              >
                You will be responsible for paying for your own shipping costs
                for returning your item. Shipping costs are nonrefundable
              </div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                data-menu
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800 dark:text-gray-300">
                  Contact us
                </p>
                <button
                  className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded"
                  role="button"
                  aria-label="show or hide"
                >
                  <svg
                    className="transform text-gray-300 dark:text-white"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="hidden pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 dark:text-gray-300"
                id="sect"
              >
                If you have any questions on how to return your item to us,
                contact us.
              </div>
            </div>
          </div>
        </div>
      </div>

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
