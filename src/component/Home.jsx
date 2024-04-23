import React, { useContext, useEffect, useRef, useState } from 'react'
import { StoreContext } from './context';

function Home() {

  const[name,setName]=useState("");
  const[price,setPrice]=useState("")


const {cartItem,addToCart,totalPrice,removeToCart} = useContext(StoreContext);
  const { buttonRef }=useRef()

  
  
    const saveHandler = ()=>{
           addToCart(name,price)
           setName("")
           setPrice("")
    }
    let value=totalPrice()
    console.log(cartItem,value);
  
  useEffect(()=>{
  },[buttonRef])

  return (
   <>
     <div className="w-full h-auto px-24 flex flex-col gap-3 pt-4">
        <h className="text-3xl font-semibold opacity-90">Expenses</h>
        <div>
          {cartItem.length === 0?(<><h1 className='text-3xl font-semibold text-green-500'>Add Data To List . . . . .</h1></>):
          (<>
          <div className='flex flex-col gap-3'>
            {cartItem.map((item,index)=>{
              return (<>
                <div key={index} className='flex items-center justify-between px-5 h-12 border-[1.5px] border-gray-400 rounded-lg bg-green-200'>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button onClick={()=>removeToCart(index)}>Remove</button>
                </div>
              </>)
            })}
            </div>
          </>)}
        </div>
        <h1 className="text-3xl font-semibold opacity-90">Add Expenses</h1>
        <div className="w-full flex justify-between">
            <div>
                <p>
                    Name
                </p>
                <input type='text'
                value={name}
                className="w-[500px] h-10 border border-gray-200"
                onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
                <p>
                    Cost
                </p>
                <input type='number'
                 value={price}
                  className="w-[500px] h-10 border border-gray-200"
                  onChange={(e)=>setPrice(e.target.value)}></input>
            </div>

        </div>
        <button ref={buttonRef} className="w-20 h-10 text-white text-xl font-semibold bg-green-500 rounded-xl"
        onClick={saveHandler}>Save</button>
     </div>
   </>
  )
}


export default Home