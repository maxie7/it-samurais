import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img alt='' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fjamescameronsavatar%2Fimages%2Ff%2Ffe%2FTypical_tsu%2527tey%2528mad_attitude%2529.jpg%2Frevision%2Flatest%3Fcb%3D20110624105006&f=1&nofb=1' />
      {props.message}
      <div>
        <span>like</span><br />
        <span>{props.likes}</span>
      </div>
    </div>
  )
}

export default Post;