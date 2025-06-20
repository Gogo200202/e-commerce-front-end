"use client";
import { redirect } from "next/navigation";
export default function DeleteButton(props: any) {

  async function DeleteButton() {
    try {
      const myHeaders = new Headers();
      myHeaders.append("gfg_token_header_key", props.Jwt);
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        _id: props.Id,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const response = await fetch(
        "http://localhost:8080/user/deleteItem",
        requestOptions
      );

      let data = await response.json();
      console.log(data)
    } catch (error: any) {
      console.error(error.message);
    }

    redirect(`/`);
  }

  return (
    <>
      {props.IsYours ? (
        <div className="bg-transparent hover:bg-white font-semibold hover:text-white  border border-white hover:border-transparent rounded">
          <button  onClick={DeleteButton} ><img src="/svg/trash-can.svg" alt="like" /></button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
