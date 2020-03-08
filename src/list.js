import React, { Component, useState } from "react";

function ButtonL(props) {
  const handleClick = () => {

    console.log( linkName.current.value )
    props.onClickFunction("test", "test2");
  };

  let linkName = React.createRef();

  return (
    <a className="list-group-item  ">
      <input ref={linkName} />
      <button onClick={handleClick}>{props.name}</button>
    </a>
  );
}

function List(props) {
  const [items, setItems] = useState(props.items);

  // handles
  const addItemHandke = (name, link) => {
    items.push({ name, link });
    setItems(items);
  };

  return (
    <div class="list-group">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className="list-group-item  "
        >
          <h5>{item.name}</h5>
          <small className="text-muted">{item.link}</small>
        </a>
      ))}
      <ButtonL onClickFunction={addItemHandke} name={"Add"} />
    </div>
  );
}

export { List };
