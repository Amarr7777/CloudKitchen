import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import imgSrc from "../assets/watermelon.png";
import ExploreCategory from "../components/ExploreCategory/ExploreCategory";
import AllProducts from "../components/All Products/AllProducts";
import Login from "../components/LoginSignUp/Login";
import SignUp from "../components/LoginSignUp/SignUp";

function Home() {
  const url = "http://localhost:4000";

  const [foods, setFoods] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignin, setShowSignin] = useState(false);
  const [logoutTriggered, setLogoutTriggered] = useState(false);

  const getFoodData = async () => {
    try {
      const response = await fetch(`${url}/api/food/listfoods`, {
        method: "GET",
      });
      const result = await response.json();

      if (result.success) {
        setFoods(result.data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignin(false);
    window.scrollTo(0, 0);
  };

  const handleSignin = () => {
    setShowSignin(!showSignin);
    setShowLogin(false);
    window.scrollTo(0, 0);
  };

  const switchModal = () => {
    if (showLogin) {
      setShowLogin(false);
      setShowSignin(true);
    } else {
      setShowLogin(true);
      setShowSignin(false);
    }
  };

  useEffect(() => {
    getFoodData();
  }, [logoutTriggered]); // Add logoutTriggered to dependency array

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLogoutTriggered((prev) => !prev); // Trigger useEffect
  };

  // Check localStorage for token and update Redux store
  useEffect(() => {
    getToken();
  }, [logoutTriggered]); // This will run after a logout

  const getToken = () => {
    const token = localStorage.getItem("authToken");
    console.log("Token on token check:", token);
  };

  return (
    <>
      {showLogin ? (
        <Login handleLogin={handleLogin} switchModal={switchModal} url={url} />
      ) : null}
      {showSignin ? (
        <SignUp
          handleSignin={handleSignin}
          switchModal={switchModal}
          url={url}
        />
      ) : null}

      <div className="bg-mainBg bg-contain bg-no-repeat bg-opacity-10 h-svh relative">
        <Header handleLogin={handleLogin} handleSignin={handleSignin} onLogout={handleLogout} />
        <img
          src={imgSrc}
          alt="watermelon"
          width={1000}
          height={1000}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rotate-12"
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 text-7xl leading-relaxed text-pretty text-center md:text-6xl lg:text-8xl md:text-nowrap text-fourthColor">
          WELCOME TO OUR STORE
        </p>
      </div>
      <ExploreCategory />
      <AllProducts foods={foods} url={url} />
    </>
  );
}

export default Home;