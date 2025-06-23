import Link from "next/link";
import { checkIfLogIn, getName } from "../_actions/cookie";

export default async function Topbare() {
  let logedIN = await checkIfLogIn();
  let name = await getName();

  

  return (
    <div className="h-50 md:h-24   bg-topbare relative">
      <Link href="/">
        <img
          className=" h-4/5  md:h-16 absolute  bottom-5 left-5"
          src="/svg/ecommerce.svg"
        />
      </Link>

      <div className=" absolute   right-5">
        {logedIN ? (
          <div className="grid md:grid-cols-4 grid-rows-1">
            <Link
              href="/LogOut"
              className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
            >
              {name?.value}
            </Link>
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
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-2">
            <Link
              className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
              href="/SignUp"
            >
              Създаите профил
            </Link>
            <Link
              className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500"
              href="/SingIn"
            >
              Влез в профил
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
