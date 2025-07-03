
import { getJwt } from "../_actions/cookie";
import CardSearch from "../components/cardsSearch";
import Footer from "../components/footer";
import Topbare from "../components/topbare";
export default async function myLikedProducts() {
  class item {
    _id: string;
    img: string;
    name: string;
    description: string;
    price: string;
    constructor(
      Id: string,
      Img: string,
      Name: string,
      Description: string,
      Price: string
    ) {
      this._id = Id;
      this.img = Img;
      this.name = Name;
      this.description = Description;
      this.price = Price;
    }
  }

  let jwt = await getJwt();
  let response = await fetch("http://localhost:8080/user/AllLikedItemFrom", {
    method: "GET",

    headers: {
      gfg_token_header_key: jwt?.value,
    },
  });

  const data = await response.json();

  let items = [];
  for (let index = 0; index < data.likedProducts.length; index++) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: data.likedProducts[index] }),
    };

    const response = await fetch(
      "http://localhost:8080/getById",
      requestOptions
    );

    let dataNew = await response.json();

    if (dataNew.item != null) {
      let currentItems = new item(
        dataNew.item._id,
        dataNew.item.img,
        dataNew.item.name,
        dataNew.item.description,
        dataNew.item.price
      );

      items.push(currentItems);
    }
  }

  return (
    <>
      <Topbare />
      <h2 className="text-2xl font-bold tracking-tight text-white">
        Харесани продукти
      </h2>

      <CardSearch data={JSON.stringify(items)} />
      <Footer></Footer>
    </>
  );
}
