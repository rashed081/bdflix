import Catagory from "../components/Catagory";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";

export default function Home() {
  return (
    <>
      <SearchBar />
      <Trending />
      <Catagory />
      <Trending />
    </>
  )
}
