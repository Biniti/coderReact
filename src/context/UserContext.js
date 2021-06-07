import React, { createContext } from "react";
import { users } from "../services/Users";

const UserContext = createContext({});

export const UserProvider = (props) => {
  return (
    <UserContext.Provider
      value={{
        state: {
          users,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
