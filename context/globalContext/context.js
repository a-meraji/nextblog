import React, { useState, useEffect, useContext } from "react";


// if local storage or browser preferences has value for the theme
//then get and set the theme based on that
const getInitialTheme = () => {
  // check for theme on localstorage and return if there was a saved value
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

  return "dark"; // if none of above then dark theme as the default;
};
}


/* ********  CONTEXT ************ */
const Context = React.createContext();

const ContextProvider = ({ initialTheme, children }) => {
  // set the color theme state with getInitailTheme function
  const [theme, setTheme] = React.useState(getInitialTheme);
  // Set root classlist (.light or .dark) and "color-theme" on local storage
  const ToggleTheme = (rawTheme) => {
    if(typeof window === "undefined")return
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  };

  // Whenever theme changed then set root classList and localStorage again.
  useEffect(() => {
    ToggleTheme(theme);
  }, [theme]);

  // side bar display condition
  const [showSide, setShowSide] = useState(false);

  //update shopping cart, language and color theme in all tabs
  const onStorageUpdate = (e) => {
    const { key, newValue } = e;
    if (key === "color-theme") {
      setTheme(newValue);
    }
  };

  //add local storage eventlistener for syncing states in all open tabs
  useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("storage", onStorageUpdate);
        return () => {
          window.removeEventListener("storage", onStorageUpdate);
        };
      
    }
  }, []);

  return (
    <Context.Provider
      value={{    
        theme,
        setTheme,
        showSide,
        setShowSide,       
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Context);
};

export { Context, ContextProvider };
