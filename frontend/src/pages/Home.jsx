import React, { useEffect, useState } from "react";
import Header from "../components/Header";
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
    setShowSignin(false); // Ensure the signup modal is closed
    window.scrollTo(0, 0); // Scroll to top
  };

  const handleSignin = () => {
    setShowSignin(!showSignin);
    setShowLogin(false); // Ensure the login modal is closed
    window.scrollTo(0, 0); // Scroll to top
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

  // Effect to disable/enable scrolling when a modal is open
  useEffect(() => {
    if (showLogin || showSignin) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ""; // Cleanup overflow on unmount
    };
  }, [showLogin, showSignin]);

  useEffect(() => {
    getFoodData();
  }, []);

  return (
    <>
      {showLogin ? (
        <Login handleLogin={handleLogin} switchModal={switchModal} />
      ) : null}
      {showSignin ? (
        <SignUp handleSignin={handleSignin} switchModal={switchModal} />
      ) : null}

      <div className="bg-mainBg bg-contain bg-no-repeat bg-opacity-10 h-svh relative">
        <Header handleLogin={handleLogin} handleSignin={handleSignin} />
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