import { useEffect, useState } from "react";
import { settingApi } from "../../hooks/settingApi";
import { Login } from "../../types/User";
import { ContextsField } from "./ContextsField";

export const AuthSetting = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<Login | null>(null);
  const api = settingApi();

  const signin = async (name: string, password: string) => {
    const data = await api.signin(name, password);
    if (data.ok) {
      setUser(data);
      setUserName(data.data.name);
      setUserId(data.data.id);
      setToken(data.token);
      setData(data.data.tasks);
      return true;
    }
    return false;
  };

  const signup = async (name: string, password: string, Rpass: string) => {
    const data = await api.signup(name, password, Rpass);
    if (data.ok) {
      setUser(data);
      setUserName(data.data.name);
      setUserId(data.data.id);
      setToken(data.token);
      setData(data);
      return true;
    }
    return false;
  };

  const signout = async () => {
    console.log("signout está sendo executada.");
    setUser(null);
    setToken("");
    setData("");
    setUserName("");
    setUserId("");
    await api.logout();
  };

  const loadTask = async (token: string) => {
    if (token) {
      const data = await api.loadTask();
      if (data) {
        setUser(data.data.tasks);
        return data.data;
      }
    }
    return false;
  };

  const createTask = async (description: string, detail: string) => {
    const data = await api.createTask(description, detail);
    if (data.ok) {
      setUser(data);
      setData(data.data.tasks);
      return true;
    }
    return false;
  };

  const editTask = async (id: string, description: string, detail: string) => {
    const data = await api.editTask(id, description, detail);
    if (data.ok) {
      setUser(data);
      return true;
    }
    return false;
  };

  const deletTask = async (id: string) => {
    const data = await api.deletTask(id);
    return data;
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const setData = (data: any) => {
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const setUserName = (name: string) => {
    localStorage.setItem("authName", name);
  };

  const setUserId = (id: string) => {
    localStorage.setItem("authId", id);
  };

  return (
    <ContextsField.Provider
      value={{
        user,
        signin,
        signup,
        signout,
        createTask,
        loadTask,
        deletTask,
        editTask,
      }}
    >
      {children}
    </ContextsField.Provider>
  );
};
