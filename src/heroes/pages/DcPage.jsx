import React from "react";
import { HeroList } from '../components'; 

const DcPage = () => {
    return (
        <div>
            <h1>Página de DC</h1>
            {/* HeroList renderizará los héroes basados en la propiedad publisher */}
            <HeroList publisher='DC Comics' /> 
        </div>
    );
};

export default DcPage;


