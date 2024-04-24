import React from "react";

function BotaoMenu({ textoBotao, icone, funcao }) {
  return (
    <>
      <div
        className="flex flex-col items-center justify-evenly rounded-xl bg-[#83AC8E] w-[110px] h-[110px] shadow-xl"
        onClick={() => funcao()}
      >
        <img className="h-2/3" src={icone} />
        <h1 className="text-white font-semibold text-sm">{textoBotao}</h1>
      </div>
    </>
  );
}

export default BotaoMenu;
