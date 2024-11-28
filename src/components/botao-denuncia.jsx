function BotaoDenuncia({ textoBotao, icon, link }) {
  const redirect = () => {
    window.location.href = link;
  };

  return (
    <>
      <button
        className="bg-white drop-shadow-2xl rounded-2xl flex items-center justify-between w-4/6 h-16"
        onClick={redirect}
      >
        <img src={`/residuos/${icon}`} className="h-12 w-12 object-contain" />
        <h1 className="text-[#334333] font-extrabold text-lg flex-1 text-center">
          {textoBotao}
        </h1>
      </button>
    </>
  );
}
export default BotaoDenuncia;
