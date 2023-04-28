import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const Welcome = () => {
  const { username, isManager, isAdmin } = useAuth();

  useTitle(`Dashboard: ${username}`);

  const date = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);

  const content = (
    <section className="w-11/12 sm:w-1/2 m-auto border-2 my-10 shadow-md rounded-lg border-blue-300 font-semibold text-lg text-center">
      <p className="shadow-md rounded-md py-4">{today}</p>

      <h1 className="shadow-md rounded-md py-4">Welcome {username}!</h1>

      <p className="shadow-md rounded-md py-4">
        <Link to="/dash/notes">View techNotes</Link>
      </p>

      <p className="shadow-md rounded-md py-4">
        <Link to="/dash/notes/new">Add New techNote</Link>
      </p>

      {(isManager || isAdmin) && (
        <p className="shadow-md rounded-md py-4">
          <Link to="/dash/users">View User Settings</Link>
        </p>
      )}

      {(isManager || isAdmin) && (
        <p className="shadow-md rounded-md py-4">
          <Link to="/dash/users/new">Add New User</Link>
        </p>
      )}
    </section>
  );

  return content;
};
export default Welcome;
