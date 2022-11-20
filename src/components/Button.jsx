import React from "react";

function Button({label, onClick}) {
    return (
        <button className="flex flex-1 p-5 border-8 border-sky-500 bg-sky-500 text-white text-lg font-bold hover:opacity-60 justify-center" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button