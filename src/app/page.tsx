import Topbare from "./components/topbare";
import Searchbare from "./components/searchbare"

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 content-end gap-24">

<Topbare/>
<Searchbare/>
    </div>
   
  );
}
