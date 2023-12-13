import React from "react";

function MenuItem({ image, name, discription }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> -->{discription} </p>
    </div>
  );
}

export default MenuItem;