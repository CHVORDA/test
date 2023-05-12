import React, { Fragment, Component } from "react";
import data from  '../data/data2.json'
import '../App.css';

const  newdata= data.map( ( data) =>{
  return  (
    
    <div key= {data.id} className="vis_card">
        <h3>{ data.name}</h3>
        <p><a href="#">{data.place}</a></p>
    </div> 
  
  )
}
)

export default class ContactPage extends Component {
    render() {
    return (
      <section className="hero_contact">  {newdata}  </section>
    );
  }
}