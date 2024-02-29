import React from "react";

function IconeTexto({imagem, texto}) {

    return <>
        <div className="w-full flex flex-row items-center justify-center h-1/6">
            {/* div para imagem */}
            <div className="flex items-center justify-center h-full w-1/4">
                <img src={imagem} />
            </div>

            {/* div para texto */}
            <div className="flex items-center justify-center h-full w-3/4">
                <p className="text-[#334333] font-bold">{texto}</p>
            </div>
        </div></>

}

export default IconeTexto