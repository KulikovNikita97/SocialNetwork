import React from 'react';
import s from './Music.module.css';
import image from '../../media/vinylLies.png';
import audioBach from '../../media/bach1.mp3'
import audioBowie1 from '../../media/bowie1.mp3';
import audioBowie2 from '../../media/bowie2.mp3';
import audioQueen1 from '../../media/queen1.mp3';
import audioQueen2 from '../../media/queen2.mp3';

const Music = (props) => {
  return (
    <div>
      <div className={s.mainTitle}>
        Let me be surprised your musical preferences
        <div className={s.content}>
          <img src={image} alt=""/>
        </div>
      </div>
      <div className={s.audioName}>
        <p>Bach. Cello suite 1 G-dur</p>
        <audio controls="controls" src={audioBach} />
        <p>Bowie. "Where Are We Now"</p>
        <audio controls="controls" src={audioBowie1} />
        <p>Bowie. "Young Americans"</p>
        <audio controls="controls" src={audioBowie2} />
        <p>Queen. "One Year Of Love"</p>
        <audio controls="controls" src={audioQueen1} />
        <p>Queen. "Sleeping On The Sidewalk"</p>
        <audio controls="controls" src={audioQueen2} />
      </div>
    </div>

  )
}

export default Music;