import React, { useState } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import Footer from "./assets/Footer";
import Purchase from "./Purchase";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./assets/Contact";
import Cart from "./assets/Cart";
import WhishList from "./assets/WhishList";
import BookMark from "./assets/BookMark";

function App() {

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.find((x) => x.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div>
        <>
          <div className="fixed top-0 left-0 w-full min-h-20 bg-neutral-900 flex items-center justify-center text-2xl mb-20 z-20">
            <ion-icon name="search-outline"></ion-icon>

            <input
              type="text"
              placeholder={` Search on afritrade`}
              className=" mt-2 p-1  my-0 m-1 w-7/10 flex text-center gap-2 font-bold  bg-black text-2xl py-2 rounded left-0 right-0"
            />

            <span className="my-1 flex gap-4 font-bold">
             <Link to="/Cart"><ion-icon name="cart-outline"></ion-icon>  </Link>
              <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
            </span>
          
           
          </div>

          <Routes>
            <Route
              path="/"
              element={<ProductsCatalogue addToWishlist={addToWishlist} />}
            />

            <Route path="/Purchase/:id" element={<Purchase />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />

            <Route
              path="/WhishList"
              element={
                <WhishList
                  wishlist={wishlist}
                  removeFromWishlist={removeFromWishlist}
                />
              }
            />

            <Route path="/BookMark" element={<BookMark />} />
          </Routes>

          <Footer />
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
