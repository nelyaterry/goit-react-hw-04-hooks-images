import React, { useState } from "react";
import Searchbar from "../Searchbar/Searchbar";
import ImageGallery from "../ImageGallery/ImageGallery";

const App = () => {
  const [request, setRequest] = useState("");

  const hendelFormSubmit = (request) => {
    setRequest(request);
  };

  return (
    <>
      <Searchbar onSubmit={hendelFormSubmit} />
      <ImageGallery request={request} />
    </>
  );
};

export default App;
