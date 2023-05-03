import { useState, useEffect } from "react";
import { useAddNewUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import useTitle from "../../hooks/useTitle";
import { MdSave } from "react-icons/md";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const NewUserForm = () => {
  useTitle("techNotes: New User");

  const [addNewUser, { isLoading, isSuccess, isError, error }] =
    useAddNewUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(["Employee"]);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    if (isSuccess) {
      setUsername("");
      setPassword("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions, //HTMLCollection
      (option) => option.value
    );
    setRoles(values);
  };

  const canSave =
    [roles.length, validUsername, validPassword].every(Boolean) && !isLoading;

  const onSaveUserClicked = async () => {
    if (canSave) {
      await addNewUser({ username, password, roles });
    }
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass = !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>

      <div className="border 2 flex flex-col m-auto gap-4 items-center justify-between w-11/12 sm:w-1/2 shadow-md border-blue-300 rounded-lg">
        <h2 className="text-center py-4 font-sans text-3xl">
          Create a New User
        </h2>
        <section className="flex w-11/12 justify-around">
          <label className="text-center font-sans text-2xl" htmlFor="username">
            Username: <span className="nowrap">[3-20 letters]</span>
          </label>
          <input
            className={
              `form__input ${validUserClass}` &&
              "rounded-lg border-2 border-blue-300"
            }
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            value={username}
            onChange={onUsernameChanged}
          />
        </section>
        <section className="py-4 flex items-center w-11/12 justify-around">
          <label className="text-center font-sans text-2xl" htmlFor="password">
            Password: <span className="nowrap">[4-12 chars incl. !@#$%]</span>
          </label>
          <input
            className={
              `form__input ${validPwdClass}` &&
              "rounded-lg border-2 border-blue-300 ml-1"
            }
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={onPasswordChanged}
          />
        </section>

        <section className="pb-6 flex items-center w-11/12 justify-around">
          <label className="text-center pl-2 font-sans text-xl" htmlFor="roles">
            ASSIGNED ROLES:
          </label>
          <select
            id="roles"
            name="roles"
            className={
              `form__select ${validRolesClass}` &&
              "py-2 px-4 border-blue-300 border rounded-md"
            }
            multiple={true}
            size="3"
            value={roles}
            onChange={onRolesChanged}
          >
            {options}
          </select>
        </section>
      </div>
      <button
        className="icon-button border-2 flex m-auto items-center py-1 px-10 mt-5 rounded-md border-blue-300"
        title="Save"
        disabled={!canSave}
        onClick={onSaveUserClicked}
      >
        <MdSave size="40px" /> <p>Save It !</p>
      </button>
    </>
  );

  return content;
};
export default NewUserForm;
