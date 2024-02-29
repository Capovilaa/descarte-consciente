import React from "react";
import Cabecalho from "../components/cabecalho";
import IconeTexto from "../components/iconeTexto";

// importar as imagens
import iconFolha from "../assets/iconFolha.png"
import iconLixeira from "../assets/iconLixeira.png"
import iconMapa from "../assets/iconMapa.png"
import BotaoPrincipal from "../components/botaoPrincipal";
import iconeUnisal from "../assets/logoUnisal.png";

function Home() {

    return <>
        <div className="w-[100%]">
            {/* div sobre o app */}
            <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">

                {/* div cabeçalho verde */}
                <Cabecalho />

                {/* div para texto */}
                <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
                    <div className="w-5/6 h-full flex flex-col items-center justify-center">
                        <div className="w-full h-5/6">
                            <h1 className="font-bold text-[#334333] italic text-2xl">SOBRE O APLICATIVO</h1>
                            <p className="text-[#334333] text-lg pt-5">O aplicativo Descarte Consciente tem o intuito de conscientizar e te ajudar  a realizar o descarte correto, além de interagir com o usuário.</p>
                            <p className="text-[#334333] text-lg pt-5">Este vem sendo desenvolvido pelos alunos do curdo de Análise e desenvolvimento de sistemas, na faculdade Unisal.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* div com o card */}
            <div className="w-full h-screen bg-[url('src/assets/fundoHome.png')] bg-no-repeat bg-cover flex items-center justify-center">
                <div className="bg-white w-4/5 h-[55%] rounded-3xl flex flex-col justify-evenly">

                    {/* explicar depois como ficaria */}
                    <IconeTexto imagem={iconFolha} texto={"Faça sua contribuição para o mundo."} />
                    <IconeTexto imagem={iconLixeira} texto={"Realize o descarte da forma correta."} />
                    <IconeTexto imagem={iconMapa} texto={"Econtre o ecoponto mais próximo da sua casa."} />
                </div>
            </div>

            {/* div para iniciar */}
            <div className="w-full h-screen bg-gradient-to-b from-[#205647] to-[#212139] flex items-center justify-center">
                {/* div para centralizar */}
                <div className="w-4/5 h-full flex flex-col">
                    {/* div geral */}
                    <div className="w-hull h-5/6 flex flex-col items-center justify-center">
                        {/* div para texto */}
                        <div className="flex flex-col justify-end items-center w-full h-1/2">
                            <h1 className="font-bold text-white text-xl">Deseja conhecer melhor o projeto?</h1>
                            <p className="text-white pt-5 text-lg">Explore as funcionalidades interativas clicando no botão abaixo:</p>
                        </div>

                        {/* div para botão */}
                        <div className="flex flex-col justify-evenly items-center w-full h-1/2 ">
                            <BotaoPrincipal textoBotao={"EXPLORAR"} />
                        </div>
                    </div>
                    {/* div para rodape */}
                    <div className="w-hull h-1/6 flex flex-row items-center">
                        <div className="w-full h-1/2 flex flex-row items-end justify-between">
                            <h1 className="text-white text-base font-normal">ADS 2024</h1>
                            <img src={iconeUnisal} className="h-1/3" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Home