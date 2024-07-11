import { useEffect, useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'


function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove("light", "dark")
    html.classList.add(themeMode)
  }, [themeMode])
  return (
    <>
      {/* <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider> */}


      {/* Method 2  */}
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <h1 className='p-4 text-red-900'>Hello world</h1>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* {themeBtn} */}
              {/* <ThemeBtn /> */}
              <ThemeBtn />
            </div>
            <div className="w-full max-w-sm mx-auto">
              {/* {cards } */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App;
