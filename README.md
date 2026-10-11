# 🌱 Soraya de la Huerta

E-commerce de insumos para huerta urbana: semillas, plantines, macetas, sustratos y herramientas.

Proyecto desarrollado para el curso de **React JS** de Talento Tech — comisión 26243.

---

## Tecnologías

- **React 18** — componentes funcionales y hooks
- **Vite** — entorno de desarrollo y build
- **CSS Modules** — estilos con alcance por componente
- **API de Imgbb** — alojamiento de las imágenes de producto

---

## Funcionalidades

- Catálogo de productos cargado dinámicamente desde un JSON
- Estados de carga y manejo de errores en la obtención de datos
- Selector de cantidad por producto
- Marcado de favoritos
- Formulario de alta de productos con subida de imagen a Imgbb
- Footer con datos de contacto y equipo de trabajo
- Diseño responsive con CSS Grid

---

## Cómo levantar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/edutopoarg/ecommence-react2026.git
cd ecommence-react2026

# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

### Variable de entorno

El formulario de carga necesita una clave de la API de Imgbb. Creá un archivo `.env` en la raíz del proyecto:

```
VITE_IMGBB_KEY=tu_clave_de_imgbb
```

La clave se obtiene gratis en [imgbb.com/api](https://imgbb.com/api). El archivo `.env` no se versiona.

---

## Estructura

```
src/
├── assets/                    imágenes del sitio
├── componentes/
│   ├── layout/                Header, Footer y Layout
│   ├── ItemListContainer/     obtiene los productos
│   ├── ItemList/              renderiza la lista
│   ├── Item/                  tarjeta de producto
│   ├── FormularioContainer/   lógica del formulario
│   ├── FormularioProducto/    presentación del formulario
│   ├── EquipoContainer/       obtiene los datos del equipo
│   └── TarjetaContacto/       tarjeta de cada integrante
├── App.jsx
└── main.jsx

public/data/                   productos.json y equipo.json
```

---

## Arquitectura

El proyecto sigue el patrón **Container / Presentational**: los componentes `Container` se ocupan de obtener los datos y manejar el estado, mientras que los de presentación solo reciben props y renderizan. Eso mantiene la lógica separada de la interfaz y permite reutilizar los componentes visuales.

---

   🔗 **[Ver el sitio publicado](https://mi-ecommence-react-obregon.netlify.app)**
   
## Autor

**Eduardo Obregón** — Talento Tech 2026
