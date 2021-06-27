import React from 'react';

function MovieCard({poster, title, rating, overview, genres}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    return (
                  <div>
                    <img src={`${IMG_URL}/${poster}`} alt={title} />
                    <h2>{title}</h2>
                    <p>Movie rating: {rating}</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>{genres.map(({ id, name }) =>
                        <li key={id}>{name}</li>)}
                    </ul>
                </div>
    );
};

export default MovieCard;