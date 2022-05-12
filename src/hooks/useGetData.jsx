import { useEffect, useState, startTransition } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const useGetData = ({ name }) => {
  const [user, setUser] = useState([]);
  const getData = async () => {
    axios
      .get(`https://api.github.com/search/users?q=${name}`)
      .then((res) => {
        startTransition(() => {
          setUser(res.data.items.slice(0, 10));
        });
      })
      .catch((err) => {
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        >
          {toast.error("Not found user")}
        </ToastContainer>
      });
  };

  useEffect(() => {
    if (name) {
      getData();
    }
  }, [name]);

  return user;
};

export default useGetData;
