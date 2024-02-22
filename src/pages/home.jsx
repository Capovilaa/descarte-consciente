import React from "react";
import Cabecalho from "../components/cabecalho";

function Home() {

    return <>
        <div className="w-[100%]">
            {/* div sobre o app */}
            <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">

                {/* div cabeçalho verde */}
                <Cabecalho />

                {/* div para texto */}
                <div className="w-full h-2/3 bg-white flex justify-center rounded-t-3xl">
                    <div className="w-5/6 h-full flex flex-col items-center justify-center">
                        <div className="w-full h-5/6">
                            <h1 className="font-bold text-[#334333] italic text-2xl">SOBRE O APLICATIVO</h1>
                            <p className="text-[#334333] text-lg pt-5">O aplicativo Descarte Consciente tem o intuito de conscientizar e te ajudar  a realizar o descarte correto, além de interagir com o usuário.</p>
                            <p className="text-[#334333] text-lg pt-5">Este vem sendo desenvolvido pelos alunos do curdo de Análise e desenvolvimento de sistemas, na faculdade Unisal.</p>
                        </div>

                    </div>

                </div>
            </div>

            {/* div para descricao */}
            <div className="w-full h-screen bg-green-400">

            </div>

            {/* div para iniciar */}
            <div className="w-full h-screen bg-blue-400">

            </div>
        </div>

    </>

}

export default Home