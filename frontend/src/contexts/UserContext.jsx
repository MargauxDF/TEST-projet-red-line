import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const userObj = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return (
    <UserContext.Provider value={userObj}>{children}</UserContext.Provider>
  );
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
