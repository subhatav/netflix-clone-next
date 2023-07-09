import { useCallback, useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import axios from "axios";

import Input from "@/components/Input";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Auth = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/profiles");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div
      className="
        relative h-full w-full bg-[url('/images/hero.jpg')]
        bg-cover bg-fixed bg-center bg-no-repeat
      "
    >
      <div className="h-full w-full bg-black lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Netflix Logo" />
        </nav>

        <div className="flex justify-center">
          <div
            className="
              mt-2 w-full self-center rounded-md bg-black
              bg-opacity-70 px-16 py-16 lg:w-2/5 lg:max-w-md
            "
          >
            <h2 className="mb-8 text-4xl font-semibold text-white">
              {variant === "login" ? "Sign In" : "Sign Up"}
            </h2>

            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  type="text"
                  value={name}
                  label="Username"
                  onChange={(event: any) => setName(event.target.value)}
                />
              )}
              <Input
                id="email"
                type="email"
                value={email}
                label="Email"
                onChange={(event: any) => setEmail(event.target.value)}
              />
              <Input
                id="password"
                type="password"
                value={password}
                label="Password"
                onChange={(event: any) => setPassword(event.target.value)}
              />
            </div>

            <button
              onClick={variant === "login" ? login : register}
              className="
                mt-10 w-full rounded-md bg-red-600 py-3
              text-white transition hover:bg-red-700
              "
            >
              {variant === "login" ? "Login" : "Register"}
            </button>

            <div className="mt-8 flex flex-row items-center justify-center gap-4">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="
                  flex h-10 w-10 cursor-pointer items-center justify-center
                  rounded-full bg-white transition hover:opacity-80
                "
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="
                  flex h-10 w-10 cursor-pointer items-center justify-center
                  rounded-full bg-white transition hover:opacity-80
                "
              >
                <FaGithub size={32} />
              </div>
            </div>

            <p className="mt-10 text-neutral-500">
              {variant === "login"
                ? "Here for the first time?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="ml-1 cursor-pointer text-white hover:underline"
              >
                {variant === "login"
                  ? "Create an account."
                  : "Use the account."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
