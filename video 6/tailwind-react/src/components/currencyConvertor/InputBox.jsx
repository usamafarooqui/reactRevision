import React, { useId } from 'react'

const InputBox = ({ label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false, className = "" }) => {

  // for optimzation we can use useId() to bind the label with input of multiple fields 
  const amountInputId = useId();

  return (
    <>
      <label htmlFor={amountInputId}>{label}</label>
      <input id={amountInputId} type='number' placeholder='Amount' disabled={amountDisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
      <p>Currency Type</p>
      <select value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}
      >
        {
          currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))
        }
      </select>
    </>
  )
}

export default InputBox