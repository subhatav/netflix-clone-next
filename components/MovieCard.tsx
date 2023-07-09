import { useCallback } from "react";
import { useRouter } from "next/router";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

import { MovieCardProps } from "@/types";

import FavoriteButton from "@/components/FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  const router = useRouter();

  const { openModal } = useInfoModal();

  const redirectToWatch = useCallback(
    () => router.push(`/watch/${data.id}`),
    [router, data.id]
  );

  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw]">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className="
          cursor-pointer object-cover transition duration
          shadow-xl rounded-md group-hover:opacity-90
          sm:group-hover:opacity-0 delay-300 w-full h-[12vw]
        "
      />

      <div
        className="
          opacity-0 absolute top-0 z-10
          transition duration-300 delay-300
          w-full scale-0 invisible sm:visible
          group-hover:opacity-100
          group-hover:scale-110
          group-hover:-translate-y-[1vw]
        "
      >
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="
            cursor-pointer object-cover w-full h-[12vw]
            shadow-xl rounded-t-md transition duration
          "
        />

        <div
          className="
            z-10 bg-zinc-800 p-2 lg:p-4
            shadow-md rounded-b-md
            absolute w-full transition
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="
                cursor-pointer w-6 h-6 lg:w-10 lg:h-10
               bg-white rounded-full flex justify-center
                items-center transition hover:bg-neutral-300
              "
            >
              <BsFillPlayFill size={20} />
            </div>
            <FavoriteButton movieId={data.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
            >
              <BiChevronDown
                className="text-white group-hover/item:text-neutral-300"
                size={25}
              />
            </div>
          </div>

          <p className="text-white mt-3 md:mt-4 gap-3 text-sm md:text-base">
            2023 <span className="text-green-400 font-semibold">New</span>
          </p>
          <div className="flex flex-wrap mt-1 md:mt-2 gap-1 text-xs lg:text-sm">
            <span className="text-white">{data.genre}</span>
            <p className="text-green-400 font-semibold">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
