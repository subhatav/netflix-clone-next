import { useCallback, useMemo } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/outline";

import axios from "axios";

import { FavoriteButtonProps } from "@/types";

import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavorites } = useFavorites();

  const { data: currentUser, mutate } = useCurrentUser();

  const isFavorite = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const toggleFavorites = useCallback(async () => {
    let response;

    if (isFavorite) {
      response = await axios.delete("/api/favorite", { data: { movieId } });
    } else {
      response = await axios.post("/api/favorite", { movieId });
    }

    const updatedFavorites = response?.data?.favoriteIds;

    mutate({
      ...currentUser,
      favoriteIds: updatedFavorites,
    });

    mutateFavorites();
  }, [movieId, isFavorite, currentUser, mutate, mutateFavorites]);

  const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <button onClick={toggleFavorites} className="fav-btn__button group/item">
      <Icon className="fav-btn__icon" />
    </button>
  );
};

export default FavoriteButton;
