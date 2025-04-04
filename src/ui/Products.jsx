import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { useFilterContext } from "../context/FilterContextProvider";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  
  return debouncedValue;
}

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { priceCap, category } = useFilterContext();

  const debouncedPriceCap = useDebounce(priceCap, 1000);

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      // Apply Category Filter
      let filteredData = category !== "all" 
        ? data.filter((item) => item.category === category)
        : data;
      
      // Apply Price Filter
      filteredData = filteredData.filter((item) => item.price <= priceCap);
      
      setProducts(filteredData);
      setIsLoading(false);
    }
    fetchProducts();
  }, [category, debouncedPriceCap]);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {isLoading ? (
        <Loader />
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg"
          >
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              className="hover:cursor-pointer hover:bg-gray-100 px-2 transition-all duration-500"
            >
              <div className="px-4 py-2">
                <h1 className="text-xl font-bold text-gray-800 uppercase h-[100px]">
                  {product.title}
                </h1>
              </div>
              <img
                className="object-cover w-full h-48 mt-2"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-yellow-500">
              <h1 className="text-lg font-bold text-pizza">${product.price}</h1>
              <button
                className="px-2 py-1 text-xs font-semibold text-gray-100 bg-gray-900 uppercase transition-all duration-300 transform rounded hover:bg-gray-800 hover:scale-125 focus:bg-gray-400 focus:outline-none"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Products;