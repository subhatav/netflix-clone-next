import { useCallback, useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

import { InfoModalProps } from "@/types";

import PlayButton from "@/components/PlayButton";
import FavoriteButton from "@/components/FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState<boolean>(!!visible);

  const { movieId } = useInfoModal();
  const { data = {} } = useMovie(movieId);

  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);

    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className="info-modal__container">
      <div className="info-modal__section">
        <div
          className={`info-modal__box ${
            isVisible ? "scale-full" : "scale-zero"
          }`}
        >
          <div className="info-modal__header">
            <video
              src={data?.videoUrl}
              poster={data?.thumbnailUrl}
              className="info-modal__video"
              autoPlay
              loop
              muted
            />

            <button onClick={handleClose} className="info-modal__close">
              <XMarkIcon className="info-modal__close-icon" />
            </button>

            <div className="info-modal__preview">
              <p className="info-modal__title">{data?.title}</p>

              <div className="info-modal__buttons">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />

                <p className="info-modal__new-tag">New</p>
              </div>
            </div>
          </div>

          <div className="info-modal__primary">
            <div className="info-modal__metadata">
              <p className="metadata_genre">{data?.genre}</p>
              <p className="metadata_duration">{data?.duration}</p>
            </div>

            <p className="info-modal__description">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
