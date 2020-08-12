import React from 'react';
import PropTypes from "prop-types"

function FREITAG({name, url, rating}){
return (
<div>
<h3>{rating}</h3>
<a href={url}>{name}</a>
</div>);
}

FREITAG.propTypes = {
  name:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  rating:PropTypes.number.isRequired
}



const bags = [
  {
    id:1,
    name:"F41 HAWAII FIVE-O",
    url:"https://www.freitag.ch/en/f41",
    rating:5
  },
  {
    id:2,
    name:"F153 JAMIE",
    url:"https://www.freitag.ch/en/f153",
    rating:4
  },
  {
    id:3,
    name:"F11 LASSIE",
    url:"https://www.freitag.ch/en/f11",
    rating:3
  }
]

function App() {
  return <div>
    {bags.map(bag => <FREITAG key={bag.id} name={bag.name} url={bag.url} rating={bag.rating}/>)}
    </div>
}
export default App;