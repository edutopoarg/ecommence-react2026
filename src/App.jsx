import "./App.css";
import Layout from "./componentes/layout/Layout";
import { Routes, Route } from "react-router-dom";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import FormularioContainer from "./componentes/FormularioContainer/FormularioContainer";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="Nuestros productos" />} />
        <Route path="/admin" element={<FormularioContainer />} />
        <Route path="*" element={<h2>Página en construcción</h2>} />
      </Routes>
    </Layout>
  );
}

export default App;
