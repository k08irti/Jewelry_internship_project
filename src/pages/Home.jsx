import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import productsData from '../data/products.json'

const Home = () => {
  const featuredProducts = productsData.slice(0, 6)
  const categories = [
    {
      name: 'Necklaces',
      image: 'https://plus.unsplash.com/premium_photo-1681276170092-446cd1b5b32d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D',
      link: '/products?category=necklaces'
    },
    {
      name: 'Rings',
      image: 'https://plus.unsplash.com/premium_photo-1675003662150-2569448d2b3b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmluZ3N8ZW58MHx8MHx8fDA%3D',
      link: '/products?category=rings'
    },
    {
      name: 'Bracelets',
      image: 'https://plus.unsplash.com/premium_photo-1681276170076-d3860cc735f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJhY2xldHN8ZW58MHx8MHx8fDA%3D',
      link: '/products?category=bracelets'
    },
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1693213085235-ea6deadf8cee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyaW5nc3xlbnwwfHwwfHx8MA%3D%3D0',
      link: '/products?category=earrings'
    }
  ]

  return (
    <div>
      <Hero />
      
      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse collection of fine jewelry, each category crafted 
              with precision and designed to complement your unique style.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="font-display text-white text-xl font-semibold">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Discover our handpicked selection of exceptional pieces, each one 
              representing the pinnacle of our craftsmanship and design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/products" className="btn-primary text-lg px-8 py-4">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Experience Luxury
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Every piece of jewelry we create is a testament to our commitment to 
            excellence, quality, and timeless beauty.
          </p>
          <Link to="/about" className="btn-secondary text-lg px-8 py-4">
            Learn Our Story
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home