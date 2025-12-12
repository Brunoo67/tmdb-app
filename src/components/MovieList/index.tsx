'use client';

import { useEffect, useState } from 'react';
import './index.scss'

import axios from 'axios';
import { Movie } from '@/types/movie';
import MovieCard from '../MovieCard';
import MovieModal from '../MovieModal';


export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

    useEffect(() => {
        getMovies();
    }, []);

    const getMovies = () => {
        axios({
            method: 'get',
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'fdc3408d220c51242736bdcbc7c5e351',
                language: 'pt-BR'
            }
        }).then(response => {
            setMovies(response.data.results);
        });
    };


    function handleSelectMovie(movie: Movie) {
    console.log("Filme selecionado:", movie);
    setSelectedMovie(movie);
}

    return (
        <>
            <ul className="movie-list">
                {movies.map((movie) =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onSelectMovie={handleSelectMovie}
                    />
                )}
            </ul>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}

        </>
    );
};
