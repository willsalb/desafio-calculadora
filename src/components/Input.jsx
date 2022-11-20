/* eslint-disable no-undef */
import React from "react";

function Input({value}) {
  return (
    <div className="w-full h-16 bg-slate-500 flex items-center justify-end text-lg">
      <input
        className="w-full h-16 bg-slate-500 border-0 text-lg pl-3 text-white" disabled value={value}/>
    </div>
  );
}

export default Input;
