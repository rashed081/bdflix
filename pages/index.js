import Catagories from "../components/Catagories";
import NewReleased from "../components/NewReleased";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";


export default function Home() {
  return (
    <div >
      <SearchBar />
      <Trending />
      <Catagories />
      <NewReleased/>
    </div>
  )
}
