import React from 'react';
import s from './Settings.module.css';
import image from '../../media/MacLies.png'

const Settings = (props) => {
  return (
    <div>
      <div className={s.mainTitle}>
      Settings? What're the settings? Today's ma day-off!
        <div className={s.content}>
            <img src={image} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Settings;