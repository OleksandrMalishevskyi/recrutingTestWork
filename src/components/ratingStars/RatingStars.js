import React from 'react'
import './ratingStars.css'

const RatingStars = ({ stars }) => {
  return (
    <div className='form__item'>
      <div className='rating'>
        <div className='rating__body'>
          <div className='rating__active' style={{ width: `${stars * 20}%` }}></div>
          <div className='rating__items'>
            <input type='radio' className='rating__item' value='1' name='rating' />
            <input type='radio' className='rating__item' value='2' name='rating' />
            <input type='radio' className='rating__item' value='3' name='rating' />
            <input type='radio' className='rating__item' value='4' name='rating' />
            <input type='radio' className='rating__item' value='5' name='rating' />
          </div>
        </div>
        <div className='rating__value'><span>{stars}</span></div>
      </div>
    </div>
  )
}

export default RatingStars