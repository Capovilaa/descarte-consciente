import React from "react";
function BotaoPrincipal({ textoBotao, funcao }) {
  return (
    <>
      <button
        className="bg-white drop-shadow-2xl rounded-2xl flex items-center justify-center w-3/5 h-16"
        onClick={() => funcao()}
      >
        <h1 className="text-[#334333] font-extrabold text-lg">{textoBotao}</h1>
      </button>
    </>
  );
}
export default BotaoPrincipal;
