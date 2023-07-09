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
    <div className="col-span group relative h-[12vw] bg-zinc-900">
      <img
        onClick={redirectToWatch}
        src={data.thumbnailUrl}
        alt="Movie"
        draggable={false}
        className="
          duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl
          transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0
        "
      />

      <div
        className="
          invisible absolute top-0 z-10 w-full scale-0 opacity-0
          transition delay-300 duration-300 group-hover:-translate-y-[1vw]
          group-hover:scale-110 group-hover:opacity-100 sm:visible
        "
      >
        <img
          onClick={redirectToWatch}
          src={data.thumbnailUrl}
          alt="Movie"
          draggable={false}
          className="
            duration h-[12vw] w-full cursor-pointer
            rounded-t-md object-cover shadow-xl transition
          "
        />

        <div
          className="
            absolute z-10 w-full rounded-b-md
          bg-zinc-800 p-2 shadow-md transition lg:p-4
          "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={redirectToWatch}
              className="
                flex h-6 w-6 cursor-pointer items-center
                justify-center rounded-full bg-white
                transition hover:bg-neutral-300 lg:h-10 lg:w-10
              "
            >
              <PlayIcon className="ml-0.5 w-4 text-black lg:w-6" />
            </div>
            <FavoriteButton movieId={data.id} />
            <div
              onClick={() => openModal(data?.id)}
              className="
                group/item ml-auto flex h-6 w-6 cursor-pointer items-center
                justify-center rounded-full border-2 border-white
                transition hover:border-neutral-300 lg:h-10 lg:w-10
              "
            >
              <ChevronDownIcon
                className="
                  mt-0.5 w-4 text-white group-hover/item:text-neutral-300 lg:w-6
                "
              />
            </div>
          </div>

          <p className="mt-3 gap-3 text-sm text-white md:mt-4 md:text-base">
            2023 <span className="font-semibold text-green-400">New</span>
          </p>
          <div className="mt-1 flex flex-wrap gap-1 text-xs md:mt-2 lg:text-sm">
            <span className="text-white">{data.genre}</span>
            <p className="font-semibold text-green-400">{data.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
