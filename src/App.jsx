import React from "react";
import FooterInit from "./Components/Footer/FooterInit";
import Gallery from "./Components/Gallery/Gallery";
import Navbar from "./Components/Navigation/Navbar";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  return (
    <div>
      <Navbar />
      <SimpleReactLightbox>
        <Gallery />
      </SimpleReactLightbox>
      <div style={{ height: "17rem" }}></div>
      <FooterInit />
    </div>
  );
}

export default App;
