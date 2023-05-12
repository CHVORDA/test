import React, { Fragment, Component } from "react";
import data from  '../data/data1.json'
import '../App.css';

const  newdata= data.map( ( data) =>{
  return  (
    
    <div key= {data.id} className="gallery_card">
         <img src = {data.Img} />
    </div> 
  
  )
}
)
export default class GalleryPage extends Component {
    render() {
    return (
      <section className="gallery_image">  {newdata}  </section>
    )
  }
}