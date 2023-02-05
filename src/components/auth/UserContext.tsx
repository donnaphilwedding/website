import { FC, createContext, useState, HTMLAttributes, useCallback } from 'react';

export enum UserType {
  NONE = 0,
  REGULAR = 1,
  WEDDING_PARTY = 2,
  DINOSAUR = 3
}

interface UserContextState {
  user: UserType,
  userLogin: (password: string) => UserType,
  userLogout: () => void,
}

export const UserContext = createContext<UserContextState>({
  user: UserType.NONE,
  userLogin: () => UserType.NONE,
  userLogout: () => {}
});

export const UserContextProvider: FC<HTMLAttributes<HTMLDivElement>> = ({ children }) => {
  const getUserTypeFromStorage = () => {
    const storageVal = localStorage.getItem('user');

    let userType = UserType.NONE;
    if (storageVal) {
      userType = parseInt(storageVal);
    }

    return userType;
  }

  const [user, setUser] = useState<UserType>(getUserTypeFromStorage);

  const userLogin = useCallback((password: string) => {
    let userType = UserType.NONE;
    switch(password) {
      case "2023":
        userType = UserType.REGULAR;
        break;
      case "party":
        userType = UserType.WEDDING_PARTY;
        break;
      case "rawr":
        userType = UserType.DINOSAUR;
        break;
      default:
        userType = UserType.NONE;
        break;
    }

    setUser(userType);
    localStorage.setItem("user", userType.toString());

    return userType;
  }, [setUser]);

  const userLogout = useCallback(() => {
    setUser(UserType.NONE);
    localStorage.removeItem("user");
  }, [setUser]);

  return <UserContext.Provider value={{user, userLogin, userLogout}}>
    {children}
  </UserContext.Provider>
}
