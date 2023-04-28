import { useGetUsersQuery } from "./usersApiSlice";
import User from "./User";
import useTitle from "../../hooks/useTitle";
import PulseLoader from "react-spinners/PulseLoader";

const UsersList = () => {
  useTitle("techNotes: Users List");

  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery("usersList", {
    pollingInterval: 60000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;

  if (isLoading) content = <PulseLoader color={"#FFF"} />;

  if (isError) {
    content = <p className="errmsg">{error?.data?.message}</p>;
  }

  if (isSuccess) {
    const { ids } = users;

    const tableContent =
      ids?.length && ids.map((userId) => <User key={userId} userId={userId} />);

    content = (
      <div className="w-11/12 sm:w-1/2 border-2 m-auto mt-10 rounded-lg border-blue-300">
        <table className="w-full table-auto border-separate border-spacing-2">
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
                Roles
              </th>
              <th
                scope="col"
                className="p-3 font-semibold tracking-wide text-left"
              >
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="">{tableContent}</tbody>
        </table>
      </div>
    );
  }

  return content;
};
export default UsersList;
