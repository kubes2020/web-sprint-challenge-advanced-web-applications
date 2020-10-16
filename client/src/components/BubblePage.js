import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(()=> {
    axiosWithAuth().get("/colors")
    .then(res => {
      // console.log("colors", res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log("error with colors", err)
    })
  }, [])

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
    <h2>Bubble Page</h2>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
