import { useCallback } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

import useInfoModal from "@/hooks/useInfoModal";
import useBillBoard from "@/hooks/useBillBoard";
import PlayButton from "@/components/PlayButton";

const BillBoard = () => {
  const { data } = useBillBoard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative mb-10 h-[56.25vw]">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        className="h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        loop
        muted
      />

      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p
          className="
            h-full w-[50%] text-xl font-bold text-white
            drop-shadow-xl md:text-5xl lg:text-6xl
          "
        >
          {data?.title}
        </p>
        <p
          className="
            mt-3 w-[90%] text-sm text-white drop-shadow-xl
            md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]
          "
        >
          {data?.description}
        </p>

        <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
              flex w-auto flex-row items-center rounded-md
            bg-white bg-opacity-30 px-2 py-1 pr-3
              text-sm font-semibold text-white transition
              hover:bg-opacity-20 md:px-4 md:py-2 md:pr-4 lg:text-lg
            "
          >
            <InformationCircleIcon className="mr-2 w-6 md:w-8" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
