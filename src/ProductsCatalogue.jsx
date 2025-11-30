import React, { useEffect, useState } from "react";
import properties from "./Properties.json";
import image1 from "../src/TV.png";
import image2 from "../src/image2.png";
import { useNavigate } from "react-router-dom";

function ProductsCatalogue({ addToWishlist,properties }) {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  // Track liked items by their ID
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const shuffled = [...properties].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  }, []);

  const alternatingImage = () => {
    const randomNumber = Math.floor(Math.random() * 20);
    const selectedImage = randomNumber % 2 === 0 ? image1 : image2;

    return (
      <img
        src={selectedImage}
        alt="product"
        className=" h-full object-contain w-4/5"
      />
    );
  };

  const handleLike = (property, e) => {
    e.stopPropagation(); // prevent opening product page
    addToWishlist(property);

    // mark this item as liked
    if (!likedItems.includes(property.id)) {
      setLikedItems([...likedItems, property.id]);
    }
  };

  return (
    <>
      <div className="p-4  mb-10">
        <div className={`flex items-center mb-0 rounded-2xl ${image2 ? 'bg-gray-950' : 'bg-blue-50'}`}>
          <h4 className="text-3xl px-0.5 font-bold text-amber-300">30% OFF</h4>
          {alternatingImage()}
        </div>

        <br />
        <span className=" text-gray-700 font-semibold text-xl rounded text-center mt-0 bg-blue-50 p-1 ">Shop now</span>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((property) => {
            const isLiked = likedItems.includes(property.id); // check if this item is liked

            return (
              <div
                key={property.id}
                className="bg-black shadow-md rounded-xl flex flex-col items-center justify-between p-5 mt-8 relative"
              >
                {/* Heart like button */}
                <button
                  onClick={(e) => handleLike(property, e)}
                  className={`absolute top-0 right-1 text-xl cursor-pointer ${isLiked ? "text-amber-500" : "text-gray-400"}`}
                >
                  <ion-icon name="heart"></ion-icon>
                </button>

                <div 
                  onClick={() => navigate(`/Purchase/${property.id}`)}
                  className="w-full h-36 flex items-center justify-center bg-gray-100 rounded-md"
                >
                  <img
                    src={property.picture}
                    alt={property.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <p className="text-sm font-semibold text-center mt-2 text-white">
                  {property.name} {property.storage}
                </p>

                <p className="text-blue-600 font-bold text-lg mt-1">
                  {property.Price}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsCatalogue;
