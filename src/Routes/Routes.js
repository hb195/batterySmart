import { useState } from "react";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const Routes = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const fetchUser = () => {
    setUser(localStorage.getItem("user"));
  };
  const content = user ? (
    <PrivateRoutes fetchUser={fetchUser} />
  ) : (
    <PublicRoutes fetchUser={fetchUser} />
  );
  return <div>{content}</div>;
};

export default Routes;
