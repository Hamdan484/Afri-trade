import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer fixed bottom-0 mb-0 left-0 w-full  flex justify-around text-2xl font-semibold bg-black p-3 rounded-2xl ">
      <Link to="/BookMark">
        <span className="active:bg-amber-300 rounded p-1">
         <ion-icon name="grid-outline"></ion-icon>
        </span>
      </Link>
      <Link to="/Cart">
        <span className="active:bg-amber-300 rounded p-1">
          <ion-icon name="cart-outline"></ion-icon>
        </span>
      </Link>
      <Link to="/">
        <span className="active:bg-amber-300 rounded p-1">
          <ion-icon name="home-outline"></ion-icon>
        </span>
      </Link>
      <Link to="/WhishList">
        <span className="active:bg-amber-300 rounded p-1">
          <ion-icon name="heart-outline"></ion-icon>
        </span>
      </Link>
      <Link to="/Contact">
        <span className="active:bg-amber-300 rounded p-1">
          <ion-icon name="person-outline"></ion-icon>
        </span>
      </Link>
    </div>
  );
}

export default Footer;
