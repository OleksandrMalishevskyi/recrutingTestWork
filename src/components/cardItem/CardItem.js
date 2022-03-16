import React from 'react'
import RatingStars from '../ratingStars/RatingStars';
import './carditem.css'
const CardItem = ({ cards }) => {
  return (
    <>
      {cards.map(card => (
        <div className="card" key={card.id}>
          <div className="card__row">
            <div className="card__column">
              <div className="card-preview"  >
                <div className="card-image">
                  <img src={card.img} />
                </div>
                <div className="card-content">
                  <div className='wrapper_descr'><p><span>{card.countr}</span> Contry, <span>{card.days}</span> Days</p></div>
                  <h2 className='card_title'>{card.title}</h2>
                  <div className='stars'><RatingStars stars={card.stars} /></div>
                <div className='wrapper_price'><p>From {card.price}$<span>Price {card.price2}$</span></p></div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardItem