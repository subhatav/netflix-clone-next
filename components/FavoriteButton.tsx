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
    <div
      onClick={toggleFavorites}
      className="
        cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10
        border-white border-2 rounded-full flex transition
        justify-center items-center hover:border-neutral-300
      "
    >
      <Icon
        className="
        text-white w-4 lg:w-6 group-hover/item:text-neutral-300
        "
      />
    </div>
  );
};

export default FavoriteButton;
