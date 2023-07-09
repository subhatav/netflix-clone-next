import { useRouter } from "next/router";
import { PlayIcon } from "@heroicons/react/24/solid";

import { PlayButtonProps } from "@/types";

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
        flex w-auto flex-row items-center rounded-md
      bg-white px-2 py-1 pr-3 font-semibold transition
      hover:bg-neutral-300 md:px-3 md:py-2 md:pr-4
      "
    >
      <PlayIcon className="mr-2 w-6 text-black md:w-8" />
      <span className="text-sm lg:text-lg">Play</span>
    </button>
  );
};

export default PlayButton;
