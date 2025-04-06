import Topbare from "./components/topbare";
import Searchbare from "./components/searchbare"
import Cards from "./components/cards";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 content-end gap-24 w-full ">

<Topbare/>
<Searchbare/>
<Cards/>
<Footer/>
    </div>
   
  );
}
