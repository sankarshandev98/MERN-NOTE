import { useState, useEffect } from "react";
import { useUpdateUserMutation, useDeleteUserMutation } from "./usersApiSlice";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../config/roles";
import { MdSave } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const USER_REGEX = /^[A-z]{3,20}$/;
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/;

const EditUserForm = ({ user }) => {
  const [updateUser, { isLoading, isSuccess, isError, error }] =
    useUpdateUserMutation();

  const [
    deleteUser,
    { isSuccess: isDelSuccess, isError: isDelError, error: delerror },
  ] = useDeleteUserMutation();

  const navigate = useNavigate();

  const [username, setUsername] = useState(user.username);
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [roles, setRoles] = useState(user.roles);
  const [active, setActive] = useState(user.active);

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    console.log(isSuccess);
    if (isSuccess || isDelSuccess) {
      setUsername("");
      setPassword("");
      setRoles([]);
      navigate("/dash/users");
    }
  }, [isSuccess, isDelSuccess, navigate]);

  const onUsernameChanged = (e) => setUsername(e.target.value);
  const onPasswordChanged = (e) => setPassword(e.target.value);

  const onRolesChanged = (e) => {
    const values = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRoles(values);
  };

  const onActiveChanged = () => setActive((prev) => !prev);

  const onSaveUserClicked = async (e) => {
    if (password) {
      await updateUser({ id: user.id, username, password, roles, active });
    } else {
      await updateUser({ id: user.id, username, roles, active });
    }
  };

  const onDeleteUserClicked = async () => {
    await deleteUser({ id: user.id });
  };

  const options = Object.values(ROLES).map((role) => {
    return (
      <option key={role} value={role}>
        {" "}
        {role}
      </option>
    );
  });

  let canSave;
  if (password) {
    canSave =
      [roles.length, validUsername, validPassword].every(Boolean) && !isLoading;
  } else {
    canSave = [roles.length, validUsername].every(Boolean) && !isLoading;
  }

  const errClass = isError || isDelError ? "errmsg" : "offscreen";
  const validUserClass = !validUsername ? "form__input--incomplete" : "";
  const validPwdClass =
    password && !validPassword ? "form__input--incomplete" : "";
  const validRolesClass = !Boolean(roles.length)
    ? "form__input--incomplete"
    : "";

  const errContent = (error?.data?.message || delerror?.data?.message) ?? "";

  const content = (
    <>
      <p className={errClass}>{errContent}</p>

      <div
        className="border 2 flex flex-col m-auto gap-4 items-center justify-between w-11/12 sm:w-1/2 shadow-md border-blue-300 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-center py-4 font-sans text-3xl">Edit User</h2>
        <section className="flex w-11/12 justify-around">
          <label
            className="form__label text-center font-sans text-2xl"
            htmlFor="username"
          >
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
            Password: <span className="nowrap">[empty = no change]</span>{" "}
            <span className="nowrap">[4-12 chars incl. !@#$%]</span>
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
          <label
            className="form__label form__checkbox-container text-center pl-2 font-sans text-xl"
            htmlFor="user-active"
          >
            ACTIVE:
            <input
              className="form__checkbox py-2 px-4 border-blue-300 border rounded-md"
              id="user-active"
              name="user-active"
              type="checkbox"
              checked={active}
              onChange={onActiveChanged}
            />
          </label>
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
        <button
          className="icon-button border-2 flex m-auto items-center py-1 px-10 mt-5 rounded-md border-blue-300"
          title="Save"
          onClick={onSaveUserClicked}
          disabled={!canSave}
        >
          <MdSave size="40px" /> <p>Save It !</p>
        </button>
        <button
          className="icon-button border-2 flex m-auto items-center py-1 px-10 mb-5 rounded-md border-blue-300"
          title="Delete"
          onClick={onDeleteUserClicked}
        >
          <FaTrash size="40px" />
        </button>
      </div>
    </>
  );

  return content;
};
export default EditUserForm;
