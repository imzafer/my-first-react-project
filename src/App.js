import { useState } from "react";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import SearchImages from "./api";

function App() {
  const [images, setImage] = useState([]);

  const eventclick = async function (data) {
    const result = await SearchImages(data);

    setImage(result);
  };

  return (
    <div>
      <SearchBar onSubmit={eventclick} />
      <ImageList image={images} />
    </div>
  );
}

export default App;
