import { createContext } from "react";
const defaultvalue = {
  user: {
    name: "Dummy Name",
    email: "dummy@gmail.com",
  },
};
const UserContext = createContext(defaultvalue);
export default UserContext;
