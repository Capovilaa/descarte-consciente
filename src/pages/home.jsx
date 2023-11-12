import React from "react";

export default function Home() {

    return (
        <>
            {/* div para primeira parte da home com nome do projeto, h-full */}
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
                <div className="w-full h-3/4 flex justify-center items-end">

                    {/* div para centralizar as informações da tela no centro com w-90% h-95%*/}
                    <div className="w-[90%] h-[95%] bg-white flex flex-col">

                        {/* div para agrupar títulos da página h-10% */}
                        <div className="w-full h-[10%] flex flex-col justify-start">
                            <h2 className="italic font-semibold text-[#334333] text-xl">SOBRE O APLICATIVO</h2>
                        </div>

                        {/* div para restante do conteúdo h-5/6 */}
                        <div className="w-full h-[90%]">
                            <p className="text-[#334333] text-lg">O aplicativo Descarte Consciente tem o intuito de conscientizar e te ajudar  a realizar o descarte correto, além de interagir com o usuário.</p>
                            <p className="text-[#334333] text-lg"><br />Este vem sendo desenvolvido pelos alunos do curso de Análise e desenvolvimento de sistemas, na faculdade Unisal.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* div para segunda parte da home */}
            <div className="w-screen h-screen bg-[url('src/assets/fundo-home.png')] bg-cover opacity-60 flex flex-col items-center justify-center">

                {/* div conteúdo tela 2 home */}
                <div className="w-[90%] h-96 bg-[#FBFCFA] rounded-[5%]">
                    <div className="h-1/3 w-full flex flex-row items-center justify-evenly">
                        <img src="src\assets\planta.png" className="h-14" />
                        <h2 className="text-[#334333] w-2/3 text-xl">Faça sua contribução para mundo.</h2>
                    </div>
                    <div className="h-1/3 w-full flex flex-row items-center justify-evenly">
                        <img src="src\assets\lixeira-home.png" className="h-14" />
                        <h2 className="text-[#334333] w-2/3 text-xl">Realize o descarte da forma correta.</h2>
                    </div>
                    <div className="h-1/3 w-full flex flex-row items-center justify-evenly">
                        <img src="src\assets\map-home.png" className="h-14" />
                        <h2 className="text-[#334333] w-2/3 text-xl">Econtre o ecoponto mais próximo da sua casa.</h2>
                    </div>
                </div>
            </div>

            {/* div para terceira parte da home */}
            <div className="w-screen h-screen bg-gradient-to-r from-[#215A49] to-[#213A40] flex flex-col">

                {/* div principal h-80% */}
                <div className="h-[85%] w-full flex items-center justify-center">

                    {/* div para conteúdo e botão "explorar" */}
                    <div className="w-[90%] h-[70%] rounded-[5%] flex flex-col items-center">

                        {/* div apenas para texto */}
                        <div className="w-full h-2/3 flex flex-col">
                            <h2 className="text-white font-semibold text-2xl">Deseja conhecer melhor o projeto?
                            </h2>
                            <p className="text-lg text-white">Exlore as funcionalidades interativas clicando no botão abaixo.</p>
                        </div>

                        <button className="w-64 h-20 bg-white drop-shadow-lg shadow-2xl rounded-xl">
                            <h1 className="text-[#334333] font-bold text-2xl">EXPLORAR</h1>
                        </button>
                    </div>

                </div>

                {/* div para roda pé h-20% */}
                <div className="h-[15%] w-full bg-slate-800 flex flex-row items-center justify-between">
                    <h1 className="text-white font-normal">2023</h1>
                    <img src="src\assets\unisal.png" alt="" />
                </div>
            </div>
        </>
    )
}