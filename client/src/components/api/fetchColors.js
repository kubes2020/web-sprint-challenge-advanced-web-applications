import {axiosWithAuth} from "../../utils/axiosWithAuth";

export const fetchColors = () =>{
    return (axiosWithAuth().get("/colors")
    .then(res => {
      // console.log("colors", res.data)
      return res
    })
    )
    .catch(err => {
      console.log("error with colors", err)
    })
  }