import React from 'react';
import { useParams } from 'react-router-dom'; // Para obtener el ID del héroe de la URL
import HeroCard from '../components/HeroCard'; // Asegúrate de que la ruta sea correcta

const HeroPage = () => {
  const { heroId } = useParams(); // Obtén el ID del héroe desde los parámetros de la URL

  return (
    <div>
      <h1>Página del Héroe</h1>
      {/* Aquí puedes agregar el HeroCard o cualquier componente para mostrar más detalles del héroe */}
      <HeroCard heroId={heroId} /> {/* Pasa el ID del héroe al componente HeroCard */}
    </div>
  );
};

export default HeroPage;
