import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold text-amber-400 mb-4">
              CyberForenX
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Crafting exceptional jewelry pieces with passion and precision. 
              Every piece tells a story of elegance and timeless beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="/products" className="text-gray-300 hover:text-amber-400 transition-colors">Products</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/products?category=necklaces" className="text-gray-300 hover:text-amber-400 transition-colors">Necklaces</a></li>
              <li><a href="/products?category=rings" className="text-gray-300 hover:text-amber-400 transition-colors">Rings</a></li>
              <li><a href="/products?category=bracelets" className="text-gray-300 hover:text-amber-400 transition-colors">Bracelets</a></li>
              <li><a href="/products?category=earrings" className="text-gray-300 hover:text-amber-400 transition-colors">Earrings</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <FaPinterest className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 CyberForenX Jewelry. All rights reserved. | Designed with ❤️ for elegance.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer