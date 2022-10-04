import React from 'react';
import s from './Post.module.css';
import image from '../../../../media/rarityAva.png';

const Post = ({message, likesCount}) => {

  return (
    <div className={s.item}>
      <img src={image} alt=""/>
      {message}
      <div>
        <span>
          <button className={s.button}>
            Like
          </button>
        </span>
        {likesCount}
      </div>
    </div>
  ) 
};

export default Post;