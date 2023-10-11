import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const themeContext = createContext(null);

export const ThemeProvider = ({children}) =>{
const [theme, setTheme] = useState('light');

const handelChangeTheme = useCallback((e) =>{
setTheme(e.target.checked ? 'dark' : 'light')
},[])

const value = useMemo(() =>{
  return{
    theme,
    onChangeTheme: handelChangeTheme,
  }
},[theme, handelChangeTheme]);

return(
    <themeContext.Provider value={value}>
        {children}
    </themeContext.Provider>
)
}

export const useTheme = () =>{
    const value = useContext(themeContext);

    if(value === null){
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return value
}