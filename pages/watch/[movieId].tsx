import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav
        className="
          text-white w-full p-4 z-10 gap-6 fixed
          items-center flex flex-row bg-opacity-70
        "
      >
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="w-6 pt-1.5 transition cursor-pointer hover:opacity-80"
        />

        <p className="text-3xl font-bold">
          <span className="font-light">Watching</span> {data?.title}
        </p>
      </nav>

      <video
        src={data?.videoUrl}
        className="w-full h-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
