import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../media/lunaNoPhoto.png';
import ProfileDataForm from './ProfileDataForm';


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile, follow, unfollow, followingInProgress }) => {
  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  };

  return <div>

    <div className={s.fullName}>
      {profile.fullName}
    </div>

    <div className={s.status}>
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus}
      />
    </div>

    <div className={s.infoUserBlock}>
      <div>
        <img src={profile.photos.large || userPhoto}
          className={s.userPhoto}
          alt=""
        />

        {isOwner &&
          <div>
            <input type={"file"}
              title={"choose a new photo for your avatar"}
              onChange={onMainPhotoSelected}
            />
          </div>
        }
      </div>

      <div className={s.descriptionBlock}>
        {editMode
          ? <ProfileDataForm initialValues={profile}
            profile={profile}
            onSubmit={onSubmit} />

          : <ProfileData profile={profile}
            isOwner={isOwner}
            goToEditMode={() => { setEditMode(true) }} />
        }
      </div>
    </div>
  </div>
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>

    <div>
      <b>Full name</b>: {profile.fullName}
    </div>

    <div>
      <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
    </div>

    {profile.lookingForAJob &&
      <div>
        <b>My professional skills</b>: {profile.lookingForAJobDescription}
      </div>
    }

    <div>
      <b>About me</b>: {profile.aboutMe}
    </div>

    <div>
      <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key}
          contactTitle={key}
          contactValue={profile.contacts[key]}
        />
      })}
    </div>

    {isOwner &&
      <div>
        <button className={s.button_edit}
          onClick={goToEditMode}>
          Edit
        </button>
      </div>
    }

  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>


  // return (
  //   <div>
  //     <div className={profileInfo.content}>
  //       <img className={profileInfo.content__ava}
  //         src={props.slider.ponies[props.slider.currentNumber].ava} />
  //       <div className={profileInfo.info}>
  //         <div className={profileInfo.info__title}>
  //           {props.slider.ponies[props.slider.currentNumber].name}
  //         </div>
  //         <div className={profileInfo.info__text}>
  //           {props.slider.ponies[props.slider.currentNumber].description}
  //         </div>
  //         <div className={profileInfo.info__textArea}>
  //           <textarea placeHolder='What do you want to ask me about?'>
  //           </textarea>
  //         </div>
  //         <button className={profileInfo.info__button}>
  //           Send me a message!
  //         </button>
  //       </div>
  //     </div>

  //     <div className={profileInfo.buttonsSlide}>
  //       <button className={profileInfo.buttonsSlide__bottom}
  //         onClick={() => { props.changePoniesNumber(-1) }}>
  //         <i class="fas fa-arrow-left"></i>
  //       </button>
  //       <button className={profileInfo.buttonsSlide__bottom}
  //         onClick={() => { props.changePoniesNumber(+1) }}>
  //         <i class="fas fa-arrow-right"></i>
  //       </button>
  //     </div>

  //     <div>
  //       <img src={props.profile.photos.large} />
  //     </div>
  //   </div>

  // )
};

export default ProfileInfo;