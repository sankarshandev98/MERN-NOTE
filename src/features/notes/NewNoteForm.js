import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAddNewNoteMutation } from "./notesApiSlice";
import { MdSave } from "react-icons/md";

const NewNoteForm = ({ users }) => {
  const [addNewNote, { isLoading, isSuccess, isError, error }] =
    useAddNewNoteMutation();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(users[0].id);

  useEffect(() => {
    if (isSuccess) {
      setTitle("");
      setText("");
      setUserId("");
      navigate("/dash/notes");
    }
  }, [isSuccess, navigate]);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onTextChanged = (e) => setText(e.target.value);
  const onUserIdChanged = (e) => setUserId(e.target.value);

  const canSave = [title, text, userId].every(Boolean) && !isLoading;

  const onSaveNoteClicked = async () => {
    if (canSave) {
      await addNewNote({ user: userId, title, text });
    }
  };

  const options = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {" "}
        {user.username}
      </option>
    );
  });

  const errClass = isError ? "errmsg" : "offscreen";
  const validTitleClass = !title ? "form__input--incomplete" : "";
  const validTextClass = !text ? "form__input--incomplete" : "";

  const content = (
    <>
      <p className={errClass}>{error?.data?.message}</p>
      <div className="border 2 flex flex-col m-auto gap-4 items-center justify-between w-11/12 shadow-md border-blue-300 rounded-lg">
        <h2 className="text-center py-4 font-sans text-3xl">
          Create a New Note
        </h2>

        <section className="flex">
          <label className="text-center font-sans text-2xl" htmlFor="title">
            Title:
          </label>
          <input
            className={
              `form__input ${validTitleClass}` &&
              "rounded-lg border-2 border-blue-300"
            }
            id="title"
            name="title"
            type="text"
            autoComplete="off"
            value={title}
            onChange={onTitleChanged}
          />
        </section>
        <section className="py-4 flex items-center justify-between">
          <label className="text-center font-sans text-2xl" htmlFor="text">
            Text:
          </label>
          <textarea
            className={
              `form__input form__input--text ${validTextClass}` &&
              "rounded-lg border-2 border-blue-300 ml-1"
            }
            id="text"
            name="text"
            value={text}
            onChange={onTextChanged}
          />
        </section>
        <section className="pb-6 flex items-center w-full justify-around">
          <label
            className="text-center pl-2 font-sans text-xl"
            htmlFor="username"
          >
            ASSIGNED TO:
          </label>
          <select
            id="username"
            name="username"
            className="py-2 px-4 border-blue-300 border rounded-md"
            value={userId}
            onChange={onUserIdChanged}
          >
            {options}
          </select>
        </section>
      </div>
      <button
        className="icon-button border-2 flex m-auto items-center py-1 px-10 mt-5 rounded-md border-blue-300"
        title="Save"
        disabled={!canSave}
        onClick={onSaveNoteClicked}
      >
        <MdSave size="40px" /> <p>Save It !</p>
      </button>
    </>
  );

  return content;
};

export default NewNoteForm;
