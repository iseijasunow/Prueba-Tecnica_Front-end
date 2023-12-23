import { toast } from "react-toastify";

export const showError = () => {
  toast.error("Could not find the user!", {
    position: "top-center",
    autoClose: 2000,
    theme: "colored",
  });
};
