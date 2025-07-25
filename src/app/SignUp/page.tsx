"use client";
import Link from "next/link";
import { createCookie } from "../_actions/cookie";
import { useState, useEffect } from "react";

import { redirect } from "next/navigation";
import Footer from "../components/footer";


export default function SingUp() {
  let [password, setPassword] = useState<string>("");
  let [message, setMessage] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [name, setName] = useState<string>("");
  function AddPassword(event: any) {
    var input = event.target.value;
    setPassword(input);
  }

  function AddEmail(event: any) {
    var input = event.target.value;
    setEmail(input);
  }

  function AddName(event: any) {
    var input = event.target.value;
    setName(input);
  }

  async function ButtonClick(e: any) {
    e.preventDefault();

    const fetchData = async () => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: name,
          password: password,
          email: email,
        }),
      };

      const response = await fetch(
        "http://localhost:8080/user/CreateUser",
        requestOptions
      );

      const newData = await response.json();
      if (response.status == 200) {
        await createCookie(name, newData.Jwt);
        redirect(`/`);
      } else {
        setMessage(newData.Message);
      }
    };

    fetchData();
  }

  return (
    <>
    <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
         Създайте на акаунт
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w ">
          <Link
            className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            href="\SingIn"
          >
            Влизане в акаунт
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form method="POST" action="#">
            <div>
              <label
                className="block text-sm font-medium leading-5  text-gray-700"
                htmlFor="username"
              >
                Име 
              </label>
              <div className="mt-1 relative rounded-md shadow-sm text-black">
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  placeholder="John Doe"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={AddName}
                />
                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                 
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Емайл адрес
              </label>
              <div className="mt-1 relative rounded-md shadow-sm text-black">
                <input
                  placeholder="user@example.com"
                  type="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={AddEmail}
                />
                <div className=" absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label
                form="password"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
               Парола
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                  onChange={AddPassword}
                />
              </div>
            </div>

            <div className="mt-6">
              <label
                form="password_confirmation"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Потвардете Паролата
              </label>
              <div className="mt-1 rounded-md shadow-sm">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type="password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 text-black"
                />
              </div>
            </div>

            <div className="mt-6">
              <span className="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  onClick={ButtonClick}
                >
                  Създайте акаунт
                </button>
              </span>
            </div>
            <div className=" text-center  w-full  text-black">{message}</div>
          </form>
        </div>
      </div>
    
    </div>
    <Footer/>
    </>
  );
}
