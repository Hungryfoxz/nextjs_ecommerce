import React from "react";
import AppContext from "./AppContext";
var jwt = require("jsonwebtoken");
var base64 = require("base-64");
var utf8 = require("utf8");
import { useRouter } from "next/router";

const AppState = (props) => {

  if (typeof window !== "undefined") {
    console.log("Browser");
  } else {
    console.log("Server");
  }

  // *******************************************************************************
  // global use effect :
  const [user, setUser] = React.useState({ value: null });

  React.useEffect(() => {
    console.log("global state");
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
    } else {
      setUser({ value: null });
    }
  }, []);


  // **********************************************************************************
  // User details fetching function.....
  const [userInfo, setUserInfo] = React.useState(null);

  const fetchUserDetails = async (email) => {
    var utfEncoded = utf8.encode(email);
    var baseEncoded = base64.encode(utfEncoded);

    let response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/auth/user_details/${baseEncoded}`,
      {
        method: "GET",
      }
    );

    let data = await response.json();
    setUserInfo(data);
  };

  React.useEffect(() => {
    if(!localStorage.getItem('token'))
      return;
    if(localStorage.getItem('token')) {
      // console.log(user.value)
      var decoded = jwt.verify(localStorage.getItem('token'),process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
      fetchUserDetails(decoded.email);
      //    setUserDetails(userInfo)
    }
  }, [user.value]);


  // *******************************************************************************8**
  // initializing the cart as an array...
  let initCart = [];
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("cart")) {
      initCart = [];
    } else {
      initCart = JSON.parse(localStorage.getItem("cart"));
    }
  }
  const [cartItems, setCartItems] = React.useState(initCart);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //   Adding items of the cart to local storage..
  const addToCart = (image, desc, _id, price, slug, gender, color, category, title, size) => {  
    // let id = Math.floor(Math.random()*1000000000);
    let units = 1;
    // let price = 23.99;

    const myCartItem = {
      id: _id,
      category: category,
      slug: slug,
      title: title,
      size: size,
      image: image,
      gender: gender,
      color:color,
      desc: desc,
      units: units,
      price: price,
    };
    setCartItems([...cartItems, myCartItem]);
    console.log("added");
  };

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // *************************************************************************************
  // Deleting item from the cart...
  const deleteFromCart = (item) => {
    setCartItems(
      cartItems.filter((e) => {
        return e !== item;
      })
    );
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };


  // ****************************************************************************************
  // Items in local storage as point of view from slug...
  let slugItem = [];
  if (cartItems.length !== 0) {
    cartItems.map((item) => {
      slugItem.push(item.slug);
    });
  }

  // Initializing router...
  const router = useRouter();
  // ****************************************************************************************
  // adding to the Favourite list of user...
  const handleFavourite = async (user_id, item_id) => {
    let headersList = { "Content-Type": "application/json" };
    let bodyContent = JSON.stringify({
      _id: user_id,
      favourite_id: item_id,
    });
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/user_items/favouriteItems`,
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );
    let data = await response.text();
    console.log(data);
  };

  // *******************************************************************************************
  // Removing from the favourite list of the user...
  const handleRemoveFavourite = async (user_id, item_id) => {
    let headersList = { "Content-Type": "application/json" };
    let bodyContent = JSON.stringify({
      _id: user_id,
      favourite_id: item_id,
    });
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/user_items/removefavourite`,
      {
        method: "DELETE",
        body: bodyContent,
        headers: headersList,
      }
    );
    let data = await response.text();
    console.log(data);
  };


  // ********************************************************************************************
  // Cart items...

  React.useEffect(()=>{
    if(userInfo){
    }
  },[userInfo])

  // ********************************************************************************************!important
  // Clear cart..
  // console.log(cartItems)
  const clearCart = () => {
    if(cartItems!==null){
        localStorage.removeItem('cart')
      }
    }

  return (
    <AppContext.Provider
      value={{
        addToCart,
        deleteFromCart,
        cartItems,
        slugItem,
        handleFavourite,
        handleRemoveFavourite,
        user,
        userInfo,
        clearCart,
      }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
