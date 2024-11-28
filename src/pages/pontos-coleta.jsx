import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    } else {
      reject("Geolocalização não suportada");
    }
  });
};

function PontosColeta() {
  const [position, setPosition] = useState(null);
  const [pontosProximos, setPontosProximos] = useState([]);
  const navigate = useNavigate();

  const buscarEcopontos = async (lat, lng) => {
    const raio = 15000;
    const url = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:${raio},${lat},${lng})[amenity=trash];out;`;

    try {
      const response = await axios.get(url);
      const resultados = response.data.elements;

      const pontos = resultados.map((ponto, index) => ({
        id: index,
        nome: ponto.tags.name || "Ecoponto sem nome",
        lat: ponto.lat,
        lng: ponto.lon,
        imagem: "duvida",
      }));

      setPontosProximos(pontos);
    } catch (error) {
      console.error("Erro ao buscar ecopontos:", error);
    }
  };

  useEffect(() => {
    getLocation()
      .then((position) => {
        const { latitude, longitude } = position.coords;
        setPosition({ lat: latitude, lng: longitude });
        buscarEcopontos(latitude, longitude);
      })
      .catch((error) => {
        console.error("Erro ao obter a localização:", error);
      });
  }, []);

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
              <div className="w-full h-[15%] flex flex-col items-start justify-center">
                <h1 className="text-[#334333] font-bold italic text-xl">
                  ECOPONTOS
                </h1>
                <h2 className="text-[#334333] font-semibold text-lg">
                  Busque pontos de <b>descarte próximos</b> de sua localização.
                </h2>
              </div>

              <div className="w-full h-[75%]">
                {position ? (
                  <MapContainer
                    center={[position.lat, position.lng]}
                    zoom={13}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    <Marker
                      position={[position.lat, position.lng]}
                      icon={L.icon({
                        iconUrl:
                          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                      })}
                    >
                      <Popup>Você está aqui!</Popup>
                    </Marker>

                    {pontosProximos.map((ponto) => (
                      <Marker key={ponto.id} position={[ponto.lat, ponto.lng]}>
                        <Popup>
                          <div>
                            <img
                              src={`../assets/${ponto.imagem}Point.png`}
                              alt={ponto.nome}
                              className="w-10 h-10"
                            />
                            <p>{ponto.nome}</p>
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                ) : (
                  <div>Carregando mapa...</div>
                )}
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

export default PontosColeta;
