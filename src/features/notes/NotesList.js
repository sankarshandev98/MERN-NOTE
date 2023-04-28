import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const NotesList = () => {
  useTitle("techNotes: Notes List");

  const { username, isManager, isAdmin } = useAuth();

  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery("notesList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids, entities } = notes;

    let filteredIds;
    if (isManager || isAdmin) {
      filteredIds = [...ids];
    } else {
      filteredIds = ids.filter(
        (noteId) => entities[noteId].username === username
      );
    }

    const tableContent =
      ids?.length &&
      filteredIds.map((noteId) => <Note key={noteId} noteId={noteId} />);

    content = (
      <div className="w-11/12 sm:w-1/2 border-2 m-auto mt-10 rounded-lg border-blue-300">
        <table>
          <thead className="border-2 border-blue-500 bg-slate-200">
            <tr>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Username
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Created
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Updated
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Title
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Owner
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Edit
              </th>
            </tr>
          </thead>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    );
  }

  return content;
};
export default NotesList;
