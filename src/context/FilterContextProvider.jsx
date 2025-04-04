import { createContext, useContext, useState } from "react";

const filterContext = createContext();


export const FilterContextProvider = ({children}) => {
    const[category , setCategory] = useState('all');
    const[priceCap , setPriceCap] = useState(1000);
    return (
        <filterContext.Provider value={{priceCap , setPriceCap , category , setCategory}}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilterContext = () => {
    const context = useContext(filterContext);
      if (!context) {
        throw new Error('filterContext must be used within a filterContextProvider');
      }
      return context;
}

