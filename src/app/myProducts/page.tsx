import { getJwt, getName } from "../_actions/cookie";
import CardSearch from "../components/cardsSearch";
export default async function MyProducts() {
  class item {
    _id: string;
    img: string;
    name: string;
    description: string;
    constructor(Id: string, Img: string, Name: string, Description: string) {
      this._id = Id;
      this.img = Img;
      this.name = Name;
      this.description = Description;
    }
  }

  let jwt = await getJwt();
  let response = await fetch("http://localhost:8080/user/getItems", {
    method: "GET",

    headers: {
      gfg_token_header_key: jwt?.value,
    },
  });

  const data = await response.json();

  let items = [];
  for (let index = 0; index < data.publishedProducts.length; index++) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: data.publishedProducts[index] }),
    };

    const response = await fetch(
      "http://localhost:8080/getById",
      requestOptions
    );
    let dataNew = await response.json();

    console.log(dataNew.item.name);

    let currentItems = new item(
      dataNew.item._id,
      dataNew.item.img,
      dataNew.item.name,
      dataNew.item.description
    );
    console.log(dataNew.item._id);
    items.push(currentItems);
  }
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Customers products
      </h2>

      <CardSearch data={items} />
    </>
  );
}
