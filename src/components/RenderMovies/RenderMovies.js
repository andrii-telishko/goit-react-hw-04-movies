import React from 'react';

export default function RenderMovies({ movies }) {
    return (
        <ul>{movies.map(movie =>
            (<li key={movie.id}>{movie.title ? movie.title : movie.name}</li>)
        )}</ul>
    );
};