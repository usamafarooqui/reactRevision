import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGenerator = () => {
    const [length , setLength] = useState(8);
    const [numberAllowed , setNumberAllowed] = useState(false);
    const [charAllowed , setCharAllowed] = useState(false);
    const [password , setPassword] = useState("");



        const passwordRef = useRef(null);

    // The useCallback hook in React memoizes a callback function, preventing it from being recreated on every render. This is done by accepting the function as an argument, memoizing it, and then returning the memoized function. The memoized version of the callback function only changes if one of its dependencies has changed. 

    const passwordGenerator = useCallback(()=>{
        let pass = "";
        let  str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if(numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()"

        for (let i = 1; i <= length; i++) {
           let char = Math.floor(Math.random() * str.length +1  )
            pass += str.charAt(char)
        }


        setPassword(pass)
    } , [length , numberAllowed , charAllowed , setPassword])

    useEffect(()=>{
            passwordGenerator()
    }, [length , numberAllowed , charAllowed , passwordGenerator])


    const copyPassword =  () =>{
        console.log("indisw")
        passwordRef.current.select();
       const check =  window.navigator.clipboard.writeText(password)
       console.log(check)
    }
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-md  px-4 my-8 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
                type='text'
                value={password}
                className='outline-none w-full py-1 px-3'
                placeholder='password'
                readOnly
                ref={passwordRef}
               
             />
             <button  onClick={copyPassword}>Copy</button>
        </div>

        <div>
            <input 
                type='range'
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>setLength(e.target.value)}
            />
            <label>length : {length }</label>
        </div>
        <div>
            <input 
                type='checkbox'
                defaultChecked={numberAllowed}
                id='numberInput'
                onChange={() => {
                    setNumberAllowed((prev)=> !prev)
                }}
            />
            <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
            <input 
                type='checkbox'
                defaultChecked={charAllowed}
                id='charAllowed'
                onChange={() => {
                    setCharAllowed((prev)=> !prev)
                }}
            />
            <label htmlFor='charAllowed'>Characters</label>
        </div>
    </div>
  )
}

export default PasswordGenerator