import React from "react";
// import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends React.Component{

  // code here
  render(){

    let image_arr = this.props.imageData()
    console.log(image_arr)

    return(
      <div>
         <h1 className="text">Kalvium gallery</h1>
         {/* <div className="flex">
           <img src={image_arr[0].img} alt="" />
           <img src={image_arr[1].img} alt="" />
           <img src={image_arr[2].img} alt="" />
           <img src={image_arr[3].img} alt="" />
         </div> */}
 
         <div className="flex">
           {
            image_arr.map(elem=>{
            return(
             <img src={elem.img} alt="image" />
              )
            })
           }
         </div>
      </div>
     
   )
  }
}