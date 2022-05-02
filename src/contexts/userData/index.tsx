import React, { useState, createContext, useContext, ReactNode } from "react";

interface userDataContextType {
  account: string;
  balance: Number;
  name: string;
  cpf: string;
  login: (account: string, balance: Number, name: string, cpf: string) => void;
  logout: () => void;
}

const userDataContextDefaultValues: userDataContextType = {
  account: "",
  balance: 0,
  name: "",
  cpf: "",
  login: () => {},
  logout: () => {},
};

const UserDataContext = createContext<userDataContextType>(
  userDataContextDefaultValues
);

const _UserData = ({ children }: { children: ReactNode }) => {
  const [{ account, balance, name, cpf }, setUserData] = useState<{
    account: string;
    balance: Number;
    name: string;
    cpf: string;
  }>({
    account: "",
    balance: 0,
    name: "",
    cpf: "",
  });

  const login = (account: string, balance: Number, name: string, cpf: string) =>
    setUserData({ account, balance, name, cpf });

  const logout = () =>
    setUserData({ account: "", balance: 0, name: "", cpf: "" });

  const value = {
    account,
    balance,
    name,
    cpf,
    login,
    logout,
  };
  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context)
    throw new Error("useUserData must be used within an UserDataProvider");
  return context;
};

export { _UserData, useUserData };
