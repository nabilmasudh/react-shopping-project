import React, { useState, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer';

const AppContext = React.createContext();

const AppProvider = ({children}) => {

    const initialState = {
        cart:[],
        total:0,
        amount:0,
        signIn:false,
    }
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSignInOpen, setIsSignInOpen] = useState(false)

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSignIn = () => {
        setIsSignInOpen(true)
    }
    const closeSignIn = () => {
        setIsSignInOpen(false)
    }

   
    const clearCart = (id) =>{
        dispatch({type:'CLEAR_CART'})
    }
    const remove = (id) =>{
        dispatch({type:'REMOVE', payload:id})
    }
    const increase = (id) => {
        dispatch({type:'INCREASE', payload:id})
    }
    const decrease = (id) =>{
        dispatch({type:'DECREASE', payload:id})
    }
    const addToCart = (id) =>{
        dispatch({type:'ADD_TO_CART', payload:id})
    }
    useEffect(()=>{
        dispatch({type:'GET_TOTALS'})
    },[state.cart])

    return (
        <AppContext.Provider value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
            addToCart,
            // ========
            isSidebarOpen,
            isSignInOpen,
            openSidebar,
            closeSidebar,
            openSignIn,
            closeSignIn,
        }}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext)
}
export {AppContext, AppProvider};
