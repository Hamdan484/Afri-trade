import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="mt-20 mb-20 font-serif mx-0.5">
      <div>
        <span >
        
          <h1 className="text-2xl">Welcome</h1>
          <br />
          Enter your account <br />
        </span>
        <div className="gap-2 flex">
        <button className="bg-amber-300 rounded text-white px-7 py-2 text-center gap-1.5 text-2xl">Login</button>
        <span className="bg-white text-green-500 rounded border-2 px-7 py-2 text-center gap-1.5 justify-center text-2xl">
          <ion-icon name="log-in-outline"></ion-icon>
        </span>
        </div>
        <br /> Login to see your balance
      </div>
      <div className="gap-2 flex">
        <div>
          <button className="bg-amber-300 rounded text-2xl text-white px-7 py-2">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon> Live chat
          </button>{" "}
          <button className="bg-white rounded text-2xl text-green-500 border-2 px-7 py-2">
            {" "}
            <ion-icon name="logo-whatsapp"></ion-icon> WhatApp
          </button>
        </div> 
       
      </div>
      <div className="flex gap-y-1.5  font-medium flex-col text-white text-2xl">
         Need Assistance? <hr />
        <ion-icon name="alert-outline"></ion-icon> 
        <a href="#"> Help and Support
        My afritrade account</a> <hr />
        <span >
          {" "}
          <ion-icon name="briefcase-outline"></ion-icon> Orders{" "}
        </span>
        <br />
        <span>
          <ion-icon name="mail-open-outline"></ion-icon> inbox
        </span>
        <br />
        <span>
          <ion-icon name="pulse-outline"></ion-icon> Ratings and review
        </span>{" "}
        <br />
        <span>
          <ion-icon name="ticket-outline"></ion-icon> vouchers
        </span>
        <br />
        <span>
          <ion-icon name="heart-outline"></ion-icon> Wishlist
        </span>
        <br />
        <span>
          <ion-icon name="storefront-outline"></ion-icon> Follow seller
        </span>
        <br />
        <span>
          <ion-icon name="search-circle-outline"></ion-icon> Recently searched
        </span>
        <br />
      </div>
      <div className="text-white text-2xl">
        My settings <hr />
        <span>Payment settings</span>
        <span> Address Block</span>
      </div>
    </div>
  );
}

export default Contact;
