import React from "react";
import CardMenu from "../components/cardMenu";

// imagens
import mapas from "../assets/mapas.png"
import interrogacao from "../assets/interrogacao.png"
import reciclar from "../assets/reciclar.png"
import whatsapp from "../assets/whatsapp.png"
import denuncia from "../assets/denuncia.png"

export default function Menu() {

    return (
        <>
            {/* div principal do menu, h-full */}
            <div className="w-screen h-screen flex flex-col">

                {/* div para cabeçalhp h-1/4 */}
                <div className="w-full h-1/4 bg-gradient-to-b from-[#1FA75D] to-[#1F8655] flex flex-col items-center">

                    {/* div para agrupar os textos superiores h-1/2 */}
                    <div className="h-1/2 w-[90%] flex flex-col justify-end">
                        <h1 className="font-bold text-4xl text-white">SMARTDESC</h1>
                        <h4 className="font-semibold text-xl text-white">O aplicativo de descarte consciente</h4>
                    </div>
                </div>

                {/* div para informações gerais do projeto h-3/4 */}
                <div className="w-full h-3/4 flex-col flex justify-center items-center">

                    {/* div para centralizar o conteúdo no meio */}
                    <div className="w-[85%] h-full flex flex-col items-center justify-center">
                        {/* div para cabeçalho */}
                        <div className="w-full h-[10%] flex flex-col justify-end">
                            <h1 className="font-bold italic text-[#334333]">FUNCIONALIDADES</h1>
                            <h2 className="font-normal text-[#334333]">Navegue pelo aplicativo</h2>
                        </div>

                        {/* div com o conteúdo de fato */}
                        <div className="w-full h-[90%] flex flex-col items-center justify-center">

                            {/* fileira 1 */}
                            <div className="w-full h-1/4 flex flex-row items-end justify-evenly">
                                <CardMenu descricao={"Ecopontos"} img={mapas} />
                                <CardMenu descricao={"Dúvidas"} img={interrogacao} />
                            </div>
                            {/* fileira 2 */}
                            <div className="w-full h-1/4 flex flex-row items-end justify-evenly">
                                <CardMenu descricao={"Reciclagem"} img={reciclar} />
                                <CardMenu descricao={"Bate papo"} img={whatsapp} />
                            </div>
                            {/* fileira 3 */}
                            <div className="w-full h-1/4 flex flex-row items-end justify-evenly">
                                <CardMenu descricao={"Denúncia"} img={denuncia} />
                                <div className="w-28 h-28"></div>
                            </div>
                        </div>
                    </div>

                    {/* div para rodape */}
                    <div className="w-full h-[5%] bg-white pl-2">
                        <button>
                            <h1 className="font-semibold text-[#334333]">
                                Voltar
                            </h1>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}