import { NextApiRequest, NextApiResponse } from "next";

import serverAuth from "@/libs/serverAuth";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method !== "GET") {
      return response.status(405).end();
    }

    const { currentUser } = await serverAuth(request, response);

    return response.status(200).json(currentUser);
  } catch (error) {
    console.log(error);

    return response.status(500).end();
  }
}
