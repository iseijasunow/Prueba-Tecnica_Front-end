import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import UsersList from "../components/UsersList";
import ErrorMessage from "../components/ErrorMessage";
import SearchForm from "../components/SearchForm";
import Loader from "../components/Loader";
import FollowersChart from "../components/FollowersChart";

const Home = () => {
  const [search, setSearch] = useState();

  const { data, loading, error } = useFetch(search);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  let orderedData = "";
  let notFound = "";
  let followers = "";
  if (data && data.items) {
    orderedData = data.items
      .slice(0, 10)
      .filter((data) => data.login !== "iseijasunow");

    if (!orderedData.length) {
      notFound = "No se han encontrado usuarios.";
    }
    followers = orderedData.map((data) => data.url);
  }

  return (
    <div className="container px-10">
      <div>
        <SearchForm setSearch={setSearch} notFound={notFound} />
      </div>

      <div className="mt-10">
        {followers.length ? (
          <div>
            <FollowersChart urls={followers} />
          </div>
        ) : (
          ""
        )}

        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="mt-10">
              {data && data.items ? (
                <>
                  <UsersList orderedData={orderedData} />
                </>
              ) : (
                ""
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
