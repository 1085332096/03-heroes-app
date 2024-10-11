// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                setLoading(true);

                const url = publisher === 'Marvel Comics'
                    ? `https://gateway.marvel.com/v1/public/characters?apikey=3c7f68300d584524276632578543f230`
                    : `https://dc-api-url.com/v1/public/heroes`; // Cambia esto por la URL de la API de DC

                const response = await fetch(url);
                const data = await response.json();

                setHeroes(data.data.results); // Ajusta según la estructura de la respuesta de Marvel
            } catch (error) {
                console.error('Error al obtener los héroes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroes();
    }, [publisher]);

    if (loading) {
        return <p>Cargando héroes...</p>;
    }

    return (
        <div className="hero-list">
            {heroes.length > 0 ? (
                heroes.map(hero => (
                    <HeroCard key={hero.id} hero={hero} />
                ))
            ) : (
                <p>No se encontraron héroes.</p>
            )}
        </div>
    );
};

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired,
};

export default HeroList;
