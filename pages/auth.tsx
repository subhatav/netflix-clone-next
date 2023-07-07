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
    <div className="relative w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>

        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
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
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Login" : "Register"}
            </button>

            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
              >
                <FaGithub size={32} />
              </div>
            </div>

            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? "Here for the first time?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === "login"
                  ? "Create an account."
                  : "Login with account."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
