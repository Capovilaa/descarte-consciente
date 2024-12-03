import React from "react";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import insta from "../assets/insta.png";
import zap from "../assets/zap.png";

function BatePapo() {
  const navigate = useNavigate();

  function navegar(pagina) {
    navigate(pagina);
  }

  const redirect = (link) => {
    window.location.href = link;
  };

  return (
    <>
      <div className="w-full h-screen flex flex-col">
        <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
          <Cabecalho />

          <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
            <div className="w-[90%] flex flex-col">
              <div className="w-full h-[25%] flex flex-col items-start justify-center">
                <h1 className="text-[#334333] font-bold italic text-xl">
                  BATE PAPO
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Entre no <b>grupo</b> do seu <b>bairro</b> para conversarem
                  sobre o assunto, encontrar pessoas que recolham materiais e
                  dar uma fofocada.
                </h2>
              </div>

              <div className="w-full h-[65%] flex flex-row items-center justify-evenly">
                <img
                  src={insta}
                  onClick={() =>
                    redirect("https://www.instagram.com/smartdesc/")
                  }
                  className="w-24 h-24"
                ></img>

                <img
                  src={zap}
                  onClick={() =>
                    redirect("https://chat.whatsapp.com/EkQJq8v7afVLMsLP1WKA2k")
                  }
                  className="w-24 h-24"
                ></img>
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

export default BatePapo;
