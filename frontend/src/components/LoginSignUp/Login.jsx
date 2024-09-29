import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Login({ handleLogin, switchModal, url }) {
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);

  const [invalidUser, setInvalidUser] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailVerify(false);
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    setEmailVerify(regex.test(value));
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordVerify(value.length > 0);
  };

  const handleForm = async (e) => {
    e.preventDefault();

    if (!emailVerify || !passwordVerify) {
      alert("Please check your email and password");
      return;
    }

    const data = { email, password };

    try {
      const response = await fetch(`${url}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Reset error states
      setInvalidUser(false);
      setIncorrectPassword(false);
      console.log("result", result);
      if (result.success) {
        const token = result.data;
        localStorage.setItem("authToken", token);
        handleLogin()
      } else {
        if (result.message === "Incorrect password") {
          setIncorrectPassword(true);
          setPassword("");
        } else if (result.message === "No user found") {
          setEmail("");
          setInvalidUser(true);
        } else {
          alert("An error occurred. Please try again later.");
          setEmail("");
          setPassword("");
        }
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="absolute inset-0 flex z-30 backdrop-blur-sm w-full justify-center items-center">
      <div className="w-fit md:w-1/2 lg:w-1/4 h-fit bg-thirdColor rounded-md shadow pb-5">
        {/* Head */}
        <div className="flex justify-between items-center px-5">
          <h1 className="text-lg font-Quicksand text-white font-medium text-center py-4">
            Login
          </h1>
          <button onClick={handleLogin} className="cursor-pointer">
            <CloseRoundedIcon className="text-white" />
          </button>
        </div>
        {/* Form */}
        <form onSubmit={handleForm}>
          <div className="flex flex-col gap-2 px-5">
            <div className="flex flex-col">
              <label className="text-white text-sm font-Quicksand">Email</label>
              <input
                type="email"
                className="bg-white border border-white outline-none rounded-md p-2"
                placeholder="Enter your email"
                value={email} // Add value for controlled input
                onChange={handleEmail}
              />
              {invalidUser && (
                <p className="text-red-600 text-sm font-sm">
                  No user found with this email id
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-white text-sm font-Quicksand">
                Password
              </label>
              <input
                type="password"
                className="bg-white border border-white outline-none rounded-md p-2"
                placeholder="Enter your password"
                value={password} // Add value for controlled input
                onChange={handlePassword}
              />
              {incorrectPassword && (
                <p className="text-red-600 text-sm font-sm">
                  Incorrect password
                </p>
              )}
            </div>
            <div>
              <p className="text-white font-light font-Quicksand">
                new member?{" "}
                <span
                  onClick={switchModal}
                  className="font-medium cursor-pointer text-fourthColor"
                >
                  sign in
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="bg-primary text-white rounded-md py-2 px-5"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
