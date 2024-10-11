// src/heroes/routes/HeroesRoutes.jsx
import React from "react";
import { DcPage, MarvelPage, SearchPage, HeroPage } from '../pages'; // Asegúrate de que la ruta sea correcta

const HeroesRoutes = () => {
    return (
        <div>
            <DcPage />
            <MarvelPage />
            <SearchPage />
            <HeroPage />
        </div>
    );
};

export default HeroesRoutes;
