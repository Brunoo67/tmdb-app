import React from "react";
import { Movie } from "@/types/movie";
import './index.scss';
import StarRating from "../StarRating";

type Props = {
  movie: Movie;
  onClose: () => void;
};

export default function MovieModal({ movie, onClose }: Props) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className="modal-content">
          <div className="modal-left">
            <img
              className="modal-poster"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div className="modal-right">
            <h1 className="modal-title">{movie.title}</h1>
            <p className="modal-rating">
                <StarRating 
                    rating={movie.vote_average}
                />
            </p>
            <p className="modal-overview">
              {movie.overview || "Sem descrição disponível."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
