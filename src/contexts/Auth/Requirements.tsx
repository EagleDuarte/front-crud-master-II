import { useContext, useEffect } from "react";
import { Login } from "../../pages/Login";
import { ContextsField } from "./ContextsField";

export const Requirements = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(ContextsField);
  const userToken = localStorage.getItem("authToken");

   useEffect(() => {
     if (userToken) {
       auth.loadTask(userToken);
       console.log("requirements");
     }
   }, []);

  if (!userToken || !auth.user) {
    return <Login />;
  }

  return children;
};
