import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import DottedSeparator from "@/components/atoms/dotted-separator";
import React, { useMemo } from "react";
import { Link } from "react-router";

type Props = {
  children: React.ReactNode;
  formType: "login" | "signup";
};

const FormContainer = ({ children, formType }: Props) => {
  const isLogin = formType === "login";

  const config = useMemo(
    () => ({
      title: isLogin ? "Welcome back!" : "Sign Up",
      buttonLabel: isLogin ? "Log in" : "Sign up",
      buttonLink: isLogin ? "/login" : "/signup",
      haveAccount: isLogin
        ? "Don&apos;t have an account?"
        : "I already have an account",
    }),
    [isLogin]
  );

  return (
    <Card className="shadow-none border-none md:w-[487px] size-full">
      <CardHeader className="flex justify-center items-center p-7 text-center">
        <CardTitle className="text-2xl">{config.title}</CardTitle>

        {!isLogin && (
          <CardDescription>
            By signing up, you agree to our{" "}
            <Link to={"/"} className="decoration-blue-700 hover:underline">
              <span className="text-blue-700">Privacy Policy</span>
            </Link>{" "}
            and{" "}
            <Link to={"/"} className="decoration-blue-700 hover:underline">
              <span className="text-blue-700">Terms of Service</span>
            </Link>
          </CardDescription>
        )}
      </CardHeader>

      <div className="mb-2 px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7">{children}</CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="flex flex-col gap-y-4 p-7">
        <Button variant={"secondary"} size={"lg"} className="w-full">
          Login with Google
        </Button>

        <Button variant={"secondary"} size={"lg"} className="w-full">
          Login with Github
        </Button>
      </CardContent>

      <div className="px-7">
        <DottedSeparator />
      </div>

      <CardContent className="p-7 text-center">
        <p>
          {config.haveAccount}{" "}
          <Link
            to={config.buttonLink}
            className="decoration-blue-700 hover:underline"
          >
            <span className="text-blue-700">{config.buttonLabel}</span>
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};

export default FormContainer;
