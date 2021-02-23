import React, { useState, useEffect } from "react";
import "./DateCard.css";
import database from "../../firebase.js";

function DateCard(props) {
  return (
    <div className="DateCard__Card">
      <h1>{props.cardDetails.questionCategory}</h1>
      <hr></hr>
      <h2>{props.cardDetails.questionText}</h2>
    </div>
  );
}

export default DateCard;
