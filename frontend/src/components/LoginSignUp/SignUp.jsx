import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function SignUp({ handleSignin, switchModal }) {
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
        <form>
          <div className="flex flex-col gap-2 px-5">
            {/* name */}
            <label className="text-white text-sm font-Quicksand">Name</label>
            <input
              type="text"
              className="bg-white border border-white rounded-md p-2"
              placeholder="Enter your name"
            />
            {/* email */}
            <label className="text-white text-sm font-Quicksand">Email</label>
            <input
              type="email"
              className="bg-white border border-white rounded-md p-2"
              placeholder="Enter your email"
            />
            {/* password */}
            <label className="text-white text-sm font-Quicksand">
              Password
            </label>
            <input
              type="password"
              className="bg-white border border-white rounded-md p-2"
              placeholder="Enter your password"
            />
            {/* confirm password */}
            <label className="text-white text-sm font-Quicksand">
              Password
            </label>
            <input
              type="password"
              className="bg-white border border-white rounded-md p-2"
              placeholder="Re-enter your password"
            />
            <div>
              <p className="text-white font-light font-Quicksand">
                Already a member?{" "}
                <span
                  onClick={switchModal}
                  className="font-medium cursor-pointer text-fourthColor"
                >
                  Login
                </span>
              </p>
            </div>
            <button className="bg-primary text-white rounded-md py-2 px-5">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
