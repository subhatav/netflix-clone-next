import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";

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
      <BsFillPlayFill className="mr-1" size={25} />
      Play
    </button>
  );
};

export default PlayButton;