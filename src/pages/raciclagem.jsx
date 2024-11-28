import React from "react";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";
import lixeiraVermelha from "../assets/lixeiraVermelha.png";
import lixeiraAmarela from "../assets/lixeiraAmarela.png";
import lixeiraAzul from "../assets/lixeiraAzul.png";
import lixeiraVerde from "../assets/lixeiraVerde.png";
import lixeiraMarrom from "../assets/lixeiraMarrom.jpg";
import bgJogo from "../assets/bgJogo.png";
import BotaoPrincipal from "../components/botaoPrincipal";

function Reciclagem() {
  const navigate = useNavigate();

  function navegar(pagina) {
    navigate(pagina);
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
              <div className="w-full h-[15%] flex flex-col items-start justify-center">
                <h1 className="text-[#334333] font-bold italic text-xl">
                  RECICLAGEM
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Aprenda um pouco mais sobre <b>reciclagem</b> e descarte
                  correto.
                </h2>
              </div>

              {/* div para container */}
              <div className="w-full h-[75%] overflow-y-auto border-t-[1px]">
                <h1 className="text-[#334333] font-bold text-xl mt-4">
                  Cores dos lixos
                </h1>
                <h2>
                  Os lixos possuem cores diferentes para ajudar a diferenciar o
                  que pode ou não ser descartado nele. Neste tópico explicaremos
                  sobre eles.
                </h2>

                {/* Plástico */}
                <h1 className="text-[#334333] font-bold text-xl mt-4">
                  Plástico
                </h1>
                <h2>
                  <p>
                    Este lixo é encontrado na cor <b>vermelhra</b>, todos tipos
                    de plásticos podem ser descartados aqui, como garrafas pet,
                    embalagens e lacres.
                  </p>
                </h2>
                <div className="w-full flex flex-row items-center justify-around">
                  <img src={lixeiraVermelha} className="w-30 h-30" />
                </div>

                {/* Metal */}
                <h1 className="text-[#334333] font-bold text-xl mt-4">Metal</h1>
                <h2>
                  <p>
                    Quando o recipiente possui a cor <b>amarela</b> é por causa
                    que nele apenas metais podem ser descartados, exemplo disso
                    são: latas, arames e tampas metálicas.
                  </p>
                  <p>
                    Esses podem conter fragmentos cortantes, por isso é preciso
                    tomar muito cuidado.
                  </p>
                </h2>
                <div className="w-full flex flex-row items-center justify-around">
                  <img src={lixeiraAmarela} className="w-30 h-30" />
                </div>

                {/* Papel */}
                <h1 className="text-[#334333] font-bold text-xl mt-4">Papel</h1>
                <h2>
                  <p>
                    Todo material de papel deve ser descartado aqui. Papelão,
                    cartolinas e sulfites são exemplos disso. A cpr dessa
                    lixeira é <b>azul</b>.
                  </p>
                </h2>
                <div className="w-full flex flex-row items-center justify-around">
                  <img src={lixeiraAzul} className="w-30 h-30" />
                </div>

                {/* Vidro */}
                <h1 className="text-[#334333] font-bold text-xl mt-4">Vidro</h1>
                <h2>
                  <p>
                    Representado pela cor <b>verde</b>, todos tipos de
                    recipientes em vidro são descartados aqui, assim como os
                    metais, são cortantes.
                  </p>
                  <p>
                    Envolvê-lo pode evitar acidentes indesejados com que opera
                    com ele.
                  </p>
                </h2>
                <div className="w-full flex flex-row items-center justify-around">
                  <img src={lixeiraVerde} className="w-28 h-28" />
                </div>

                {/* Orgânico */}
                <h1 className="text-[#334333] font-bold text-xl mt-4">
                  Orgânico
                </h1>
                <h2>
                  <p>
                    Apenas podem ser descartados aqui resíduos de origem animal
                    ou vegetal, esses passam por um processo de decomposição
                    natural.
                  </p>
                  <p>
                    Restos de folha, alimentos e ossos são depositados aqui.
                    Você pode descartar esses materiais citado em lixeiras de
                    cor <b>marrom</b>.
                  </p>
                </h2>
                <div className="w-full flex flex-row items-center justify-around">
                  <img src={lixeiraMarrom} className="w-28 h-2w-28" />
                </div>

                {/* div para preparação do jogo */}
                <div
                  className="bg-yellow-200 w-full h-full bg-no-repeat bg-cover flex flex-col items-center justify-around"
                  style={{ backgroundImage: `url(${bgJogo})` }}
                >
                  <div className="bg-white rounded-2xl w-5/6 h-3/6 flex flex-col items-center justify-center">
                    <p className="px-2 text-xl text-[#334333]">
                      Acesse nosso <b>jogo</b> para aplicar seu conhecimento
                      quanto ao <b>descarte</b> consciente.
                    </p>

                    <p className="pt-4 px-2 text-xl text-[#334333]">
                      Itens irão aparecer na tela, sua missão é escolher a
                      lixeira <b>correta</b> para ele.
                    </p>
                  </div>
                  <BotaoPrincipal
                    textoBotao={"JOGAR"}
                    funcao={() => navegar("/prejogo")}
                  />
                </div>
              </div>

              {/* div para rodape */}
              <div className="w-full h-[10%] flex justify-star items-center">
                <h1
                  className="text-xl text-[#334333] font-semibold"
                  onClick={() => navegar("/menu")}
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

export default Reciclagem;
