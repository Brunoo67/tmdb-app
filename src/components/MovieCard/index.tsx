import { Movie } from "@/types"

export interface Props {
    movie: Movie
}

export default function MovieCard(props: Props) {
    const movie = props.movie;
    return (
        <li className='movie-card'>
            <div className="movie-poster">
                <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                />
            </div>
            <div className="movie-info">

            </div>
                <p>
                    {movie.title}
                </p>
                <p className='description'>
                    {movie.overview}
                </p>
                
                <p>  
                    {movie.vote_average}
                </p>
            </li>
    )
}