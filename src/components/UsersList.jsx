/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const UsersList = ({ orderedData }) => {
  return (
    <div className="grid">
      {orderedData.map((data) => (
        <div key={data.id}>
          <div className="card p-5 rounded">
            <div>
              <Link to={`profile/${data.login}`} className="block">
                <div className="flex gap">
                  <div>
                    <img
                      src={data.avatar_url}
                      alt=""
                      width={100}
                      className="rounded-full"
                    />
                  </div>
                  <div className="break-all">
                    <p className="text-m bold">{data.login}</p>
                    <p>ID: {data.id}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
