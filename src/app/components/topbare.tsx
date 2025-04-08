import Link from "next/link"

export default function Topbare() {
    return (
      <div className="h-24  bg-topbare relative">
       
          <img
            className="h-16 absolute  bottom-5 left-5"
            src="/svg/ecommerce.svg"
            alt="Follow us on Twitter"
          />
       <div className="absolute top-5  right-5 grid grid-cols-2 grid-rows-2 ">
       <Link className="h-10 w-40 border-t-8 border-(--color-topbare) hover:text-gray-500" href="/SignUp" >Създаите профил</Link> 
       <Link className="h-10 w-40 border-t-8 border-(--color-whiteSearchBar)  rounded-md bg-whiteSearchBar   text-black text-center  hover:text-white " href="/AddProduct">Добави обява </Link>      
       </div>
      
  
        
      </div>
    );
  }
  