import React from 'react'

const Cards = ({ myObj }) => {
    console.log(myObj)

    return (
        <>
             {
            myObj.map((item, key) => {
                return <div  key={key}>
                    <h1>{item.userName}</h1>
                </div>
            })
        }
        </>
       
    )
}

export default Cards