import React, { Fragment, Component } from "react";
import data from  '../data/data.json'
import '../App.css';

const  newdata= data.map( ( data) =>{
    return  (
      
      <div key= {data.id} className="card">
          <h3>{ data.name}</h3>
          <p>{data.desc}</p>
           <img src = {data.url} />
      </div> 
    
    )
  }
)

export default class IndexPage extends Component {
    render() {
        return (
            <section className="hero_section">  {newdata}  </section>
           
        )
  }

}
