import React from "react";
import Cabecalho from "../components/cabecalho";

// imagens
import duvida from "../assets/duvidaPoint.png"
import excla from "../assets/exclaPoint.png"
import mapa from "../assets/mapaPoint.png"
import reciclagem from "../assets/reciclagemPoint.png"
import zap from "../assets/zapPoint.png"
import BotaoMenu from "../components/botaoMenu";

function Menu() {
    return <>
        <div className="w-full h-screen flex flex-col">
            <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">

                {/* div cabeçalho verde */}
                <Cabecalho />

                {/* div para texto */}
                <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
                    {/* div auxiliar para centralizar */}
                    <div className="w-[90%] flex flex-col">
                        {/* div para título da página*/}
                        <div className="w-full h-[15%] flex flex-col items-start justify-center">
                            <h1 className="text-[#334333] font-bold italic text-xl">FUNCIONALIDADES</h1>
                            <h2 className="text-[#334333] font-semibold text-lg">Navegue pelo aplicativo</h2>
                        </div>

                        {/* div para container */}
                        <div className="w-full h-[75%]">
                            {/* linha 1 */}
                            <div className="w-full h-1/3 flex flex-row justify-evenly items-end">
                                <BotaoMenu icone={mapa} textoBotao={"Ecopontos"} />
                                <BotaoMenu icone={duvida} textoBotao={"Dúvidas"} />
                            </div>
                            {/* linha 2 */}
                            <div className="w-full h-1/3 flex flex-row justify-evenly items-end">
                                <BotaoMenu icone={reciclagem} textoBotao={"Reciclagem"} />
                                <BotaoMenu icone={zap} textoBotao={"Bate papo"} />
                            </div>
                            {/* linha 3 */}
                            <div className="w-full h-1/3 flex flex-row justify-evenly items-end">
                                <BotaoMenu icone={excla} textoBotao={"Denúncias"} />
                                <div className="w-[110px] h-[110px]"></div>
                            </div>
                        </div>

                        {/* div para rodape */}
                        <div className="w-full h-[10%] flex justify-star items-center">
                            <h1 className="text-xl text-[#334333] font-semibold">Voltar</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Menu