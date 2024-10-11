import React from "react";
import { HeroList } from '../components'; // Asegúrate de que la ruta sea correcta

const MarvelPage = () => {
    return (
        <div>
            <h1>Página de Marvel</h1>
            <HeroList publisher='Marvel Comics' /> {/* Pasa la propiedad publisher correctamente */}
        </div>
    );
};

export default MarvelPage; // Asegúrate de exportar el componente como default
