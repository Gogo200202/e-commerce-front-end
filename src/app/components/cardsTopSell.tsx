import Link from "next/link";
interface item {
  _id: number;
  img: string;
  name: string;
  description: string;
}
export default async function Cards(props: item[]) {
  
  let items=props.data;
 

  return (
    <div>
      <div className=" text-center text-5xl">Най-добри предложения</div>

      <div className="grid h-auto grid-cols-1 lg:grid-cols-3 place-items-center gap-4">
        {items.Items.map((post: item) => (
          <div
            key={post._id}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
          >
            <Link href={`/offers/${post._id}`}>
              <img
                className="w-full"
                src={post.img}
                alt="Sunset in the mountains"
              />
            </Link>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-gray-500">
                {post.name}
              </div>
              <p className="text-gray-700 text-base">{post.description}</p>
            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
}
