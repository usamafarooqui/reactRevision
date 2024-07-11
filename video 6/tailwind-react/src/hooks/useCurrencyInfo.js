import { useEffect, useState } from "react"

// custom hook is nothing but a function that returns something 

const useCurrencyInfo = (currency) => {
    const [data , setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json()
        .then((res) => setData(res)))
        console.log(data)
        
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;
