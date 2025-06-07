import Topbare from "./components/topbare";
import Searchbare from "./components/searchbare";
import Cards from "./components/cards";
import Footer from "./components/footer";

export default async function Home() {
  let frontPageCards;
  try {
    frontPageCards = await fetch("http://localhost:8080/getAllItems");
  } catch (e: any) {
    return <></>;
  }

  const items: any = await frontPageCards.json();

  return (
    <div className="grid grid-cols-1 grid-rows-1 content-end gap-24 w-full ">
      <Topbare />
      <Searchbare />
      <Cards data={items} />
      <Footer />
    </div>
  );
}
