import React from "react";
import Cabecalho from "../components/cabecalho";

import imgLixeiraVermelha from "../assets/lixeiraVermelha.png";
import imgLixeiraAmarela from "../assets/lixeiraAmarela.png";
import imgAnelMetalico from "../assets/anelMetalico.png";
import imgTampaGarrafa from "../assets/tampaGarrafa.png";
import imgLata from "../assets/lata.png";

function Reciclagem() {

    return <>
        <div className="w-[100%]">
            {/* div sobre o app */}
            <div className="w-full h-full flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">

                {/* div cabeçalho verde */}
                <Cabecalho />
                <div className="w-full h-full bg-black bg-[url('src/assets/bgJogo.png')] bg-cover flex items-center justify-center rounded-t-3xl">                    

                </div>

            </div>

            <div>

            </div>
        </div >
    </>
}

export default Reciclagem