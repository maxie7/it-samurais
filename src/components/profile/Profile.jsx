import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./myPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo savePhoto={props.savePhoto}
                   isOwner={props.isOwner}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
