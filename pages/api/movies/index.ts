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

    const movies = await prismadb.movie.findMany();

    return response.status(200).json(movies);
  } catch (error) {
    console.log({ error });

    return response.status(500).end();
  }
}
