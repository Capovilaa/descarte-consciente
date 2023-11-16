import React from "react";

export default function CardMenu(props) {

    return (
        <>
            <button onClick={() =>props.funcao}>
                <div className="w-28 h-28 rounded-md bg-[#83AC8E] flex flex-col items-center justify-center">
                    <img className="w-3/5" src={props.img} />
                    <h1 className="text-white font-semibold">{props.descricao}</h1>
                </div>
            </button>
        </>
    )
}