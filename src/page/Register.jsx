import React, { useState } from "react";
import { Card, CardBody, Button, Input } from "@material-tailwind/react";
import bg_ps from "../assets/img/bg_ps.jpg";
import { Link, useNavigate } from "react-router-dom";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { toast } from "sonner";
import { apiPublic } from "../utils/ApiService";
import BackgroundAnimation from "../component/backgorund/BackgroundAnimation";
function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "",
    password: "",
    email: "",
    no_wa: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.username === "") {
      return toast.error("Username is required");
    } else if (input.email === "") {
      return toast.error("Email is required");
    } else if (input.no_wa === "") {
      return toast.error("Whatsapp Number is required");
    } else if (input.password === "") {
      return toast.error("Password is required");
    } else if (input.no_wa.startsWith("+62") === false) {
      return toast.error("Whatsapp Number must start with +62");
    }
    setLoading(true);

    apiPublic
      .post("register", input)
      .then((res) => {
        toast.success(res.data.message);
        console.log(res.data.message);
        navigate("/login");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="flex h-dvh items-center justify-center bg-[#0F122E]">
      <BackgroundAnimation />
      <Card
        className="relative z-10 h-[70vh] w-[70vw] rounded-xl !shadow-cyan"
        color="transparent"
      >
        <CardBody className="m-0 flex h-full w-full justify-between p-0">
          <div className="h-full w-full flex-1">
            <img
              src={bg_ps}
              alt=""
              className="h-full w-full rounded-s-xl object-cover"
            />
          </div>
          <div className="flex flex-1 items-center rounded-e-xl bg-white">
            <div className="py-auto my-auto w-full p-20">
              <h1 className="text-center text-5xl font-bold text-blue-500">
                Register Account
              </h1>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mt-16">
                  <p className="font-semibold text-blue-500">Username</p>
                  <div className="mx-auto w-full">
                    <Input
                      type="text"
                      size="lg"
                      placeholder="Username"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                      labelProps={{
                        className: "hidden",
                      }}
                      onChange={(e) =>
                        setInput({ ...input, username: e.target.value })
                      }
                      value={input.username}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-blue-500">Email</p>
                  <div className="mx-auto w-full">
                    <Input
                      type="email"
                      size="lg"
                      placeholder="Email"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                      labelProps={{
                        className: "hidden",
                      }}
                      onChange={(e) =>
                        setInput({ ...input, email: e.target.value })
                      }
                      value={input.email}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-blue-500">Email</p>
                  <div className="mx-auto w-full">
                    <Input
                      type="text"
                      size="lg"
                      placeholder="Whatsapp Number (ex: +62xxxxxxxxxx)"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                      labelProps={{
                        className: "hidden",
                      }}
                      onChange={(e) =>
                        setInput({ ...input, no_wa: e.target.value })
                      }
                      value={input.no_wa}
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold text-blue-500">Password</p>
                  <div className="relative mx-auto flex w-full">
                    <Input
                      type={showPassword ? "text" : "password"}
                      size="lg"
                      placeholder="Password"
                      className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-blue-900 focus:ring-blue-100"
                      labelProps={{
                        className: "hidden",
                      }}
                      onChange={(e) =>
                        setInput({ ...input, password: e.target.value })
                      }
                      value={input.password}
                    />
                    {showPassword ? (
                      <HiEye
                        size={24}
                        className="!absolute right-3 top-3"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <HiEyeSlash
                        size={24}
                        className="!absolute right-3 top-3"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  fullWidth="full"
                  className="mt-10 flex justify-center gap-2 bg-blue-500"
                  loading={loading}
                >
                  Create Account
                </Button>
                <p className="mt-2 text-center text-sm">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="text-blue-400 underline underline-offset-2"
                  >
                    Sign in here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Register;
