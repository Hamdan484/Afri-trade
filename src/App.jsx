import React, { useState, useEffect } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import Footer from "./assets/Footer";
import Purchase from "./Purchase";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./assets/Contact";
import Cart from "./assets/Cart";
import WhishList from "./assets/WhishList";
import BookMark from "./assets/BookMark";
import properties from "./Properties.json";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const addToCart = (item) => {
    if (!cartItems.find((i) => i.id === item.id))
      setCartItems((prev) => [...prev, item]);
  };

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.find((x) => x.id === item.id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Fast search
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const filtered = properties.filter((item) =>
        item?.name?.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredProperties(filtered);
    }, 300);

    return () => clearTimeout(delaySearch);
  }, [userInput]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter basename="/Afri-trade">
      <div>
        {/* TOP SEARCH BAR */}
        <div className="fixed top-0 left-0 w-full min-h-20 bg-neutral-900 flex items-center justify-center text-2xl mb-20 z-20">
          <ion-icon name="search-outline"></ion-icon>

          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder={` Search on afritrade`}
            className="mt-2 p-1  my-0 m-1 w-7/10 flex text-center gap-2 font-bold bg-black text-2xl py-2 rounded left-0 right-0"
          />

          {/* DROPDOWN MENU */}
          <span className="my-1 flex gap-4 font-bold relative">
            <ion-icon
              name="ellipsis-horizontal-outline"
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer"
            ></ion-icon>

            {menuOpen && (
              <div className="absolute right-0 mt-3 bg-neutral-800 text-white rounded-lg shadow-lg p-3 w-44 z-50">
                <Link
                  to="/Cart"
                  className="block px-2 py-2 text-sm hover:bg-neutral-700 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Cart
                </Link>
                <Link
                  to="/WhishList"
                  className="block px-2 py-2 text-sm hover:bg-neutral-700 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Wishlist
                </Link>
                <Link
                  to="/Contact"
                  className="block px-2 py-2 text-sm hover:bg-neutral-700 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  Account Info
                </Link>
                <Link
                  to="/BookMark"
                  className="block px-2 py-2 text-sm hover:bg-neutral-700 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  
                  Categories
                </Link>
              </div>
            )}
          </span>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <ProductsCatalogue
                addToWishlist={addToWishlist}
                properties={filteredProperties}
              />
            }
          />
          <Route path="/Purchase/:id" element={<Purchase addToCart={addToCart} />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart cartItems={cartItems} />} />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
