import React, { useState } from "react";
import properties from "./Properties.json";
import { Link, useNavigate, useParams } from "react-router-dom";

function Purchase(addToCart) {
const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [itemsInCart, setitemsInCart] = useState([]);

  const handleItemsInCart = (property, e) => {
    e.stopPropagation(); // prevent opening product page
    addToCart(property);

    // mark this item as liked
    if (!itemsInCart.includes(property.id)) {
      setitemsInCart([...likedItems, property.id]);
    }
  };





   const orderDay = new Date().toLocaleDateString();
    const today = new Date();
    const duration=today.getDate()
    const pickUpDate = `${duration +5}/${today.getMonth() + 1}/${today.getFullYear()}`;
  
 const {id}=useParams()
 const product=properties.find(item=>item.id==id)
 if (!product) return <h2>product not found</h2>
  return (
    <div className="bg-gray-500 text-black mt-20 mb-20 p-1 ">
       
      <h2 className="text-2xl bg-white">Details</h2>
      <img src={product.picture} alt="" className="max-w-50 max-h-50 p-2 m-1" />
      <div>
        <span className="bg-blue-950 text-white p-0.5 rounded">
          Official store
        </span>{" "}
        <span className="bg-black text-white p-0.5 rounded">
          Black Friday deal
        </span>
        <br />
        {product.name}
        <br />
        {product.family} <br />
        <div>
          <table className="table-auto py-1 w-4/5">
            <thead>
              <tr className="bg-red-500 text-white ">
                <th>Flash sales</th>
                <th>Time left</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{product.Price}</td>
              </tr>
            </tbody>
          </table>
          <div >
            <div className="flex gap-5 text-2xl">
              <span className=" text-amber-500">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              <ion-icon name="star-outline"></ion-icon>
              </span>
              
              <span>
                <ion-icon name="share-social-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5 className="bg-white">Promotions</h5>
        <hr />
        <div  className="bg-white text-blue-800 text-left justify-center my-2">
        <div>
         <span className="text-amber-500 text-2xl text-center"><ion-icon name="car-sport-outline"></ion-icon></span> Enjoy cheaper delivery
          fees when you select a pickup station at checkout
        </div>
        <br />
        <div>
         <span className="text-amber-500 text-2xl text-center"> <ion-icon name="send-outline"></ion-icon></span> Free delivery in Accra and
          Kumasi for orders above $15. Pick-up stations only
        </div>
        <br />
        <div>
          <span className="text-amber-500 text-2xl text-center"><ion-icon name="star-outline"></ion-icon></span> Need advice or assistance to
          place order? contact us at +233 597788861
        </div>
        </div>
      </div>
      <div className="bg-white font-extralight">
        <span className="my-1">Delivery and returns Info</span>
        <hr className="my-1"/>
     <span className="text-yellow-500 font-serif">   Afri-Trade </span>
        Enjoy fast delivery in main cities
        
        <h3>Choose Location</h3>
        <select className="w-3/5 outline-1">
        <option className="w-1/2">Accra</option>
        <option>Kumasi</option>
        <option>Tema</option>
        <option>Cape Coast</option>
        <option>Tamale</option>
        <option>Damongo</option>
        <option>Takoradi</option>
        <option>Winneba</option>
        <option>WA</option>
        <option>Wale Wale</option>
        <option>Sefwi</option>
        <option>Bolga</option>
        <option>Keta</option>
        </select>
        <div className=" ">
          <div>
         <span className="text-2xl">   <ion-icon name="airplane-outline"></ion-icon>{" "}</span>
            <span>Pick-up station</span>
            <br /> <span>Free delivery</span>{" "}
          </div>
          ready for pickup between {orderDay} and {pickUpDate}
        </div>
        <div>
         <span className="text-2xl"> <ion-icon name="walk-outline"></ion-icon></span> <span>Door delivery</span>
          <br /> <span className="mx-1"> delivery fees</span> 
           ready for pickup between {orderDay} and {pickUpDate}
        </div>
        <div>
          <span className="text-2xl"><ion-icon name="repeat-outline"></ion-icon></span>
          <span>Return policy</span>
        </div>
      </div>
      <div className="bg-white text-2xl flex gap-5" >
        <Link to="/BookMark"><button className=" text-amber-500 outline m-1 p-1 rounded">
          <ion-icon name="home-outline"></ion-icon>
        </button>
         </Link>
       
       <a href="tel:+233597788861"> <button className=" text-amber-500 outline m-1 p-1 rounded">
          <ion-icon name="call-outline"></ion-icon>
         
        </button ></a>
        
        <button className={` bg-amber-500 text-white flex   items-center  m-1 p-1 rounded`}>
          <ion-icon name="cart-outline"></ion-icon> Add to cart
        </button>
      </div>
    </div>
  );
}

export default Purchase;
