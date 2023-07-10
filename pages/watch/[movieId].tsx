import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="watcher__container">
      <nav className="watcher__navigation">
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="watcher__back-logo"
        />

        <p className="watcher__title-section">
          <span className="watcher__title">Watching</span> {data?.title}
        </p>
      </nav>

      <video
        src={data?.videoUrl}
        className="watcher__video"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
