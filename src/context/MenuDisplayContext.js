import { useState, createContext, useContext } from "react";

const MenuDisplayContext = createContext();

const MenuDisplayProvider = ({ children }) => {
  const [isMenuDisplay, setIsMenuDisplay] = useState(false);

  return (
    <MenuDisplayContext.Provider
      value={{
        isMenuDisplay,
        setIsMenuDisplay,
      }}
    >
      {children}
    </MenuDisplayContext.Provider>
  );
};

export const useMenuDisplayContext = () => {
  return useContext(MenuDisplayContext);
};

export { MenuDisplayProvider };
