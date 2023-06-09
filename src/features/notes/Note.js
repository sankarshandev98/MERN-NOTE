import { MdEditDocument } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useGetNotesQuery } from "./notesApiSlice";
import { memo } from "react";

const Note = ({ noteId }) => {
  const { note } = useGetNotesQuery("notesList", {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const updated = new Date(note.updatedAt).toLocaleString("en-US", {
      day: "numeric",
      month: "long",
    });

    const handleEdit = () => navigate(`/dash/notes/${noteId}`);

    return (
      <div className="w-11/12 sm:w-1/2 border-2 m-auto my-4">
        <tr className="table__row">
          <td className="table__cell note__status">
            {note.completed ? (
              <span className="note__status--completed">Completed</span>
            ) : (
              <span className="note__status--open">Open</span>
            )}
          </td>
          <td className="table__cell note__created">{created}</td>
          <td className="table__cell note__updated">{updated}</td>
          <td className="table__cell note__title">{note.title}</td>
          <td className="table__cell note__username">{note.username}</td>

          <td className="table__cell">
            <button className="icon-button table__button" onClick={handleEdit}>
              <MdEditDocument size="40px" />
            </button>
          </td>
        </tr>
      </div>
    );
  } else return null;
};

const memoizedNote = memo(Note);

export default memoizedNote;
