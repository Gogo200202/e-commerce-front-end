"use client";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
//import { revalidatePath } from "next/cache";
import { getJwt, getName } from "../_actions/cookie";

class img {
  preview: any =
    "https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg";
  data: any;
}
export default function AddProduct() {
  const [Imgs, setImgs] = useState<img[]>([
    new img(),
    // new img(),
    // new img(),
    // new img(),
    // new img(),
    // new img(),
  ]);
  const [description, setDescription] = useState<String>();
  const [name, setName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [price, setPrice] = useState<string>();

  function AddPrice(event: any) {
    var input = event.target.value;

    setPrice(input);
  }
  function AddProductName(event: any) {
    var input = event.target.value;

    setName(input);
  }

  function AddProductDescription(event: any) {
    var input = event.target.value;
    setDescription(input);
  }

  function AddPhoneNumber(event: any) {
    var input = event.target.value;
    setPhoneNumber(input);
  }

  var loadFile = function (event: any) {
    var input = event.target;

    var file = input.files[0];

    const img = {
      preview: URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0],
    };
    let arr = Imgs;
    arr[event.target.id] = img;

    setImgs([...arr]);
  };

  async function onButtonPress(event: any) {
    event.preventDefault();
    let formData = new FormData();
    formData.append("file", Imgs[0].data);
    formData.append("Description", description as string);
    formData.append("Name", name as string);
    formData.append("PhoneNumber", phoneNumber as string);
    formData.append("Price", price as string);
    let jwt = await getJwt();
    let response = await fetch("http://localhost:8080/addItem", {
      method: "POST",
      body: formData,
      headers: {
        gfg_token_header_key: jwt?.value,
      },
    });
    

    redirect(`/`);
  }

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
                onChange={AddProductName}
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
                onChange={AddProductDescription}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>

            <div>
              <label
                form="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product price
              </label>
              <input
                onChange={AddPrice}
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
                //type="tel"
                onChange={AddPhoneNumber}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                //  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div className=" grid md:grid-cols-4 gap-2">
            <label className="h-2/4 w-2/4">
              <img
                src={Imgs[0].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="0" onChange={loadFile} hidden />
            </label>
            {/* <label className="h-2/4 w-2/4">
              <img
                src={Imgs[1].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="1" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img
                src={Imgs[2].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="2" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img
                src={Imgs[3].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="3" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img
                src={Imgs[4].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="4" onChange={loadFile} hidden />
            </label>
            <label className="h-2/4 w-2/4">
              <img
                src={Imgs[5].preview}
                alt="upload icon"
                width="512"
                height="512"
              />
              <div>
                <h4>Upload a file</h4>
              </div>
              <input type="file" id="5" onChange={loadFile} hidden />
            </label> */}
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
            onClick={onButtonPress}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
