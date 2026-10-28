import "./App.css";
import Layout from "./componentes/layout/Layout";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import FormularioContainer from "./componentes/FormularioContainer/FormularioContainer";
import ProductoDetalle from "./componentes/ProductoDetalle/ProductoDetalle";

function App() {
  return (
    
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer mensaje="Nuestros productos" />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/admin" element={<FormularioContainer />} />
          <Route path="*" element={<h2>Página en construcción</h2>} />
        </Route>
      
        
      </Routes>
    
  );
}

export default App;
