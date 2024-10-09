import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { Button } from "@material-tailwind/react";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/rental");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <div className="h-dvh flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center py-8 w-full">
          <h1 className="text-4xl font-bold text-black">Rental PS</h1>
          <div className="w-96 mt-4">
            <div className="mt-8">
              <p className="text-left">Username</p>
              <input
                type="text"
                size="lg"
                className="w-full mt-2 px-4 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow border-black border-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mt-8">
              <p className="text-left">Password</p>
              <input
                type="text"
                size="lg"
                className="w-full mt-2 px-4 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-lg border-slate-200 rounded-md transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow border-black border-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 items-start justify-start flex">
              <p className="mr-1">Dont have an account? </p>
              <Link to="/register" className=" text-blue-500">
                Register
              </Link>
              <p className="ml-1">here </p>
            </div>
            <div className=" items-start justify-start flex">
              <Button
                color="black"
                size="md"
                className="mt-4"
                onClick={() => {
                  onLogin();
                }}
              >
                Login
              </Button>
            </div>
            {/* <Link to="/register" className="mt-4 text-blue-500">
              Register
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
