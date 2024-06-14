import React from "react";
import classes from "./MeetUpDetail.module.css";

function MeetUpDetail({ title, image, description }) {
  return (
    <div className={classes.detail}>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default MeetUpDetail;
