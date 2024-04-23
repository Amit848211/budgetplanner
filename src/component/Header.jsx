import React, { useContext, useState } from "react";
import { StoreContext } from "./context";

function Header() {


  const{totalPrice}=useContext(StoreContext);
  const[remBalance,setremBalance]=useState(2000);
 
 
 console.log("rem",totalPrice());
 

  return (
    <>
      <div className="w-full h-auto px-24 flex flex-col gap-3 pt-1">
        <h1 className="text-4xl font-semibold opacity-90">
          My Budget Plannner
        </h1>
        <div className="flex justify-between px-4">
          <div className="w-auto h-auto bg-blue-50 border px-3 py-3 border-gray-200 rounded-lg text-2xl font-semibold opacity-70 text-center items-center">
            Budget: Rs.2000
          </div>
          <div className="w-auto h-auto bg-blue-50 border px-3 py-3 border-gray-200 rounded-lg text-2xl text-green-700 font-semibold opacity-70 text-center">
            Remaining: Rs.{remBalance-totalPrice()}
          </div>
          <div className="w-auto h-auto bg-sky-300 border px-3 py-3 border-gray-200 rounded-lg  text-2xl font-semibold opacity-70 text-center">
            Spant so far:{totalPrice()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
