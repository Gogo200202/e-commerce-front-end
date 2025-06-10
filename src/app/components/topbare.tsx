import Link from "next/link";
import { checkIfLogIn, getName } from "../_actions/cookie";
export default async function Topbare() {
  let logedIN = await checkIfLogIn();
  let name = await getName();

  return (
    <div className="h-24  bg-topbare relative">
      <Link href="/">
        <img
          className="h-16 absolute  bottom-5 left-5"
          src="/svg/ecommerce.svg"
        />
      </Link>

      <div className="absolute top-5  right-5 grid grid-cols-2 grid-rows-2 ">
        <div className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500">
          {" "}
          {name?.value}
        </div>
        {logedIN ? (
          <>
            <Link
              className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
              href="/myProducts"
            >
              Моите продукти 
            </Link>
            <Link
              className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
              href="/myLIkedProducts"
            >
              Моите харесани продукти 
            </Link>
            <Link
              className="h-10 w-40 border-t-8 border-(--color-whiteSearchBar)  rounded-md bg-whiteSearchBar   text-black text-center  hover:text-white "
              href="/AddProduct"
            >
              Добави обява
            </Link>
          </>
        ) : (
          <Link
            className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
            href="/SignUp"
          >
            Създаите профил
          </Link>
        )}
      </div>
    </div>
  );
}
