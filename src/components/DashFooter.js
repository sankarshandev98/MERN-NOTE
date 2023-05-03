import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdHome } from "react-icons/md";

const DashFooter = () => {
  const { username, status } = useAuth();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onGoHomeClicked = () => navigate("/dash");

  let goHomeButton = null;
  if (pathname !== "/dash") {
    goHomeButton = (
      <button
        className="border-2 w-1/4 rounded-md border-blue-400 flex justify-center m-auto shadow-md my-3 py-3"
        title="Home"
        onClick={onGoHomeClicked}
      >
        <MdHome size="40px" />
      </button>
    );
  }

  const content = (
    <footer className="mt-10 border-2 py-3 px-4 text-center rounded-lg border-blue-300 w-11/12 sm:w-1/2 mb-4 m-auto font-semibold text-lg shadow-md">
      {goHomeButton}
      <div className="flex justify-between my-3">
        <p>Current User:</p>
        <p>{username}</p>
      </div>
      <div className="flex justify-between my-3">
        <p>Status:</p>
        <p>{status}</p>
      </div>
    </footer>
  );
  return content;
};
export default DashFooter;
