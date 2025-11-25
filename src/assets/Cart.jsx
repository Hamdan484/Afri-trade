import React from "react";

function Cart() {
  return (
    <div className="mt-20 text-1.5xl p-1 font-serif mx-0.5 gap-1.5 flex flex-col mb-20">
      <h2>Cart Summary</h2> 
      <hr />
      <div className="flex justify-between">subtotal <span> $ total </span><br /></div>
      <hr />
      <span className="text-amber-300">afri-trade </span> items are eligible for free delivery
      <div>
        <span>Cart numInCart</span> <br />
        <div>
          properties <br />
          <span className="flex justify-between">
            
            Remove <span> <button>-</button> currentNum <button>+</button></span>
          </span>
        </div>
      </div>
      <div className="gap-2 flex">
        
        <button className="bg-amber-300 rounded text-white px-7 py-2 text-center gap-1.5 border-white border-2">
          <ion-icon name="call-sharp"></ion-icon>
        </button>
        <button className="bg-amber-600 rounded text-white px-7 py-2 text-center gap-1.5 border-white border-2">Checkout Price</button>
      </div>
    </div>
  );
}

export default Cart;
