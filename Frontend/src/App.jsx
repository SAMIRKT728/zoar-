import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import PracticaI from './layouts/Rol/Docente/Notas/PracticaI';

function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {

      if (route.collapse) {
        return getRoutes(route.collapse);
      } 
      if (route.route) {
        // Si la ruta tiene una ruta definida, la renderizamos directamente
        return (
          <Route
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      } else if (route.children) {
        // Si la ruta tiene hijos, llamamos recursivamente getRoutes para las rutas hijas
        return route.children.map((childRoute) => (
          <Route
            path={childRoute.route}
            element={childRoute.component}
            key={childRoute.key}
          />
        ));
      }
      return null;
    });

  return (
    <Routes>
      {getRoutes(routes)}
      <Route path="/practicaI" exact={true} element={<PracticaI/>} />
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default App;
