import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import useMovie from "@/hooks/useMovie";

const Watch = () => {
  const router = useRouter();

  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black text-white">
      <nav
        className="
          fixed z-10 ml-3 flex w-full flex-row
          items-center gap-6 bg-opacity-70 p-4
        "
      >
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="w-6 cursor-pointer pt-1.5 transition hover:opacity-80"
        />

        <p className="text-3xl font-bold">
          <span className="font-light">Watching</span> {data?.title}
        </p>
      </nav>

      <video
        src={data?.videoUrl}
        className="h-full w-full"
        autoPlay
        controls
      ></video>
    </div>
  );
};

export default Watch;
