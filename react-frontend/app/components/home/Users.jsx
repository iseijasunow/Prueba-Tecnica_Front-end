import { getUser } from "@/app/utils/endpoints";
import Link from "next/link";

const Users = ({ data }) => {
  return (
    <div className="relative rounded-xl overflow-auto px-24">
      <div className="shadow-sm overflow-hidden">
        <table className="border-collapse table-fixed w-full text-sm">
          <thead className="bg-zinc-400 p-5">
            <tr>
              <th className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-zinc-100 text-left mt-3">
                Id
              </th>
              <th className="border-b font-medium p-4 pt-0 pb-3 text-zinc-100 text-left">
                Usuario
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((user) => {
              return (
                <tr key={user.id}>
                  <td className="border-b border-zinc-100 p-4 pl-8 text-zinc-500">
                    {user.id}
                  </td>
                  <td className="border-b border-zinc-100 p-4 text-zinc-500">
                    <Link
                      className="text-blue-500 hover:text-blue-800 hover:border-b-2 hover:border-blue-800 hover:p-1 hover:text-md transition-all"
                      href={`/user/${user.login}`}
                    >
                      {user.login}
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
