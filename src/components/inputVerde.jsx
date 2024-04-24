import React from "react";

function InputVerde({ propsPlaceholder, value, set }) {
  return (
    <>
      <input
        type="text"
        className="w-full h-16 rounded-lg bg-[#EBF5EC] drop-shadow-md pl-5"
        placeholder={propsPlaceholder}
        onChange={(e) => set(e.target.value)}
        value={value}
      />
    </>
  );
}

export default InputVerde;
