import Link from 'next/link'

export default async function Cards() {
  interface item {
    _id: number;
    img: string;
    name: string;
    description: string;
  }
  let data;
 try{
data = await fetch("http://localhost:8080/getAllItems");
 }catch(e:any){
    return<></>
 }
  
  
  const items: any = await data.json();

  return (
    <div>
      <div className=" text-center text-5xl">Най-добри предложения</div>

      <div className="grid h-auto grid-cols-1 lg:grid-cols-3 place-items-center gap-4">
        {items.Items.map((post: item) => (
          <div key={post._id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Link href={`/offers/${post._id}`}>
            <img className="w-full" src={post.img} alt="Sunset in the mountains" />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500">
                {post.name}
              </div>
              <p className="text-gray-700 text-base">
                {post.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
