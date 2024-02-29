import React from "react";

function Cabecalho() {
    return <>
    {/* div para fundo */}
        < div className="w-full flex items-center justify-center h-1/4 bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
            <div className=" w-4/5 h-4/5 flex flex-col">
                <h1 className="text-white text-4xl font-bold">SMARTDESC</h1>
                <h2 className="text-white text-lg">O aplicativo de descarte consciente</h2>
            </div>
        </div>
    </>
}

export default Cabecalho