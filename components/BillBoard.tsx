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
    <div className="bill-board__container">
      <video
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
        className="bill-board__video"
        autoPlay
        loop
        muted
      />

      <div className="bill-board__section">
        <p className="bill-board__title">{data?.title}</p>
        <p className="bill-board__description">{data?.description}</p>

        <div className="bill-board__buttons">
          <PlayButton movieId={data?.id} />
          <button onClick={handleOpenModal} className="bill-board__info-btn">
            <InformationCircleIcon className="bill-board__info-icon" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
