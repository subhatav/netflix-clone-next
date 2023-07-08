import { NextApiRequest, NextApiResponse } from "next";
import { without } from "lodash";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method === "POST") {
      const { currentUser } = await serverAuth(request, response);

      const { movieId } = request.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Movie ID is invalid!");
      }

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email ?? "",
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });

      return response.status(200).json(updatedUser);
    }

    if (request.method === "DELETE") {
      const { currentUser } = await serverAuth(request, response);

      const { movieId } = request.body;

      const existingMovie = await prismadb.movie.findUnique({
        where: {
          id: movieId,
        },
      });

      if (!existingMovie) {
        throw new Error("Movie ID is invalid!");
      }

      const updatedFavorites = without(currentUser.favoriteIds, movieId);

      const updatedUser = await prismadb.user.update({
        where: {
          email: currentUser.email ?? "",
        },
        data: {
          favoriteIds: updatedFavorites,
        },
      });

      return response.status(200).json(updatedUser);
    }

    return response.status(405).end();
  } catch (error) {
    console.log(error);

    return response.status(500).end();
  }
}
