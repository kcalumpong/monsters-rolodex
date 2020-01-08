import React from "react";
import "./style.css";


const CardList = (props) => (
        <div className="card-list">
          {props.children}
        </div>
)


export default CardList;