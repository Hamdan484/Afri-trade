import React, { useEffect } from "react";

function WhishList({ wishlist, removeFromWishlist }) {

  useEffect(() => {
    localStorage.setItem("storedWishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <div className="mt-24 p-4 mb-20 text-white">
      <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>

      {wishlist.length === 0 && <p>No items in wishlist.</p>}

      <div className="grid grid-cols-2 gap-4">
        {wishlist.map((item) => (
          <div key={item.id} className="bg-black p-4 rounded-xl">
            <img src={item.picture} className="w-full rounded" />
            <p className="mt-2">{item.name} {item.storage}</p>
            <p className="text-blue-500 font-bold">{item.Price}</p>
            <button
              onClick={() => removeFromWishlist(item.id)}
              className="mt-2 bg-red-600 px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhishList;
