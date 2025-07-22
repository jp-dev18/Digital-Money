import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function handleChangeDarkMode() {
    setDarkMode(!darkMode);
  }

    return (
        <ThemeContext.Provider 
            value= {{ 
              darkMode, 
              setDarkMode, 
              handleChangeDarkMode 
              }}>
             {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContext;