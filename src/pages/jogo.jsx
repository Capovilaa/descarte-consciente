import React from "react";
import Cabecalho from "../components/cabecalho";
import lixoVermelho from "../assets/lixeiras/vermelha.png";
import lixoVerde from "../assets/lixeiras/verde.png";
import lixoMarrom from "../assets/lixeiras/marrom.png";
import lixoAzul from "../assets/lixeiras/azul.png";
import lixoAmarelo from "../assets/lixeiras/amarela.png";
import relogio from "../assets/clock.png";

import { useNavigate, useParams } from "react-router-dom";

function Jogo() {
  const navigate = useNavigate();
  const { userName } = useParams();

  function sair() {
    navigate("/menu");
  }
  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
          {/* div cabeçalho verde */}
          <Cabecalho />

          {/* div para texto */}
          <div className="w-full h-3/4 bg-[url('src/assets/bgJogo.png')] bg-no-repeat bg-cover flex justify-center rounded-t-3xl">
            {/* div auxiliar para centralizar */}
            <div className="w-[90%] flex flex-col">
              {/* div para título da página*/}
              <div className="w-full h-[20%] flex flex-row items-start justify-center">
                {/* div para score */}
                <div className="w-1/2 h-full flex flex-col justify-start pt-4 pl-4">
                  <h2 className="text-white font-bold text-2xl">{userName}</h2>
                  <h2 className="text-white font-semibold text-xl">
                    SCORE 140
                  </h2>
                </div>

                {/* div para temporizador */}
                <div className="w-1/2 h-full flex flex-col items-end">
                  {/* div para relógio */}
                  <div className="w-full h-1/2 flex flex-row justify-end items-end">
                    <img src={relogio} className="w-10 h-10" />
                    <h2 className="text-white font-bold text-2xl pl-3">0:45</h2>
                  </div>
                  <h1 className="font-extrabold text-white">||</h1>
                </div>
              </div>

              {/* div para container */}
              <div className="w-full h-[60%] flex flex-col"></div>

              {/* div para rodape */}
              <div className="w-full h-[20%] flex flex-col justify-star items-center">
                {/* div para as lixeiras */}
                <div className="w-full h-[75%] flex flex-row justify-evenly items-center">
                  <button className="h-full w-20">
                    <img src={lixoAmarelo} className="w-5/6 h-5/6" />
                  </button>

                  <button className="h-full w-20">
                    <img src={lixoAzul} className="w-5/6 h-5/6" />
                  </button>

                  <button className="h-full w-20">
                    <img src={lixoVermelho} className="w-5/6 h-5/6" />
                  </button>

                  <button className="h-full w-20">
                    <img src={lixoVerde} className="w-5/6 h-5/6" />
                  </button>

                  <button className="h-full w-20">
                    <img src={lixoMarrom} className="w-full h-full" />
                  </button>
                </div>
                {/* div para botão voltar */}
                <div className="w-full h-[25%] flex items-end justify-start">
                  <h1
                    className="text-xl text-white font-semibold"
                    onClick={() => sair()}
                  >
                    Sair
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jogo;
