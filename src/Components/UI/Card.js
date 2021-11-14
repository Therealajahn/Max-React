import React from "react";
import cardStyle from "./Card.module.css";

const Card = (props) => {
  return (
    // by using a CSS module I can generate a two unique classNames like so:
    //combine a class from outside(props)with one from inside the component
    <div className={`${props.className} ${cardStyle.card}`}>
      {/* render the child of Card */}
      {props.children}
    </div>
  );
};

export default Card;
