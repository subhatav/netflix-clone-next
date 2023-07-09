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
    <div
      className="
        fixed inset-0 z-50 transition duration-300 bg-black bg-opacity-80
        flex justify-center items-center overflow-x-hidden overflow-y-auto
      "
    >
      <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
        <div
          className={`${
            isVisible ? "scale-100" : "scale-0"
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className="relative h-96">
            <video
              poster={data?.thumbnailUrl}
              src={data?.videoUrl}
              className="w-full h-full object-cover brightness-[60%]"
              autoPlay
              loop
              muted
            />

            <div
              onClick={handleClose}
              className="
                cursor-pointer absolute top-3 right-3 w-10 h-10 rounded-full
                bg-black bg-opacity-70 flex items-center justify-center
              "
            >
              <XMarkIcon className="text-white w-6" />
            </div>

            <div className="absolute left-10 bottom-[10%]">
              <p className="text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-8">
                {data?.title}
              </p>

              <div className="flex flex-row gap-4 items-center">
                <PlayButton movieId={data?.id} />
                <FavoriteButton movieId={data?.id} />
                <p className="text-green-400 font-semibold text-lg">New</p>
              </div>
            </div>
          </div>

          <div className="px-12 py-8">
            <div className="flex flex-row items-center gap-2 mb-6">
              <p className="text-white text-lg">{data?.genre}</p>
              <p className="text-green-400 font-semibold text-lg">
                {data?.duration}
              </p>
            </div>

            <p className="text-white">{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
