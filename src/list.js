import React, { Component, useState } from "react";

function ButtonL(props) {
  const handleClick = () => {

    const name =  linkName.current.value
    props.onClickFunction( name, "test2");
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
  const [value, setValue] = useState('x');

  // handles
  const addItemHandke = (name, link) => {
    items.push({ name, link });
    setItems(items);
    setValue(name); // this.forceUpdate()
  };

  return (
    <div class="list-group">
      <b>{value}</b>
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
