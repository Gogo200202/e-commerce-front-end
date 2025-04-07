"use client";
import { useState } from "react";

export default function AddProduct() {
  const [state, setState] = useState([
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg",
  ]);
  var loadFile = function (event: any) {
    var input = event.target;
 
    var file = input.files[0];
    var type = file.type;

    //var output = document.getElementById('preview_img');

    let obj = URL.createObjectURL(event.target.files[0]);
    let arr = state;
    arr[event.target.id] = obj;

    setState([...arr]);
    console.log(state);
    // output.onload = function() {
    //     URL.revokeObjectURL(output.src) // free memory
    // }
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className=" h-4/6 w-4/6 ">
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                form="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                form="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product description
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            <div>
              <label
                form="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div className=" grid md:grid-cols-4 gap-2">
            <label className="h-2/4 w-2/4">
              <img src={state[0]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="0" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img src={state[1]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="1" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img src={state[2]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="2" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img src={state[3]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="3" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img src={state[4]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="4" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img src={state[5]} alt="upload icon" width="512" height="512" />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="5" onChange={loadFile} hidden />
            </label>
          </div>
          

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              form="remember"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
