import PropTypes from 'prop-types';

const HeroCard = ({ hero }) => {
    return (
        <div className="hero-card">
            <img src={`${hero.thumbnail.path}/standard_large.${hero.thumbnail.extension}`} alt={hero.name} />
            <h2>{hero.name}</h2>
            <p>{hero.description || "Descripción no disponible."}</p>
            <a href={`https://www.marvel.com/characters/${hero.id}`} target="_blank" rel="noopener noreferrer">Más info ...</a>
        </div>
    );
};

HeroCard.propTypes = {
    hero: PropTypes.shape({
        thumbnail: PropTypes.shape({
            path: PropTypes.string.isRequired,
            extension: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default HeroCard;
