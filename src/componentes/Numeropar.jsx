import { useState, useEffect } from "react";

export function Numeropar() {
  // Estado para guardar el número que escribe el usuario
  const [numero, setNumero] = useState("");
  // Estado para guardar si es par o impar
  const [resultado, setResultado] = useState(null);

  // useEffect: se ejecuta cada vez que cambia "numero"
  useEffect(() => {
    if (numero !== "") {
      const num = parseInt(numero);

      // Validamos si es par o impar
      if (num % 2 === 0) {
        setResultado("El número es PAR ✅");
      } else {
        setResultado("El número es IMPAR ❌");
      }
    } else {
      setResultado(null); // si no hay número, no mostramos nada
    }
  }, [numero]); // <- se ejecuta cuando cambia "numero"

  // Guardar lo que el usuario escribe
  const handleChange = (e) => {
    setNumero(e.target.value);
  };

  // Botón de confirmación (aunque ya se calculó en useEffect)
  const handleConfirmar = () => {
    alert(`Confirmado: ${resultado}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Verificar número par</h2>

      <input
        type="number"
        placeholder="Escribe un número"
        value={numero}
        onChange={handleChange}
      />

      <button onClick={handleConfirmar} style={{ marginLeft: "10px" }}>
        Confirmar
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3>Resultado:</h3>
        {resultado ? <p>{resultado}</p> : <p>Escribe un número</p>}
      </div>
    </div>
  );
}