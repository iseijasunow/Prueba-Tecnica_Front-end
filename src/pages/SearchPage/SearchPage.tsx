import FollowersChart from "../../components/FollowersChart/FollowersChart";
import SearchForm from "../../components/SearchForm/SearchForm";
import UserList from "../../components/UserList/UserList";
import "./SearchPage.scss";

const SearchPage = () => {
  return (
    <>
      <h1>User Search</h1>
      <SearchForm />
      <UserList />
      <div className="chart-wrapper">
        <FollowersChart />
      </div>
    </>
  );
};

export default SearchPage;
