import { useEffect, useState } from "react";
import CardItem from "../cardItem/CardItem"
import "./cardList.css"

const CardList = () => {
  const [cards, setCards] = useState(null)

  useEffect(async () => {
     await fetch('http://localhost:7777/cards')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setCards(data);
      })
  }, [])

  return (
    <div className="cardList">
      {cards && <CardItem cards={cards} />}
    </div>
  );
}
 
export default CardList;