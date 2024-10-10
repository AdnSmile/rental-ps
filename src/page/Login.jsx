import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
  Input,
  ButtonGroup,
} from "@material-tailwind/react";

import bg_ps from "../assets/img/bg_ps.jpg";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="flex h-dvh items-center justify-center bg-[#0F122E]">
      <div className="wrapper">
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <Card
        className="relative z-10 h-[70vh] w-[70vw] rounded-xl shadow-box-cyan"
        color="transparent"
      >
        <CardBody className="m-0 flex h-full w-full justify-between overflow-hidden p-0">
          <div className="h-full w-full flex-1">
            <img
              src={bg_ps}
              alt=""
              className="h-full w-full rounded-s-xl object-cover"
            />
          </div>
          <div className="flex-1 rounded-e-xl bg-white">
            <div className="p-20">
              <h1 className="text-center text-6xl font-semibold tracking-wide text-blue-500">
                Rental PS
              </h1>
              <div className="mx-auto mt-16 w-full">
                <Input
                  type="email"
                  size="lg"
                  placeholder="Email Address"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              <div className="mx-auto mt-6 w-full">
                <Input
                  type="password"
                  size="lg"
                  placeholder="Password"
                  className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                />
              </div>
              <p className="mt-2 text-end text-sm">
                Dont't have account?{" "}
                <Link className="text-blue-400">Sign up here</Link>
              </p>
              <Button fullWidth="full" className="mt-10 bg-blue-500">
                Login
              </Button>
            </div>
          </div>
        </CardBody>
        <CardFooter className="m-0 p-0"></CardFooter>
      </Card>
    </div>
  );
}

export default Login;
