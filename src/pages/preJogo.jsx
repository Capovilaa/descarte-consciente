import React, { useState, useEffect } from "react";
import Cabecalho from "../components/cabecalho";
import lixoGame from "../assets/lixoGame.png";
import InputVerde from "../components/inputVerde";
import BotaoPrincipal from "../components/botaoPrincipal";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PreJogo() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [open, setOpen] = useState(false);
  const [scores, setScores] = useState([]);

  function irJogo() {
    if (nome.length > 0) {
      navigate(`/jogo/${nome}/`);
    } else {
      alert("Insira seu nome para continuar");
    }
  }

  function voltar() {
    navigate("/reciclagem");
  }

  const fetchScores = async () => {
    try {
      const response = await axios.get(
        "https://usual-butterfly-smart-desc-3dd5546a.koyeb.app/score"
      );

      const sortedScores = response.data.sort((a, b) => b.score - a.score);
      setScores(sortedScores);
    } catch (error) {
      console.error("Erro ao buscar scores", error);
    }
  };

  useEffect(() => {
    if (open) {
      fetchScores();
    }
  }, [open]);

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
          {/* div cabeçalho verde */}
          <Cabecalho />

          {/* div para texto */}
          <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
            {/* div auxiliar para centralizar */}
            <div className="w-[90%] flex flex-col">
              {/* div para título da página*/}
              <div className="w-full h-[30%] flex flex-col items-start justify-center">
                <h1 className="text-[#334333] font-bold italic text-xl">
                  JOGO DE COLETA
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Resíduos aparecerão na sua tela, tente <b>descartá-lo </b>
                  corretamente, quanto mais rápido fizer isso,
                  <b> mais pontos</b> você ganhará!
                </h2>
              </div>

              {/* div para container */}
              <div className="w-full h-[60%] flex flex-col items-center">
                {!open ? (
                  <>
                    <div className="w-full h-[40%] flex items-center justify-center">
                      <img src={lixoGame} className="w-44 h-44" />
                    </div>

                    <div className="w-full h-[60%] flex flex-col items-center justify-evenly">
                      <InputVerde
                        propsPlaceholder={"Seu nome"}
                        set={setNome}
                        value={nome}
                      />
                      <BotaoPrincipal textoBotao="Jogar" funcao={irJogo} />
                    </div>
                  </>
                ) : (
                  <>
                    {/* Ranking Section */}
                    <div className="w-11/12 h-full overflow-auto p-4">
                      <h2 className="text-black text-2xl font-bold mb-4">
                        Ranking
                      </h2>
                      <ul className="space-y-4">
                        {scores.length > 0 ? (
                          scores.map((score, index) => (
                            <li
                              key={score.id}
                              className="bg-white p-4 rounded-lg shadow-lg"
                            >
                              <div className="flex justify-between items-center">
                                <span className="text-xl font-bold text-blue-500">
                                  {index + 1}°
                                </span>
                                <strong className="text-xl">
                                  {score.name}
                                </strong>
                                <span className="text-lg text-[#334333] font-bold">
                                  {score.score} pontos
                                </span>
                              </div>
                              <p className="text-sm text-gray-500">
                                {new Date(score.date).toLocaleString()}
                              </p>
                            </li>
                          ))
                        ) : (
                          <li className="text-black">
                            Nenhum score encontrado.
                          </li>
                        )}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              {/* div para rodape */}
              <div className="w-full h-[10%] flex justify-between items-center">
                <h1
                  className="text-xl text-[#334333] font-semibold"
                  onClick={!open ? () => voltar() : () => setOpen(false)}
                >
                  Voltar
                </h1>

                {!open ? (
                  <h1
                    className="text-xl text-[#334333] font-semibold"
                    onClick={() => setOpen(!open)}
                  >
                    Ranking
                  </h1>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreJogo;
