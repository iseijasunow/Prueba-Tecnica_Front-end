import { createContext } from "react";
import { UsersContextStructure } from "./types";

const UsersContext = createContext({} as UsersContextStructure);

export default UsersContext;
