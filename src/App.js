import React from 'react';

// function Food(props) {
//   console.log(props);
//   return (
//     <h1>i love {props.fav}</h1>
//   )
// }

function Food({fav}) {

  return (
    <h1>i love {fav}</h1>
  )
}

function App() {
  return (
    <div>
      <h1>hihi</h1>
      <Food
        fav="kimchi"
        somthing={true}
        blahblah={["hello", 1, 2, 2, 3, 4]}></Food>
      <Food fav="beer"></Food>
      <Food fav="coke"></Food>
      <Food fav="cake"></Food>
    </div>
  );
}

export default App;
