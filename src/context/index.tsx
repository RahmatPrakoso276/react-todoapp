import { createContext } from "react";

export interface User {
  username: string;
  age: number;
}

export const GlobalContext = createContext<User | null>(null);
