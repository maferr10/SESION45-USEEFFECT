import { useState, useEffect } from "react";

export function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setContador((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);

    // cleanup para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cambiar título del documento cada vez que cambia el contador
  useEffect(() => {
    document.title = `Cambios: ${contador}`;
  }, [contador]);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Tamaño de la ventana</h1>
      <p>Ancho: {size.width}px</p>
      <p>Alto: {size.height}px</p>
      <h3>La ventana cambió {contador} veces</h3>
    </div>
  );
}