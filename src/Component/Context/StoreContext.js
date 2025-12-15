import { createContext,  useState } from "react";
import { food_list } from "../../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item doesn't exist, do nothing

            const updatedCart = { ...prev };
            if (updatedCart[itemId] === 1) {
                delete updatedCart[itemId]; // Remove item when count is 0
            } else {
                updatedCart[itemId] -= 1;
            }
            return updatedCart;
        });
    };
    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
          const item = food_list.find((food) => food._id === itemId);
          return total + (item ? item.price * cartItems[itemId] : 0);
        }, 0);
      };

  
    const contextValue = {
        food_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
