import React from 'react';
import './MovieCard.scss'

function MovieCard({poster, title, rating, descr, genres}) {
    const IMG_URL = 'https://image.tmdb.org/t/p/w300';
    return (
            <div className='card-container'>
            <img src={`${IMG_URL}${poster}`} alt={title} className='card-img'/>
            <div>
                <h2>{title}</h2>
                    <p className='rating-text'>Movie rating: {rating}</p>
                    <h3>Overview</h3>
                    <p>{descr}</p>
                    <h3>Genres</h3>
                    <ul className='genres-list'>{genres.map(({ id, name }) =>
                        <li key={id} className='genres-list_item'>{name}</li>)}
                    </ul>
            </div>
                    
            </div>
    );
};

export default MovieCard;