
import { useState, useEffect } from "react";
import TarjetaContacto from "../TarjetaContacto/TarjetaContacto";
import styles from "./EquipoContainer.module.css";
function EquipoContainer() {
  const [equipo, setEquipo] = useState([]);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/equipo.json")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("No se pudo cargar la información del equipo");
        }
        return respuesta.json();
      })
      .then((datos) => {
        setEquipo(datos);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);
  if (cargando) {
    return <p>Cargando equipo, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className={styles.seccion} >
      <h4>Nuestro equipo</h4>
      <div className={styles.equipo}>
        {equipo.map((persona) => (
          <TarjetaContacto
            key={persona.id}
            nombre={persona.nombre}
            puesto={persona.puesto}
            email={persona.email}
            foto={persona.foto}
          />
        ))}
      </div>
    </div>
  );
}

export default EquipoContainer;
