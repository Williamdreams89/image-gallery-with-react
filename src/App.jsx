import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const images = [
    { id: "1", imageName: "1.jpg", tag: "self" },
    { id: "2", imageName: "2.jpg", tag: "self" },
    { id: "3", imageName: "3.jpg", tag: "self" },
    { id: "4", imageName: "4.jpg", tag: "self" },
    { id: "5", imageName: "5.jpg", tag: "self" },
    { id: "6", imageName: "6.jpg", tag: "self" },
    { id: "7", imageName: "7.jpg", tag: "self" },
    { id: "8", imageName: "8.jpg", tag: "self" },
    { id: "9", imageName: "9.jpg", tag: "self" },
    { id: "10", imageName: "10.jpg", tag: "mom" },
    { id: "11", imageName: "11.jpg", tag: "friends" },
    { id: "12", imageName: "12.jpg", tag: "friends" },
    { id: "13", imageName: "13.jpg", tag: "self" },
    { id: "14", imageName: "14.jpg", tag: "friends" },
  ];

  const [tag, setTag] = useState("mom");
  const [filteredImages, setFilteredImages] = useState([]);

  /* The useEffect hook serves as the side-effect of the 
  filteredImages that monitors changes in the tag's state
  which is currently set to "all". if there's a change to "all",
  this will invoke the setFilteredImage function to store all
  available images in the filteredImages' array. However, 
  if the tag changes to something other than "all", the
  setFilteredImage function will devise a means to filter the 
  'images' array by 'tag', this would filter and store the images
  to that particular tag 


  */
  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images)
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  const TagButton =({name, setTag})=>{
    return(
      <button onClick={()=>setTag(name)}>{name.toUpperCase()}</button>
    )
  };

  return (
    <div className="App">
      <div>
        <div className="buttons__display">
          <TagButton name="all" setTag={setTag} />
          <TagButton name="mom" setTag={setTag} />
          <TagButton name="friends" setTag={setTag} />
          <TagButton name="quotes" setTag={setTag} />
        </div>
        {filteredImages.map((image) => (
          <div>{image.tag}</div>
        ))} 
      </div>
    </div>
  );
}

export default App;
