import React, { Component, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddForm = ({ onClickFunction, name }) => {
  // props replaced by

  const [linkName, setLinkName] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [trySend, setTrySend] = useState(false);

  const handleClick = event => {
    event.preventDefault();

    if (linkName.length > 0 && linkUrl.length > 0) {
      // send ONLY when it's filled out
      onClickFunction(linkName, linkUrl);

      setLinkName("");
      setLinkUrl("");
      setTrySend(false);
    } else {
      // indicate that user has tried to send, now how potenial issues on UI
      setTrySend(true);
    }
  };

  const getInputClass = val => {
    let ret = "form-control";
    if (val.length > 0) {
      ret += " is-valid";
    } else if (trySend) {
      // show issues when length is 0 and the user has tried to send
      ret += " is-invalid";
    }
    return ret;
  };

  return (
    <a className="list-group-item  ">
      <form onSubmit={handleClick}>
        <div className="form-row">
          <div className="col-6 col-sm-5 mb-3">
            <input
              value={linkName}
              className={getInputClass(linkName)}
              placeholder="Name"
              onChange={e => setLinkName(e.target.value)}
            />
          </div>
          <div className="col-6 col-sm-5 mb-3">
            <input
              value={linkUrl}
              className={getInputClass(linkUrl)}
              placeholder="URL"
              onChange={e => setLinkUrl(e.target.value)}
            />
          </div>
          <div className="col-12 col-sm-2 ">
            <button className="btn btn-primary">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </form>
    </a>
  );
};

const ListEl = ({ name, link, id, removeClickFunction }) => {

  
  const handleDeleteClick = ( id ) => {
    removeClickFunction( id )
  }


  return (
    <div key={id} className="list-group-item  ">
      <div className="row">
        <div className="col-10">
          <a href={link} target="_blank">
            <h5>{name}</h5>{" "}
          </a>
          <small className="text-muted">{link}</small>
        </div>
        <div className="col-1">
          <button onClick={handleDeleteClick} className="btn btn-danger pull-right">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </div>
  );
};
 
function List(props) {
  const [items, setItems] = useState(props.items);

  // handles
  const addItemHandle = (name, link) => {
    setItems([...items, { name, link }]); // push to the end
  };
 
  // handles
  const removeItemHandle = id => {
    
    setItems( items.splice(0, 1) ); // push to the end
  }; 

  return (
    <div className="list-group">
      {items.map((item, index) => (
        <ListEl
          id={index}
          name={item.name}
          link={item.link}
          removeClickFunction={removeItemHandle}
        />
      ))}

      <AddForm onClickFunction={addItemHandle} name={"Add"} />
    </div>
  );
}

export { List };
