import { createContext } from "react";
import { Login } from "../../types/User";

export type ContextsFieldType = {
  user: Login | null;
  signin: (name: string, password: string) => Promise<boolean>;
  signup: (name: string, password: string, Rpass: string) => Promise<boolean>;
  signout: () => void;
  createTask: (description: string, detail: string) => Promise<any>;
  loadTask: (token: string) => Promise<any>;
  deletTask: (id: string) => Promise<any>;
  editTask: (id: string, description: string, detail: string) => Promise<any>;
};

export const ContextsField = createContext<ContextsFieldType>(null!);
