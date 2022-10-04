import React from 'react';
import s from './News.module.css';
import image from '../../media/rainbowStares.png';

const News = (props) => {
  return (
    <div>
      <div className={s.mainTitle}>
        You're subscribed to so... weird publics, dude
        <div className={s.content}>
          <img src={image} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default News;