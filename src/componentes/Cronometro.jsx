import { useState, useEffect } from "react";

export default function Cronometro() {
  const [tiempo, setTiempo] = useState(0);     // almacena los segundos
  const [activo, setActivo] = useState(false); // indica si está corriendo o pausado

  useEffect(() => {
    let intervalo = null;

    if (activo) {
      // si está activo, arranca el intervalo
      intervalo = setInterval(() => {
        setTiempo((t) => t + 1); // suma 1 cada segundo
      }, 1000);
    } else {
      // si no está activo, detén el intervalo
      clearInterval(intervalo);
    }

    // cleanup: limpiar intervalo al desmontar o cuando "activo" cambie
    return () => clearInterval(intervalo);
  }, [activo]);

  const resetear = () => {
    setTiempo(0);
    setActivo(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Cronómetro</h2>
      <h1>{tiempo} s</h1>

      <button onClick={() => setActivo(true)}>Iniciar</button>
      <button onClick={() => setActivo(false)} style={{ marginLeft: "10px" }}>
        Pausar
      </button>
      <button onClick={resetear} style={{ marginLeft: "10px" }}>
        Resetear
      </button>
    </div>
  );
}