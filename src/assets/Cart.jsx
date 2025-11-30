import React from "react";

function Cart({ cartItems = [] }) {
  // helper to parse price strings like "$12.50" or "12.50" or "GHS 12"
  const parsePrice = (p) => {
    if (p == null) return 0;
    const str = String(p);
    const match = str.replace(/,/g, "").match(/-?\d+(\.\d+)?/); // first number
    if (!match) return 0;
    const num = parseFloat(match[0]);
    return isNaN(num) ? 0 : num;
  };

  const total = cartItems.reduce((sum, item) => sum + parsePrice(item.Price), 0);

  return (
    <div className="mt-20 text-1.5xl p-1 font-serif mx-0.5 gap-1.5 flex flex-col mb-20">
      <h2>Cart Summary</h2>
      <hr />

      <div className="flex justify-between">
        subtotal <span>{cartItems.length} items</span>
      </div>
      <hr />

      <span className="text-amber-300">afri-trade </span> items are eligible for free delivery

      <div>
        <span>Cart : {cartItems.length}</span> <br />

        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="py-1">
              <li>
             <img src={item.picture} alt="" className="max-w-40 max-h-50" /> 
              {item.name} <br />
               {item.Price}
               </li>
               <hr />
            </div>
            
          ))}
        </div>
      </div>

      <div className="my-4">
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="gap-2 flex">
        <a href="tel:+233597788861"><button className="bg-amber-300 rounded text-white px-7 py-2">
          <ion-icon name="call-sharp"></ion-icon>
        </button>
        </a>
        <button className="bg-amber-600 rounded text-white px-7 py-2">
          Checkout Price ({total.toFixed(2)})
        </button>
      </div>
    </div>
  );
}

export default Cart;
