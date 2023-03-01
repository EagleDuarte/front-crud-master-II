import { useContext, useEffect, useState } from "react";
import { Recados } from "../../components/Recados/Recados";
import { ContextsField } from "../../contexts/Auth/ContextsField";

export const Private = () => {
  const auth = useContext(ContextsField);
  const userToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (userToken) {
      auth.loadTask(userToken);
    }
  }, []);

  return (
    <div>
      <Recados />
    </div>
  );
};
