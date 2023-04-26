import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";
import { MdHome } from "react-icons/md";

const Login = () => {
  useTitle("Employee Login");

  const userRef = useRef();
  const errRef = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async () => {
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <PulseLoader color={"#FFF"} />;

  const content = (
    <section className="mt-10 rounded-xl border-2 shadow-lg border-blue-200 w-11/12 m-auto md:w-2/4">
      <header className="my-4">
        <h1 className="text-3xl text-center sm:text-4xl md:text-5xl pt-4 font-serif">
          Employee Login
        </h1>
      </header>
      <main className="flex flex-col w-11/12 m-auto">
        <p ref={errRef} className={errClass} aria-live="assertive">
          {errMsg}
        </p>

        <label
          htmlFor="username"
          className="my-4 text-lg sm:text-xl md:text-3xl"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          ref={userRef}
          value={username}
          onChange={handleUserInput}
          autoComplete="off"
          required
          className="border-2 border-sky-500 rounded-md py-2"
        />

        <label
          htmlFor="password"
          className="my-4 text-lg sm:text-xl md:text-3xl"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          onChange={handlePwdInput}
          value={password}
          required
          className="border-2 border-sky-500 rounded-md py-2"
        />
        <button
          onClick={handleSubmit}
          className="my-4 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md py-2 text-lg sm:text-xl md:text-3xl"
        >
          Sign In
        </button>
        <div>
          <input
            type="checkbox"
            id="persist"
            onChange={handleToggle}
            checked={persist}
            className="w-5 h-5"
          />
          <label
            htmlFor="persist"
            className="text-lg pl-2 sm:text-xl md:text-3xl"
          >
            Trust This Device
          </label>
        </div>
      </main>
      <footer className="py-4 flex items-center justify-around w-2/3 m-auto">
        <Link to="/">
          <MdHome size="50px" />
        </Link>
        <Link to="/" className="text-lg sm:text-xl md:text-3xl">
          {" "}
          Back to Home
        </Link>
      </footer>
    </section>
  );

  return content;
};
export default Login;
