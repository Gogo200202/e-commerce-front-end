import Link from "next/link";
import { it } from "node:test";
interface item {
  _id: number;
  img: string;
  name: string;
  description: string;
  price:string;
}
export default async function CardSearch(props: item[]) {
  let items = props.data;

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {items.map((post: item) => (
            <Link key={post._id} href={`/offers/${post._id}`}>
              <div className="group relative">
                <img
                  src={post.img}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />

                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {post.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Black</p>
                  </div>
                  <p className="text-sm font-medium text-white-900">${post.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
