import React from 'react';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  debugger
  return <div>
    <ProfileInfo
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
      saveProfile={props.saveProfile}
    />
    {/* //slider={props.slider}
      //changePoniesNumber={props.changePoniesNumber}
      /> */}

    <MyPostsContainer />
  </div>
};

export default Profile;

