import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        </div>
        
        <div className="p-4">
          <h3 className="font-display font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm capitalize mb-3">
            {product.category}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-amber-600">
              ${product.price.toLocaleString()}
            </span>
            <button
              onClick={handleAddToCart}
              className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-colors duration-200 flex items-center justify-center"
            >
              <FaShoppingCart className="text-sm" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard