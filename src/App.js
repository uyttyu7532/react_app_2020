import React from 'react';

function renderBags(bags){
return <a href={bags.url}>{bags.name}</a>
}



const bags = [
  {
    name:"F41 HAWAII FIVE-O",
    url:"https://www.freitag.ch/en/f41"
  },
  {
    name:"F153 JAMIE",
    url:"https://www.freitag.ch/en/f153"
  },
  {
    name:"F11 LASSIE",
    url:"https://www.freitag.ch/en/f11"
  }
]

function App() {
  return <div>
    {bags.map(renderBags)}
    </div>
}
export default App;