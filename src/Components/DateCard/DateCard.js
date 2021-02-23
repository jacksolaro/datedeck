import React, { useState, useEffect } from "react";
import "./DateCard.css";
import database from "../../firebase.js";

function DateCard(props) {
  return (
    <div className="DateCard__Card">
      <h3>{props.cardDetails.questionCategory}</h3>
      <hr></hr>
      <h1>{props.cardDetails.questionText}</h1>
    </div>
  );
}

export default DateCard;
