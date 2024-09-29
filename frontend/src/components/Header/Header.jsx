import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

function Header({ handleLogin, handleSignin, onLogout }) {
  const token = localStorage.getItem("authToken");

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
          {/* list */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm ">
                <li className="hover:scale-105">
                  <a
                    className="text-fourthColor transition hover:scale-105 font-Quicksand cursor-pointer"
                    href="#"
                  >
                    Menu
                  </a>
                </li>
                <li className="hover:scale-105">
                  <a
                    className="text-fourthColor transition hover:scale-105 font-Quicksand cursor-pointer"
                    href="#"
                  >
                    Orders
                  </a>
                </li>
                <li className="hover:scale-105">
                  <a
                    className="text-fourthColor transition hover:scale-105 font-Quicksand cursor-pointer"
                    href="#"
                  >
                    Favorites
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex sm:gap-4">
              <a
                className="rounded-md bg-transparent px-2 py-2 hover:scale-105  font-Quicksand font-medium text-fourthColor"
                href="#"
              >
                <div className="flex items-center justify-center gap-1 ">
                  <ShoppingBagIcon />
                </div>
              </a>
              {token && token.length > 0 ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="cursor-pointer rounded-full bg-fourthColor px-5 py-2 hover:scale-105  font-Quicksand font-medium text-primary"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <LogoutRoundedIcon />
                      <p>Log out</p>
                    </div>
                  </button>
                </>
              ) : (
                <>
                  <div
                    onClick={handleSignin}
                    className=" cursor-pointer rounded-full bg-transparent px-5 py-2 hover:scale-105  font-Quicksand font-medium text-fourthColor border border-fourthColor"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <HowToRegIcon />
                      <p>Sign in</p>
                    </div>
                  </div>
                  <div
                    onClick={handleLogin}
                    className="cursor-pointer rounded-full bg-fourthColor px-5 py-2 hover:scale-105  font-Quicksand font-medium text-primary"
                  >
                    <div className="flex items-center justify-center gap-1 ">
                      <LoginIcon />
                      <p>Login</p>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* ham menu */}
            <div className="block md:hidden">
              <button className="rounded bg-fourthColor p-2 text-primary transition hover:text-gray-600/75">
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export default Header;
