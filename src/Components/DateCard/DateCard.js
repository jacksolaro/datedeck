import React, { useState, useEffect } from "react";
import "./DateCard.css";
import database from "../../firebase.js";

function DateCard() {
  const [cards, setCards] = useState([]);

  //   Piece of code which runs based on a condition
  useEffect(() => {
    const unsubscribe = database
      .collection("cards")
      .onSnapshot((snapshot) =>
        setCards(snapshot.docs.map((doc) => doc.data()))
      );
    console.log("Data", cards);

    return () => {
      //   This is the clean up
      unsubscribe();
    };
  }, []);

  const handleClick = () => {
    console.log("Click!");
  };

  return (
    <div className="DateCard__Card">
      <h1>{cards[0].questionCategory}</h1>
      <hr></hr>
      <h2>{cards[0].questionText}</h2>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default DateCard;
