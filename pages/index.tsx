import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

import useInfoModal from "@/hooks/useInfoModal";
import useMovies from "@/hooks/useMovies";
import useFavorites from "@/hooks/useFavorites";
import InfoModal from "@/components/InfoModal";
import NavBar from "@/components/NavBar";
import BillBoard from "@/components/BillBoard";
import MovieList from "@/components/MovieList";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Home = () => {
  const { data: movies = [] } = useMovies();
  const { data: favorites = [] } = useFavorites();

  const { isOpen, closeModal } = useInfoModal();

  return (
    <div>
      <InfoModal visible={isOpen} onClose={closeModal} />

      <NavBar />
      <BillBoard />

      <div className="movie-lists__container">
        <MovieList title="Trending Now" data={movies} />
        <MovieList title="My Favorites" data={favorites} />
      </div>
    </div>
  );
};

export default Home;
