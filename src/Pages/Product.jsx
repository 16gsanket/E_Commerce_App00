import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import LinkButton from "../ui/LinkButton";
import {addToCart} from "../Features/Cart/cartSlice";
import { useDispatch } from "react-redux";


function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen text-xl font-bold">Loading...</div>;
  }

  return (
    <>
    <div className="text-pizze text-xl pl-10 pt-5">
    <LinkButton to={-1} className="text-sm text-pizza hover:text-blue-700 hover:underline">
      &larr; Go back
      </LinkButton>
    </div>
    <div className="max-w-5xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <motion.img
          src={product.image}
          alt={product.title}
          className="w-full object-contain h-[400px] p-6 border-t-2  border-gray-200 rounded-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="p-6 flex flex-col justify-between" >
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <span className="text-xl font-semibold text-yellow-500 mt-4">${product.price}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="mt-4 px-4 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-md transition-all"
            onClick={() =>{
              alert('i am clicked')
               dispatch(addToCart(product))
              
              }}
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>
    </div>
    </>
  );
}

export default Product;
