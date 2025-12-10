'use client';

import { useEffect, useState } from 'react';
import './index.scss'

import axios from 'axios';
import { Movie } from '@/types';
import MovieCard from '../MovieCard';



export default  function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        getMovies();
    }, [])
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
            console.log(response.data.results);
        })
    }

    getMovies();

    return (
        <ul className="movie-list">
            {movies.map((movie) =>
                <MovieCard
                    key={movie.id}
                    movie={movie}
                />
            )}
        
        </ul>
    );
};