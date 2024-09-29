import React, { useContext, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Header({ handleLogin, handleSignin, onLogout }) {
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  const { cartItems } = useContext(StoreContext);
  const totalQuantity = Object.values(cartItems).reduce(
    (sum, quantity) => sum + quantity,
    0
  );

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    onLogout(); // Call the prop function passed down
  };

  return (
    <header className="bg-transparent fixed w-full z-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* logo */}
          <div className="md:flex md:items-center md:gap-12 bg-gradient-to-r from-fourthColor to-orange-400 bg-clip-text text-transparent cursor-pointer">
            <p className="font-Quicksand font-medium text-lg whitespace-nowrap">
              Cloud Kitchen
            </p>
          </div>

          {/* buttons */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div className="cursor-pointer rounded-md bg-transparent px-2 py-2 hover:scale-105  font-Quicksand font-medium text-fourthColor">
                <Link
                  onClick={()=>{
                    if(!token){
                      handleLogin()
                    }else{
                      navigate("/cart")
                    }
                  }}
                  className="flex items-center justify-center gap-1 relative"
                >
                  {totalQuantity > 0 ? (
                    <div className="absolute text-[10px] justify-center items-center bg-secondary text-fourthColor flex -top-2 -right-1 h-3 w-3 rounded-full">
                      {totalQuantity}
                    </div>
                  ) : null}
                  <ShoppingBagIcon />
                </Link>
              </div>
              {token && token.length > 0 ? (
                <>
                  <div
                    onClick={handleSignin}
                    className=" cursor-pointer rounded-full bg-transparent px-2 md:px-5 py-2 hover:scale-105  font-Quicksand font-medium text-fourthColor border border-fourthColor"
                  >
                    <Link
                      to="/orders"                      
                      className="flex items-center justify-center gap-1 "
                    >
                      <RestoreRoundedIcon />
                      <p className="hidden lg:block">Orders</p>
                    </Link>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer rounded-full bg-fourthColor px-2 md:px-5 py-2 hover:scale-105  font-Quicksand font-medium text-primary"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <LogoutRoundedIcon />
                      <p className="hidden lg:block">Log out</p>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <div
                    onClick={handleSignin}
                    className=" cursor-pointer rounded-full bg-transparent px-2 md:px-5 py-2 hover:scale-105  font-Quicksand font-medium text-fourthColor border border-fourthColor"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <HowToRegIcon />
                      <p className="hidden lg:block">Sign in</p>
                    </div>
                  </div>
                  <div
                    onClick={handleLogin}
                    className="cursor-pointer rounded-full bg-fourthColor px-2 md:px-5 py-2 hover:scale-105  font-Quicksand font-medium text-primary"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <LoginIcon />
                      <p className="hidden lg:block">Login</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* ham menu */}
            {/* <div className="block md:hidden">
              <button className="rounded bg-fourthColor p-2 text-primary transition hover:text-gray-600/75">
                <MenuIcon />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
