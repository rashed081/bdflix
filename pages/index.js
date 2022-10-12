import Catagories from "../components/Catagories";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div className="m-4">
      <SearchBar />
      <Trending/>
      <Catagories />
      
    </div>
  )
}
