import React, { useEffect, useState } from "react";
import Cabecalho from "../components/cabecalho";
import lixoVermelho from "../assets/lixeiras/vermelha.png";
import lixoVerde from "../assets/lixeiras/verde.png";
import lixoMarrom from "../assets/lixeiras/marrom.png";
import lixoAzul from "../assets/lixeiras/azul.png";
import lixoAmarelo from "../assets/lixeiras/amarela.png";
import relogio from "../assets/clock.png";
import residuos from "../../residuos.json";
import bgJogo from "../assets/bgJogo.png";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function Jogo() {
  const navigate = useNavigate();
  const { userName } = useParams();
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timer, setTimer] = useState(10);
  const [startTime, setStartTime] = useState(null);
  const [currentItem, setCurrentItem] = useState(getRandomItem());

  function sair() {
    navigate("/menu");
  }

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * residuos.length);
    return residuos[randomIndex];
  }

  useEffect(() => {
    if (timer <= 0) return;
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setIsPlaying(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  function handleLixeiraClick(corLixo) {
    const tempoResposta = Date.now() - startTime;
    const itemCorreta = currentItem.cor_lixo === corLixo;

    if (itemCorreta) {
      setScore(
        (prevScore) =>
          prevScore + Math.max(0, 100 - Math.floor(tempoResposta / 1000))
      );
    }

    setCurrentItem(getRandomItem());
    setStartTime(Date.now());
  }

  const finalizarJogo = async () => {
    try {
      const response = await axios.post("http://localhost:3000/score", {
        name: userName,
        score: score,
        date: new Date(),
      });

      console.log("Score enviado com sucesso", response.data);
    } catch (err) {
      console.error("Erro ao enviar score", err);
    }

    console.log("jogo finalizado");
    sair();
  };

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentItem]);

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
          {/* div cabeçalho verde */}
          <Cabecalho />

          {/* div para texto */}
          <div
            className="w-full h-3/4 bg-no-repeat bg-cover flex justify-center rounded-t-3xl"
            style={{ backgroundImage: `url(${bgJogo})` }}
          >
            {/* div auxiliar para centralizar */}
            <div className="w-[90%] flex flex-col">
              {/* div para título da página*/}
              <div className="w-full h-[20%] flex flex-row items-start justify-center">
                {/* div para score */}
                <div className="w-1/2 h-full flex flex-col justify-start pt-4 pl-4">
                  <h2 className="text-white font-bold text-2xl">{userName}</h2>
                  <h2 className="text-white font-semibold text-xl">
                    SCORE {score}
                  </h2>
                </div>

                {/* div para temporizador */}
                <div className="w-1/2 h-full flex flex-col items-end">
                  {/* div para relógio */}
                  <div className="w-full h-1/2 flex flex-row justify-end items-end">
                    <img src={relogio} className="w-10 h-10" />
                    <h2 className="text-white font-bold text-2xl pl-3">
                      {timer}
                    </h2>
                  </div>
                  <h1 className="font-extrabold text-white">||</h1>
                </div>
              </div>

              {/* div para container */}
              <div className="w-full h-[60%] flex flex-col items-center justify-center">
                {isPlaying ? (
                  <>
                    <div className="flex flex-col w-[90%] items-center justify-center">
                      <img
                        src={`/residuos/${currentItem.imagem}`}
                        className="w-44 h-44"
                      />
                      <h1 className="text-4xl text-white">
                        {currentItem.nome}
                      </h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center">
                      <h1 className="text-4xl text-white">O jogo acabou!</h1>
                      <button
                        onClick={finalizarJogo}
                        className="bg-blue-500 p-2 text-white rounded mt-5"
                      >
                        Finalizar e Enviar
                      </button>
                    </div>
                  </>
                )}
              </div>
              {/* div para rodape */}
              <div className="w-full h-[20%] flex flex-col justify-star items-center">
                {/* div para as lixeiras */}
                <div className="w-full h-[75%] flex flex-row justify-evenly items-center">
                  <button
                    className="h-full w-20"
                    onClick={() => handleLixeiraClick("amarelo")}
                  >
                    <img src={lixoAmarelo} className="w-5/6 h-5/6" />
                  </button>

                  <button
                    className="h-full w-20"
                    onClick={() => handleLixeiraClick("azul")}
                  >
                    <img src={lixoAzul} className="w-5/6 h-5/6" />
                  </button>

                  <button
                    className="h-full w-20"
                    onClick={() => handleLixeiraClick("vermelho")}
                  >
                    <img src={lixoVermelho} className="w-5/6 h-5/6" />
                  </button>

                  <button
                    className="h-full w-20"
                    onClick={() => handleLixeiraClick("verde")}
                  >
                    <img src={lixoVerde} className="w-5/6 h-5/6" />
                  </button>

                  <button
                    className="h-full w-20"
                    onClick={() => handleLixeiraClick("marrom")}
                  >
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
