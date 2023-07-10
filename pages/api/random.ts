import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";
import serverAuth from "@/libs/serverAuth";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method !== "GET") {
      return response.status(405).end();
    }

    await serverAuth(request, response);

    const moviesCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * moviesCount);

    const randomMovies = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return response.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);

    return response.status(500).end();
  }
}
