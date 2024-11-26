import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";

function PontosColeta() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const pontosDescarte = [
    {
      id: 1,
      nome: "Ecoponto 1",
      lat: -23.5505,
      lng: -46.6333,
      imagem: "duvida",
    },
    {
      id: 2,
      nome: "Ecoponto 2",
      lat: -23.5525,
      lng: -46.6345,
      imagem: "excla",
    },
    { id: 3, nome: "Ecoponto 3", lat: -23.553, lng: -46.635, imagem: "mapa" },
    {
      id: 4,
      nome: "Ecoponto 4",
      lat: -23.554,
      lng: -46.636,
      imagem: "reciclagem",
    },
    { id: 5, nome: "Ecoponto 5", lat: -23.555, lng: -46.637, imagem: "zap" },
  ];
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
                  ECOPONTOS
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Busque pontos de <b>descarte próximos</b> de sua localização.
                </h2>
              </div>

              {/* div para container */}
              <div className="w-full h-[75%]">
                <LoadScript googleMapsApiKey="SUA_CHAVE_API_AQUI">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={{ lat: -23.5505, lng: -46.6333 }}
                    zoom={13}
                  >
                    {pontosDescarte.map((ponto) => (
                      <Marker
                        key={ponto.id}
                        position={{ lat: ponto.lat, lng: ponto.lng }}
                      >
                        <InfoWindow>
                          <div>
                            <img
                              src={require(`../assets/${ponto.imagem}Point.png`)}
                              alt={ponto.nome}
                              className="w-10 h-10"
                            />
                            <p>{ponto.nome}</p>
                          </div>
                        </InfoWindow>
                      </Marker>
                    ))}
                  </GoogleMap>
                </LoadScript>
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

export default PontosColeta;
