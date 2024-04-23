import { createContext, useState } from "react";





export const StoreContext = createContext(null)


const StoreContextProvider = (props)=>{

    const[cartItem,setcartItem]= useState([]);
    const[Price,setTotalPrice]= useState(0)


    const addToCart =(name,price)=>{
        const temp ={
            name:name,
            price:price
        }

        setcartItem((prev)=>[...prev,temp])

    }

    const totalPrice = ()=>{
        let totalPrice = 0;
         cartItem.forEach(item => {
         totalPrice += parseFloat(item.price);
           });
        return totalPrice;
        }

       const removeToCart = (id)=>{
        setcartItem(cartItem.filter((todo,index) => index !== id));

       }

     const contextValue={
        addToCart,
        cartItem,
        totalPrice,
        removeToCart
     }




    return (
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )

}




export default StoreContextProvider;
