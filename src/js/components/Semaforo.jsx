import React, { useState } from "react";
import "./Semaforo.css";

const Semaforo = () => {
    const [color, setColor] = useState("red");

    return (
        <div className="miSemaforo">
            <div 
                onClick={() => setColor("red")} 
                className={`luzRoja ${color === "red" ? "encendido" : ""}`}
            ></div>

            <div 
                onClick={() => setColor("orange")} 
                className={`luzNaranja ${color === "orange" ? "encendido" : ""}`}
            ></div>

            <div 
                onClick={() => setColor("green")} 
                className={`luzVerde ${color === "green" ? "encendido" : ""}`}
            ></div>
        </div>
    );
};

export default Semaforo;