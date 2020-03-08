import React, { Component, useState } from "react";

function Button(props) {

  const handleClick = () => props.onClickFunction(props.increment) 
  return( 
    <button onClick={ handleClick }>
      +{props.increment}
    </button>
  );
}

function Display(props) {
  return <div> {props.message} </div>;
}

function Counter() {

  // busimess logic
  const [counter, setCounter] = useState(40);

  // handles
  const incrementCounter = (incrementValue) => {
    setCounter(counter + incrementValue)
    };

  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1} />
      <Button onClickFunction={incrementCounter} increment={5} />
      <Button onClickFunction={incrementCounter} increment={10} />
      <Button onClickFunction={incrementCounter} increment={25} />
      <Display message={counter} />
    </div>
  );
}

export  { Counter };