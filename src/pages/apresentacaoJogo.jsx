import React from "react";
import BotaoPrincipal from "../components/botaoPrincipal";

function ApresentacaoJogo() {

    return <>
        <div className="w-[100%] h-screen bg-[url('src/assets/bgJogo.png')] bg-cover flex flex-col">

            {/* div para titulo */}
            <div className="w-full h-1/5 flex items-center pl-8 font-bold text-white">
                <h1 className="text-4xl">PRATIQUE</h1>
            </div>

            {/* div para play */}
            <div className="w-full h-3/5 flex flex-col items-center justify-evenly ">

                {/* card jogo */}
                <div className="bg-white w-5/6 h-64 rounded-lg flex items-center justify-center">
                    <div className="w-5/6 h-5/6 flex flex-col items-center justify-around">

                        <p className="text-[#334333] font-medium pt-4 text-lg">Acesse nosso <b>jogo</b> para aplicar seu conhecimento quanto ao <b>descarte</b> consciente.</p>
                        <p className="text-[#334333] font-medium pt-4 text-lg">Itens irão aparecer na tela, sua missão é escolher a lixeira <b>correta</b> para ele.</p>
                    </div>
                </div>

                {/* div botão */}
                <div className="w-4/6 flex items-end justify-center">

                    <BotaoPrincipal textoBotao={"JOGAR"} />
                </div>


            </div>

            {/* div para footer */}
            <div className="w-full h-1/5 flex items-end justify-start">
                <h1 className="text-white text-lg font-semibold p-4">Voltar</h1>
            </div>

        </div>
    </>
}

export default ApresentacaoJogo