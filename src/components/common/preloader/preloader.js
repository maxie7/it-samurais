import React from "react";
import preloader from "../../../assets/img/spinner.svg";

let Preloader = () => {
  return <div style={ {backgroundColor: 'white' } }>
    <img src={preloader} alt='' />
  </div>
}

export default Preloader;
