import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [forceUpdate, setForceUpdate] = useState(false)
  const [colorList, setColorList] = useState([]);

  const getColors = () =>{
    axiosWithAuth().get("/colors")
    .then(res => {
      // console.log("colors", res.data)
      setColorList(res.data)
    })
    .catch(err => {
      console.log("error with colors", err)
    })
  }


  useEffect(() => {
    getColors()
    setForceUpdate(false)
  },[forceUpdate === true])


  // useEffect(()=> {
  //   axiosWithAuth().get("/colors")
  //   .then(res => {
  //     // console.log("colors", res.data)
  //     setColorList(res.data)
  //   })
  //   .catch(err => {
  //     console.log("error with colors", err)
  //   })
  // }, [])

  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setForceUpdate={setForceUpdate}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
