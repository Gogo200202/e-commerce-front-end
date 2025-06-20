"use client";

import { redirect } from "next/navigation";
import { deleteAll } from "../_actions/cookie";

export default  function LogOut() {
  async function logOut() {
    await deleteAll();
    redirect(`/`);
  }

  return (
    <div className="grid h-screen w-screen place-items-center">
      
      <button  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " onClick={logOut}>Искаш ли да излезеш </button>
    </div >
  );
}
