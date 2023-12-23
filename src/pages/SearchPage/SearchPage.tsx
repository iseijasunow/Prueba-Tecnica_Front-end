import SearchForm from "../../components/SearchForm/SearchForm";
import UserList from "../../components/UserList/UserList";

const SearchPage = () => {
  return (
    <>
      <h1>User Search</h1>
      <SearchForm />
      <UserList />
    </>
  );
};

export default SearchPage;
