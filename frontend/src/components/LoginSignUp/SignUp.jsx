import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

function SignUp({ handleSignin, switchModal, url }) {
  const [name, setName] = useState("");
  const [nameVerify, setNameVerify] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState(false);
  const [cpassword, setCpassword] = useState("");
  const [cpasswordVerify, setCpasswordVerify] = useState(false);
  const [error, setError] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setNameVerify(false);
    const regex = /^[a-zA-Z\s]{3,}$/;
    if (regex.test(value)) {
      setNameVerify(true);
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailVerify(false);
    const regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(value)) {
      setEmailVerify(true);
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordVerify(false);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (regex.test(value)) {
      setPasswordVerify(true);
    }
  };

  const handleCpassword = (e) => {
    const value = e.target.value;
    setCpassword(value);
    setCpasswordVerify(false);
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === value && regex.test(value)) {
      setCpasswordVerify(true);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (!nameVerify || !emailVerify || !passwordVerify || !cpasswordVerify) {
      alert("Please fill the mandatory fields");
      return;
    }

    const data = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch(`${url}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result === "exists") {
        setError("Email Already in use");
      } else {
        setName("");
        setEmail("");
        setPassword("");
        setCpassword("");
        const token = result.data;
        localStorage.setItem("authToken", token);
        handleSignin();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="absolute inset-0 flex z-30 backdrop-blur-sm  w-full  justify-center items-center">
      <div className="w-fit md:w-1/2 lg:w-1/4 h-fit bg-thirdColor rounded-md shadow pb-5">
        {/* head */}
        <div className="flex justify-between items-center px-5">
          <h1 className="text-lg font-Quicksand text-white font-medium text-center py-4">
            Sign In
          </h1>
          <button onClick={handleSignin} className="cursor-pointer ">
            <CloseRoundedIcon className="text-white cursor-pointer" />
          </button>
        </div>
        {/* form */}
        <form onSubmit={handleForm}>
          <div className="flex flex-col gap-2 px-5">
            {/* name */}
            <div className="flex items-center border w-full rounded-md bg-white">
              <input
                type="Text"
                className="w-full rounded-md p-2 outline-none "
                placeholder="Full Name"
                onChange={(e) => handleName(e)}
              />
              {name.length < 1 ? null : nameVerify ? (
                <CheckCircleOutlineRoundedIcon className="m-2 text-green-900" />
              ) : (
                <HighlightOffRoundedIcon className="m-2 text-red-700 " />
              )}
            </div>
            {name.length < 1 ? null : nameVerify ? null : (
              <p className="font-light text-sm text-red-700 text-wrap">
                name should be more than 2 characters and only contain letters
              </p>
            )}
            {/* email */}
            <div className="flex items-center border w-full  rounded-md bg-white">
              <input
                type="email"
                className="outline-none rounded-lg w-full p-2  "
                onChange={(e) => handleEmail(e)}
                placeholder="Email"
              />
              {email.length < 1 ? null : emailVerify ? (
                <CheckCircleOutlineRoundedIcon className="m-2 text-green-900" />
              ) : (
                <HighlightOffRoundedIcon className="m-2 text-red-700 " />
              )}
            </div>
            {email.length < 1 ? null : emailVerify ? null : (
              <p className="font-light text-sm text-red-700 text-wrap">
                enter a valid email address
              </p>
            )}
            {error.length > 0 ? (
              <div>
                <p className="text-red-700 font-light font-Quicksand">
                  {error}
                </p>
              </div>
            ) : null}
            {/* password */}
            <div className="flex items-center border w-full  rounded-md bg-white">
              <input
                type="password"
                className="outline-none rounded-lg w-full p-2  "
                placeholder="password"
                onChange={(e) => handlePassword(e)}
              />
              {password.length < 1 ? null : passwordVerify ? (
                <CheckCircleOutlineRoundedIcon className="m-2 text-green-900" />
              ) : (
                <HighlightOffRoundedIcon className="m-2 text-red-700 " />
              )}
            </div>
            {password.length < 1 ? null : passwordVerify ? null : (
              <p className="font-light text-sm text-red-700 text-wrap ">
                Ensure password contains minimum 8 characters with at least one
                number
              </p>
            )}
            {/* confirm password */}
            <div className="flex items-center border w-full  rounded-md bg-white">
              <input
                type="password"
                className="rounded-lg w-full p-2 outline-none "
                placeholder="Confirm password"
                onChange={(e) => handleCpassword(e)}
              />
              {cpassword.length < 1 ? null : cpasswordVerify ? (
                <CheckCircleOutlineRoundedIcon className="m-2 text-green-900" />
              ) : (
                <HighlightOffRoundedIcon className="m-2 text-red-700 " />
              )}
            </div>
            {cpassword.length < 1 ? null : cpasswordVerify ? null : (
              <p className="font-light text-sm text-red-700 text-wrap">
                Passwords doesn't match
              </p>
            )}
            <div>
              <p className="text-white font-light font-Quicksand">
                Already a member?{" "}
                <span
                  onClick={switchModal}
                  className="font-medium cursor-pointer text-fourthColor"
                >
                  Sign In
                </span>
              </p>
            </div>
            <button className="bg-primary text-white rounded-md py-2 px-5">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
