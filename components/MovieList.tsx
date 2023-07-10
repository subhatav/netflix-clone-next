import { isEmpty } from "lodash";

import { MovieListProps } from "@/types";

import MovieCard from "@/components/MovieCard";

const MovieList: React.FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="movie-list__container">
      <div>
        <p className="movie-list__title">{title}</p>

        <div className="movie-list__items">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
