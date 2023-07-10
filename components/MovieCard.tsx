import { useRouter } from "next/router";
import { useCallback } from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import { MovieCardProps } from "@/types";

import useInfoModal from "@/hooks/useInfoModal";
import FavoriteButton from "@/components/FavoriteButton";

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();

  const { openModal } = useInfoModal();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );

  return (
    <div className="movie-card__container group">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        alt="Movie"
        className="movie-card__default-img"
        draggable={false}
      />

      <div className="movie-card__hovered">
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt="Movie"
          className="movie-card__hovered-img"
          draggable={false}
        />

        <div className="movie-card__primary">
          <div className="movie-card__buttons">
            <button onClick={redirectToWatch} className="movie-card__play-btn">
              <PlayIcon className="movie-card__play-icon" />
            </button>
            <FavoriteButton movieId={data.id} />
            <button
              onClick={() => openModal(data?.id)}
              className="movie-card__info-btn group/item"
            >
              <ChevronDownIcon className="movie-card__info-icon" />
            </button>
          </div>

          <p className="movie-card__intro">
            2023 <span className="movie-card__new-tag">New</span>
          </p>
          <div className="movie-card__metadata">
            <span className="metadata_genre">{data.genre}</span>
            <p className="metadata_duration">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
