import { useState } from "react";
import FormularioProducto from "../FormularioProducto/FormularioProducto";

function FormularioContainer() {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
  });

  const [imagenFile, setImagenFile] = useState(null);
  const manejarCambioImagen = (evento) => {
    setImagenFile(evento.target.files[0]);
  };

  const [cargando, setCargando] = useState(false);

  const manejarCambio = (evento) => {
    const { name, value } = evento.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };
  const manejarEnvio = async (evento) => {
    evento.preventDefault();

    if (!imagenFile) {
      alert("Por favor, seleccioná una imagen para el producto.");
      return;
    }

    setCargando(true);

    const apiKey = import.meta.env.VITE_IMGBB_KEY; // ← poné la tuya acá

    const formData = new FormData();
    formData.append("image", imagenFile);

    try {
      console.log("Subiendo imagen a Imgbb...");

      const respuestaImgbb = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        },
      );

      const datosImgbb = await respuestaImgbb.json();

      if (datosImgbb.success) {
        console.log("Imagen subida con éxito. URL:", datosImgbb.data.url);

        const productoCompleto = {
          id: Date.now(),
          ...datosForm,
          precio: Number(datosForm.precio),
          stock: Number(datosForm.stock),
          urlImagen: datosImgbb.data.url,
        };

        console.log("Producto completo:", productoCompleto);
      } else {
        throw new Error("La subida de la imagen falló.");
      }
    } catch (error) {
      console.error("Error en el proceso de envío:", error);
      alert("Hubo un error al subir la imagen. Intentá de nuevo.");
    } finally {
      setCargando(false);
    }
  };

  return (
    <FormularioProducto
      datosForm={datosForm}
      manejarCambio={manejarCambio}
      manejarEnvio={manejarEnvio}
      manejarCambioImagen={manejarCambioImagen}
      cargando={cargando}
    />
  );
}

export default FormularioContainer;
