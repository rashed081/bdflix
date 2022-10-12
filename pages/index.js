import Catagory from "../components/Catagory";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <div className="m-4 border border-primary">
      <SearchBar />
      <Trending/>
      <Catagory />
      <Trending />
    </div>
  )
}
