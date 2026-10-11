function FormularioProducto({
  datosForm,
  manejarCambio,
  manejarEnvio,
  manejarCambioImagen,
  cargando
}) {
  return (
    <form onSubmit={manejarEnvio}>
      <h3>Agregar nuevo producto</h3>

      <div>
        <label>Nombre del producto:</label>
        <input
          type="text"
          placeholder="Ej: Semillas de albahaca"
          name="nombre"
          value={datosForm.nombre}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Precio:</label>
        <input
          type="number"
          placeholder="Ej: 1200"
          name="precio"
          value={datosForm.precio}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Stock:</label>
        <input
          type="number"
          placeholder="Ej: 15"
          name="stock"
          value={datosForm.stock}
          onChange={manejarCambio}
        />
      </div>

      <div>
        <label>Imagen:</label>
        <input type="file" accept="image/*" onChange={manejarCambioImagen} />
      </div>

      <button type="submit" disabled={cargando}>
  {cargando ? "Subiendo..." : "Guardar producto"}
</button>
    </form>
  );
}

export default FormularioProducto;
