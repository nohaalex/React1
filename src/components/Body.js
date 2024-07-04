import React from 'react'

function Body() {
  const car=["AUDI","BMW","JAGUAR"];
  const [german,bavarian,european] = car;
  const admin=true;
  const answer=admin?"Hello":"bye";
  const [...mycar]=car
  return (
    <div>
      {/* <ul>
        <li>ABOUT</li>
        <li>CONTENT</li>
      </ul> */}

    <p>{german} is German</p>
    <p>{bavarian} is Bavarian</p>
    <p>{european} is English</p>
    <p>{answer}</p>
  
    </div>
  )
}

export default Body
