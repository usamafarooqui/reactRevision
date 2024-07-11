import { useState } from "react"
import BgChange from "./components/BgChange"
import Cards from "./components/Cards"
import InputBox from "./components/currencyConvertor/InputBox"
import PasswordGenerator from "./components/PasswordGenerator"
import useCurrencyInfo from "./hooks/useCurrencyInfo"


function App() {
  // for lecture project
  const myObj = [{
    userName: 'usama',
    class: 10
  }, {
    userName: 'fahad',
    class: 9
  }]

  // for Currency info project 
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  console.log("currencyInfo", Object.keys(currencyInfo));
  const options = Object.keys(currencyInfo)


  const swap = () => {
    setFrom(to);
    setTo(from);

    setConvertedAmount(amount);
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    console.log("currencyInfo[to]", currencyInfo[to])
  }

  return (
    <>
      <h1 className='bg-green-800 text-white'>hellow world</h1>
      {/* props lecture  */}
      {/* <Cards myObj={myObj} /> */}
      {/* bg change project  */}
      {/* <BgChange /> */}
      {/* Video 10 project  */}
      {/* PasswordGenerator */}
      {/* <PasswordGenerator /> */}
      {/* Currency Convertor  */}
      {/* <form onSubmit={(e) => {
        e.preventDefault();
        convert();
      }}>
        <InputBox
          label="from"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setAmount(amount)}
          selectCurrency={from}
          onAmountChange={(amount)=>setAmount(amount)}

        />
        <button onClick={swap}>Swap</button>
        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={from}
          amountDisable

        />
        <button type="submit"> Convert {`${from.toUpperCase()} to ${to.toLowerCase()}}`}</button>
      </form> */}
      
        {/* React Router Dom  */}
    </>
  )
}

export default App
