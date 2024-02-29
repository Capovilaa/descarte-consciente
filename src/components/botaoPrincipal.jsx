import React from "react";
function BotaoPrincipal({ textoBotao }) {

    return <>
        <div className="bg-white drop-shadow-2xl rounded-3xl flex items-center justify-center w-4/5 h-16">
            <h1 className="text-[#334333] font-bold text-2xl">{textoBotao}</h1>
        </div></>
}
export default BotaoPrincipal