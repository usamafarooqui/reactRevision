1- make a new folder context 
2- in that make a file UserContext.js (rember it is js )

import React from 'react';

// create context is a method to make context
const UserContext = React.createContext();

export default UserContext;

code of that file 

note every context will give a provider we use that provider as a wrapper 

3 - Make a provider to do that it has 2 methods 

3.1 first method 

import React from 'react';
import UserContext from './UserContext';

const UserContextProvider = ({childern}) =>{
    const [user , setUser] = React.useState(null);

    return (
        <UserContext.Provider value={{user , setUser}}>
            {childern}
        </UserContext.Provider>
    )
}

export default UserContextProvider;


now to set value 


const [userName , setUserName] = useState('');
  const [password , setPassword] = useState('');

  // setting the value in context api
  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName , password})
  }


  to get value


  const {user} = useContext(UserContext);
  
  if ( !user) return <>Please Login</>
  return <>WElcome : {user.userName}</>


  In App.jsx

   {/* <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider> */}



    2 - second approach is theme mode


    make a file theme context 

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



2 wrap ThemeProvider in app jsx
