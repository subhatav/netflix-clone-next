import { useCallback } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

import useInfoModal from "@/hooks/useInfoModal";
import useBillBoard from "@/hooks/useBillboard";
import PlayButton from "@/components/PlayButton";

const BillBoard = () => {
  const { data } = useBillBoard();
  const { openModal } = useInfoModal();

  const handleOpenModal = useCallback(() => {
    openModal(data?.id);
  }, [openModal, data?.id]);

  return (
    <div className="relative h-[56.25vw] mb-10">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        autoPlay
        loop
        muted
      />

      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl w-[50%] h-full lg:text-6xl font-bold drop-shadow-xl">
          {data?.title}
        </p>
        <p className="text-white text-sm md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {data?.description}
        </p>

        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <PlayButton movieId={data?.id} />
          <button
            onClick={handleOpenModal}
            className="
              font-semibold rounded-md text-sm lg:text-lg
            bg-white text-white bg-opacity-30 transition
              px-2 md:px-4 py-1 md:py-2 pr-3 md:pr-4 w-auto
              items-center flex flex-row hover:bg-opacity-20
            "
          >
            <AiOutlineInfoCircle className="mr-2" size={25} />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
