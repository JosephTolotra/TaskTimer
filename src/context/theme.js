import { createContext, useState } from "react";

const ThemeContexte=createContext(
    {
        theme: "light",
        toogleTheme: ()=>{},
    }
);

export {ThemeContexte};

const ThemeContexteProvider=({childreen})=>{

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
            {childreen}
        </ThemeContexte.Provider>
    );
}

export default ThemeContexteProvider;