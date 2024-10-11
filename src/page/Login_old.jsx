import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { Button } from "@material-tailwind/react";

export default function LoginOld() {
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
      <div className="flex h-dvh items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center py-8">
          <h1 className="text-4xl font-bold text-black">Rental PS</h1>
          <div className="mt-4 w-96">
            <div className="mt-8">
              <p className="text-left">Username</p>
              <input
                type="text"
                size="lg"
                className="placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:border-slate-400 hover:border-slate-300 mt-2 w-full rounded-md border-2 border-black bg-transparent px-4 py-2 text-lg shadow-sm transition duration-300 focus:shadow focus:outline-none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mt-8">
              <p className="text-left">Password</p>
              <input
                type="text"
                size="lg"
                className="placeholder:text-slate-400 text-slate-700 border-slate-200 ease focus:border-slate-400 hover:border-slate-300 mt-2 w-full rounded-md border-2 border-black bg-transparent px-4 py-2 text-lg shadow-sm transition duration-300 focus:shadow focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-4 flex items-start justify-start">
              <p className="mr-1">Dont have an account? </p>
              <Link to="/register" className="text-blue-500">
                Register
              </Link>
              <p className="ml-1">here </p>
            </div>
            <div className="m-2 mb-2 mt-3 flex items-start justify-start">
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
