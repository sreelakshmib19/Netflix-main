import React from 'react'
import "./Errorpage.css";

function Errorpage(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>
            {props.msg}
        </p>
    </div>
  );
}

export default Errorpage