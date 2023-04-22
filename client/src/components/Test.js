import React, { useEffect, useState } from "react";
import "./TestDesign.css"
export default function Test(props) {
    const [icon, setIcon] = useState('fas fa-code');
    const [text, setText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  
    return (
      <div className="card-wrap">
        <div className="card-header one">
          <i className={icon}></i>
        </div>
        <div className="card-content">
          <h1 className="card-title">Title</h1>
          <p className="card-text">{text}</p>
          <button className="card-btn one" onClick={() => setIcon('fab fa-react')}>React</button>
        </div>
      </div>
    );
  }
  