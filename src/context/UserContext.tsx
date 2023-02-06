import { createContext } from "react";


export type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string
    image: string;
    token: string;
  }

export const UserContext = createContext<{ user: User | null; setUser: React.Dispatch<React.SetStateAction<User | null>> }>({
    user: null,
    setUser: () => {},
  })