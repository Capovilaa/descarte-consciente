import React, { useState, useEffect } from "react";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";
import BotaoDenuncia from "../components/botao-denuncia";
import "leaflet/dist/leaflet.css";

function Denuncia() {
  const navigate = useNavigate();

  function navegar(pagina) {
    navigate(pagina);
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
          <Cabecalho />

          <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
            <div className="w-[90%] flex flex-col">
              <div className="w-full h-[25%] flex flex-col items-start justify-center">
                <h1 className="text-[#334333] font-bold italic text-xl">
                  DENÚNCIA
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Viu algum ponto com lixo sendo descartado
                  <b>incorretamente</b>? Denuncie diretamente para autoridades
                  nessa página.
                </h2>
              </div>

              <div className="w-full h-[65%] flex flex-col items-center justify-center">
                <div className="w-full h-1/4">
                  <h2 className="text-[#334333] font-semibold text-lg">
                    Acesse canais de denúncias
                    <b> oficiais do governo </b>
                    para obter mais informações de como realizar a sua
                    <b> denúncia</b>.
                  </h2>
                </div>
                <div className="flex flex-col w-full h-3/4 items-center justify-around">
                  <BotaoDenuncia
                    textoBotao={"Ouvidoria geral"}
                    icon={"campinas.png"}
                    link={"https://ouvidoria.campinas.sp.gov.br/protocolo.php"}
                  />
                  <BotaoDenuncia
                    textoBotao={"Limpeza urbana"}
                    icon={"campinas.png"}
                    link={
                      "https://campinas.sp.gov.br/secretaria/servicos-publicos/pagina/limpeza-urbana-dlu-"
                    }
                  />
                  <BotaoDenuncia
                    textoBotao={"Denúncia ambiental"}
                    icon={"sp.png"}
                    link={"https://semil.sp.gov.br/denuncia-ambiental/"}
                  />
                </div>
              </div>

              <div className="w-full h-[10%] flex justify-start items-center">
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

export default Denuncia;
