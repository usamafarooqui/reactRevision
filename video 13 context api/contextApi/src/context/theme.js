import { createContext , useContext } from "react";


// we can also pass initial values in createContext so if we want to set the state to something if the user has not giving a value 
export const themeContext = createContext({
    themeMode:'light',
    darkTheme: () =>{},
    lightTheme:() =>{}
})

// provider wala kaam bhi issi file mein krdo
export const ThemeProvider = themeContext.Provider


// ab hr file mein useContext alag se import na krna pre is liye humne custom hook bna k uski configuration krdi hai
export default function useTheme(){
    return useContext(themeContext)
}
