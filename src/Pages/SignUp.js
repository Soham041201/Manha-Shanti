import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../Auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import UploadAndDisplayImage from "../components/ImagePicker";

export default function SignUp() {
  const page = useHistory();
  const [name, setName] = useState("");
  const [surname, setsurname] = useState("");
  const [mobileNumber, setMobilenumber] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    register(email, password, confirmPassword).then(async () => {
      try {
        await setDoc(doc(db, "users", `${email}`), {
          firstName: { name },
          lastName: { surname },
          CellNumber: { mobileNumber },
          DisplayImage: localStorage.getItem("UserImage"),
        });

        // localStorage.setItem("id",docRef.id)
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      page.push("/home");
    });
  };

  return (
    <div className=" mt-8 mb-5">
      <div class="flex justify-center w-1/2 mx-auto items-center md:box content h-30 p-4 z-20">
        <div className="p-20 h-full w-full relative h-32 w-32">
          <div class="py-10 px-12 pr-8  ">
            <div className="absolute left-0 top-0 h-16 w-16">
              <h1 class="w-80 text-3xl space-x-4 space-y-4 font-bold text-center mb-9 mr-44 ml-10 trackig-wide cursor-pointer">
                Create a new account
              </h1>
              <p class="w-80 text-center font-semibold text-gray-700 mb-9 mr-26 ml-10 tracking-wide cursor-pointer">
                Register your account using your email and password and let us
                take care of your peace
              </p>
            </div>
          </div>
          <div class="mr-32 inset-0">
            <form onSubmit={handleRegister}>
              {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
              <div class=" space-y-3">
                <p class=" font-semibold text-gray-700">What's your name?</p>
                <input
                required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="First Name"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <p class=" font-semibold text-gray-700">What's your surname?</p>
                <input
                required
                  type="text"
                  value={surname}
                  onChange={(e) => setsurname(e.target.value)}
                  placeholder="Last Name"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <p class=" font-semibold text-gray-700">
                  What's your mobile number?
                </p>
                <input
                required
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => setMobilenumber(e.target.value)}
                  placeholder="Mobile number"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <p class=" font-semibold text-gray-700">
                  What's your email address?
                </p>
                <input
                required
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Addres"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <p class=" font-semibold text-gray-700">Create a password</p>
                <input
                required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <p class=" font-semibold text-gray-700">
                  Confirm your password
                </p>
                <input
                required
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="flex-inline text-sm py-3 px-4 mb-2 rounded-lg w-full border focus:outline-none focus:ring focus:border-blue-500"
                />
                <UploadAndDisplayImage />
              </div>

              <button
                class="py-3 w-64 text-xl mt-3 ml-7 text-white bg-purple-400 rounded-2xl mr-32"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
          <div class="text-center mt-6">
            <p class="mt-4 text-sm mr-32">
              Already have an account?{" "}
              <span class="underline cursor-pointer">
                {" "}
                <Link to="/">Login</Link>{" "}
              </span>
            </p>
          </div>
        </div>
        <div class="w-40 h-40 absolute bg-purple-300 rounded-full top-30 right-12 hidden md:block "></div>
        <div class="w-20 h-20 absolute bg-purple-300 rounded-full bottom-20 left-10 transform  hidden md:block"></div>
      </div>
    </div>
  );
}
