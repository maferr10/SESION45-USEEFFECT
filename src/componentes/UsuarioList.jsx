import { useState, useEffect } from "react";

export default function UsuarioList() {
  const [nombre, setNombre] = useState("");
  const [usuarios, setUsuarios] = useState(() => {
    // ✅ Cargar nombres guardados en localStorage (si los hay)
    const datosGuardados = localStorage.getItem("usuarios");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  // ✅ Guardar automáticamente en localStorage cuando cambie la lista
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);

  const agregarUsuario = (e) => {
    e.preventDefault();
    if (nombre.trim() === "") return; // Evita nombres vacíos
    setUsuarios([...usuarios, nombre.trim()]);
    setNombre(""); // Limpiar el input
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto", textAlign: "center" }}>
      <h1>Lista de Usuarios</h1>

      <form onSubmit={agregarUsuario} style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          value={nombre}
          placeholder="Escribe un nombre..."
          onChange={(e) => setNombre(e.target.value)}
          style={{
            padding: "0.5rem",
            width: "70%",
            marginRight: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#28a745a",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Guardar
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {usuarios.map((user, index) => (
          <li
            key={index}
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
