import { NextApiRequest, NextApiResponse } from "next";

import bcrypt from "bcrypt";

import prismadb from "@/libs/prismadb";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    if (request.method !== "POST") {
      return response.status(405).end();
    }

    const { email, name, password } = request.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return response.status(422).json({ error: "Email is already taken!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });

    return response.status(200).json(user);
  } catch (error) {
    return response
      .status(400)
      .json({ error: `Something went wrong: ${error}` });
  }
}
