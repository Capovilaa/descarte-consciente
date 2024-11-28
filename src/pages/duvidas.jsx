import React, { useState, useRef } from "react";
import Cabecalho from "../components/cabecalho";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import BotaoPrincipal from "../components/botaoPrincipal";
import emailjs from "emailjs-com";

function Duvidas() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [duvida, setDuvida] = useState("");

  function navegar(pagina) {
    navigate(pagina);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nome || !email || !duvida) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const templateParams = {
      from_name: nome,
      from_email: email,
      message: duvida,
    };

    emailjs
      .send(
        "service_lhsiveq",
        "template_zdam4c5",
        templateParams,
        "ieZsdwNWp0dlsJkJh"
      )
      .then(
        (result) => {
          console.log("E-mail enviado com sucesso", result.text);
          alert("Sua dúvida foi enviada com sucesso!");
          setDuvida("");
          setEmail("");
          setNome("");
        },
        (error) => {
          console.error("Erro ao enviar o e-mail:", error.text);
          alert("Houve um erro ao enviar sua dúvida. Tente novamente.");
        }
      );
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full h-screen flex flex-col bg-gradient-to-r from-[#1FA75D] to-[#207C52]">
        <Cabecalho />

        <div className="w-full h-3/4 bg-white flex justify-center rounded-t-3xl">
          <div className="w-[90%] flex flex-col">
            <div className="w-full h-[15%] flex flex-col items-start justify-center">
              <h1 className="text-[#334333] font-bold italic text-xl">
                DÚVIDAS
              </h1>
              <h2 className="text-[#334333] font-semibold text-lg">
                Tem alguma <b>dúvida ou questão</b> que não foi sanada? Nos
                contate para tratá-la!
              </h2>
            </div>

            {/* Formulário com Inputs e Textarea */}
            <div className="w-full h-[75%] flex flex-col items-center justify-center">
              <form
                onSubmit={sendEmail}
                className="flex flex-col space-y-4 w-full h-4/6 justify-center"
              >
                <input
                  type="text"
                  placeholder="Informe seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  className="h-12 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1FA75D] focus:border-[#1FA75D]"
                />

                <input
                  type="email"
                  placeholder="Informe seu e-mail para contato"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1FA75D] focus:border-[#1FA75D]"
                />

                <textarea
                  placeholder="Digite sua dúvida"
                  value={duvida}
                  onChange={(e) => setDuvida(e.target.value)}
                  className="h-32 p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1FA75D] focus:border-[#1FA75D]"
                />
                <div className="w-full h-2/6 flex items-end justify-center">
                  {/* Passando o evento para a função */}
                  <BotaoPrincipal
                    textoBotao="Enviar"
                    funcao={(e) => sendEmail(e)}
                  />
                </div>
              </form>
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
  );
}

export default Duvidas;
