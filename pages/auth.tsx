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
    <div className="hero__background">
      <div className="hero__foreground">
        <nav className="hero__logo-container">
          <img
            src="/images/logo.png"
            alt="Netflix Logo"
            className="hero__logo"
          />
        </nav>

        <div className="auth__section-container">
          <div className="auth__section">
            <h2 className="auth__header">
              {variant === "login" ? "Sign In" : "Sign Up"}
            </h2>

            <div className="auth__inputs">
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
              className="auth__button"
            >
              {variant === "login" ? "Login" : "Register"}
            </button>

            <div className="auth__providers">
              <div
                onClick={() => signIn("google", { callbackUrl: "/profiles" })}
                className="auth__provider"
              >
                <FcGoogle size={32} />
              </div>
              <div
                onClick={() => signIn("github", { callbackUrl: "/profiles" })}
                className="auth__provider"
              >
                <FaGithub size={32} />
              </div>
            </div>

            <p className="auth__footer">
              {variant === "login"
                ? "Here for the first time?"
                : "Already have an account?"}
              <span onClick={toggleVariant} className="auth__link">
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
