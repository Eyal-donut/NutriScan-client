import { useState, createContext, useContext } from "react";

const SpinnerContext = createContext();

const SpinnerProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <SpinnerContext.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};

export const useSpinnerContext = () => {
  return useContext(SpinnerContext);
};

export { SpinnerProvider };
