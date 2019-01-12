import React, {useState} from 'react';

const Country = (props)=>{
    return(
<div className="card col-md-4 mt-2 mb-1" >
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{props.country._source.country}</h5>
    <p className="card-text">Total population of {props.country._source.country} : <b>{props.country._source.population}</b></p>
    <a href="#" className="btn btn-primary">Explore {props.country._source.country}</a>
  </div>
</div>
    )
}

export default Country;