import { useRouter } from "next/router";
import { PlayIcon } from "@heroicons/react/24/solid";

import { PlayButtonProps } from "@/types";

const PlayButton: React.FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="
       bg-white py-1 md:py-2 px-2 md:px-3 pr-3 md:pr-4 w-auto
        flex flex-row items-center hover:bg-neutral-300
        transition rounded-md text-sm lg:text-lg font-semibold
      "
    >
      <PlayIcon className="w-6 md:w-8 text-black mr-2" />
      Play
    </button>
  );
};

export default PlayButton;
