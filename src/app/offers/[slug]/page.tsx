'use server'




export default async function Offers( {params}: {params:{slug:string}} ) {

  const  slug  = await params;
let id :string= await slug.slug;
console.log(  id );



  let img;
  let name;
  let description;
  try {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: id })
    };

    const response = await fetch(
      "http://localhost:8080/getById"
    ,requestOptions);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    let data = await response.json();
    data = data.item;
   img = data.img;
    name = data.name;
    description = data.description;
  } catch (error: any) {
    console.error(error.message);
  }

  return (
    <>
      <div className="grid h-screen place-items-center">
        <div className="h-auto w-[380px] lg:h-2/3 lg:w-2/3 bg-amber-100  rounded-2xl lg:relative ">
          <div className=" mt-10 ml-4 w-[350] lg:w-2/5 ">
            <img
              className=" rounded-2xl"
              src={img}
              alt="Sunset in the mountains"
            />
            <div className="text-black">tel:0899123843</div>
          </div>
          <div className="lg:absolute top-1/6 right-0 lg:w-3/6">
            <div className=" m-2 text-black  font-bold  ">{name}</div>
            <div className="text-black font-bold m-2">Take goriq neshto</div>
            <div className="m-2 text-black">{description}</div>
          </div>
        </div>
      </div>
    </>
  );
}
