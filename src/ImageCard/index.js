import React from "react";
import "./style.css"
const ImageCard = props => {
  return (
    <div className="card border-primary">
      <img className="card-img-top" src={require("../../public/images/" + props.image)} alt="" />
    </div>
  );
};

export default ImageCard;
