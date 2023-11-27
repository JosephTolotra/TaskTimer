import { createContext, useState } from "react";

const ThemeContexte=createContext(
    {
        theme: "light",
        toogleTheme: ()=>{},
    }
);

export {ThemeContexte};

const ThemeContexteProvider=({children})=>{

const [theme, setTheme]=useState('light');

const toogleTheme=()=>{
    setTheme('dark');
}
const value ={
    theme,
    toogleTheme,
};
    return(
        <ThemeContexte.Provider value={value}>
            {children}
        </ThemeContexte.Provider>
    );
}

export default ThemeContexteProvider;