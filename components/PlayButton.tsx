import { useRouter } from "next/router";
import { PlayIcon } from "@heroicons/react/24/solid";

import { PlayButtonProps } from "@/types";

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="play-btn__button"
    >
      <PlayIcon className="play-btn__icon" />
      <span className="play-btn__text">Play</span>
    </button>
  );
};

export default PlayButton;
