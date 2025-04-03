import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function fetchProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    }
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {isLoading ? <Loader /> : products.map((product) => (
          <div key={product.id} className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg" onClick={() => navigate(`/product/${product.id}`)}>
            <div className="px-4 py-2">
              <h1 className="text-xl font-bold text-gray-800 uppercase h-[100px]">
                {product.title}
              </h1>
              {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {product.description}
              </p> */}
            </div>
            <img
              className="object-cover w-full h-48 mt-2"
              src={product.image}
              alt={product.title}
            />
            <div className="flex items-center justify-between px-4 py-2 bg-yellow-500 ">
              <h1 className="text-lg font-bold text-pizza">
                ${product.price}
              </h1>
              <button className="px-2 py-1 text-xs font-semibold text-gray-100 bg-gray-900 uppercase transition-all duration-300 transform  rounded hover:bg-gray-800 hover:scale-125  focus:bg-gray-400 focus:outline-none">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Products