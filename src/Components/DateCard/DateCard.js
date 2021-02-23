import React, { useState, useEffect } from "react";
import "./DateCard.css";
import database from "../../firebase.js";

function DateCard() {
  const [cards, setCards] = useState([]);
  const [cardIndex, setCardIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  //   Piece of code which runs based on a condition
  useEffect(() => {
    const unsubscribe = database
      .collection("cardDeck")
      .onSnapshot((snapshot) => {
        setCards(snapshot.docs.map((doc) => doc.data()));
        setLoading(false);
      });
    console.log("Data", cards);

    return () => {
      //   This is the clean up
      unsubscribe();
    };
  }, []);

  const handleClick = () => {
    if (cardIndex >= cards.length - 1) {
      setCardIndex(0);
    } else {
      setCardIndex(cardIndex + 1);
    }
    console.log(cardIndex);
  };

  return (
    <div className="DateCard__Card">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <h1>{cards[cardIndex].questionCategory}</h1>
          <hr></hr>
          <h2>{cards[cardIndex].questionText}</h2>
          <button onClick={handleClick}>Next</button>
        </>
      )}
    </div>
  );
}

export default DateCard;
