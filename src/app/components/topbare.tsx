export default function Topbare() {
    return (
      <div className="h-24  bg-topbare relative">
       
          <img
            className="h-16 absolute  bottom-5 left-5"
            src="/svg/ecommerce.svg"
            alt="Follow us on Twitter"
          />
       <div className="absolute top-5  right-5 grid grid-cols-2 grid-rows-2 ">
       <div className="h-10 w-40 border-t-8 border-(--color-topbare)" >Създаите профил</div> 
       <div className="h-10 w-40 border-t-8 border-(--color-whiteSearchBar)  rounded-md bg-whiteSearchBar   text-black text-center  ">Добави обява </div>      
       </div>
      
  
        
      </div>
    );
  }
  