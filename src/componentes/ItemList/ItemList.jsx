import Item from "../Item/Item";

function ItemList({ productos }) {
  return (
    <div className="catalogo">
      {productos.map((prod) => (
        <Item
          key={prod.id}
          imagen={prod.imagen}
          nombre={prod.nombre}
          precio={prod.precio}
        />
      ))}
    </div>
  );

  
}

export default ItemList;