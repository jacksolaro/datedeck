import React, { useState, useEffect } from "react";
import DateCard from "../../Components/DateCard/DateCard";
import database from "../../firebase.js";
import "./Home.css";

function Home() {
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
    <div className="Home__Container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <DateCard cardDetails={cards[cardIndex]}></DateCard>
      )}
      <div className="Home__Buttons">
        <button className="Next__Button" onClick={handleClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Home;
