import React, { useState } from "react";
import Cabecalho from "../components/cabecalho";
import lixoGame from "../assets/lixoGame.png";
import InputVerde from "../components/inputVerde";
import BotaoPrincipal from "../components/botaoPrincipal";
import { useNavigate } from "react-router-dom";

function PreJogo() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");

  function irJogo() {
    navigate(`/jogo/${nome}/`);
  }

  function irMenu() {
    navigate("/menu");
  }
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
                  Resíduos aparecerão na sua tela, tente <b>descartá-lo</b>
                  corretamente, quanto mais rápido fizer isso,
                  <b>mais pontos</b> você ganhará!
                </h2>
              </div>

              {/* div para container */}
              <div className="w-full h-[60%] flex flex-col">
                {/* div para imagem do lixo */}
                <div className="w-full h-[40%] flex items-center justify-center">
                  <img src={lixoGame} className="w-44 h-44" />
                </div>

                {/* div para botão e input @dev MUDAR AQUI PARA NÃO DEIXAR PASSAR O NOME PELA ROTA*/}
                <div className="w-full h-[60%] flex flex-col items-center justify-evenly">
                  <InputVerde
                    propsPlaceholder={"Seu nome"}
                    set={setNome}
                    value={nome}
                  />
                  <BotaoPrincipal textoBotao="Jogar" funcao={irJogo} />
                </div>
              </div>

              {/* div para rodape */}
              <div className="w-full h-[10%] flex justify-star items-center">
                <h1
                  className="text-xl text-[#334333] font-semibold"
                  onClick={() => irMenu()}
                >
                  Voltar
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreJogo;
