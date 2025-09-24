import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const ProductDetail = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = productsData.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-4">
              <li>
                <Link to="/" className="text-gray-500 hover:text-amber-600">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/products" className="text-gray-500 hover:text-amber-600">Products</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <span className="text-gray-900 capitalize">{product.category}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="flex-grow">
              <p className="text-amber-600 font-medium capitalize mb-2">
                {product.category}
              </p>
              <h1 className="font-display text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-4xl font-bold text-amber-600 mb-6">
                ${product.price.toLocaleString()}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-4"
              >
                <FaShoppingCart />
                Add to Cart
              </button>
              
              <div className="flex gap-4">
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <FaHeart />
                  Save to Wishlist
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2">
                  <FaShare />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail