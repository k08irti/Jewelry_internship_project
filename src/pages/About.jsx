import React from 'react'
import { FaGem, FaHeart, FaCrown, FaStar } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaGem className="text-3xl text-amber-600" />,
      title: 'Premium Quality',
      description: 'We source only the finest materials and gemstones for our jewelry pieces.'
    },
    {
      icon: <FaHeart className="text-3xl text-amber-600" />,
      title: 'Handcrafted with Love',
      description: 'Each piece is carefully crafted by skilled artisans with years of experience.'
    },
    {
      icon: <FaCrown className="text-3xl text-amber-600" />,
      title: 'Timeless Design',
      description: 'Our designs blend classic elegance with contemporary style for lasting appeal.'
    },
    {
      icon: <FaStar className="text-3xl text-amber-600" />,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, ensuring exceptional quality.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=1080&fit=crop&q=80)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            For over three decades, CyberForenX has been crafting exceptional jewelry 
            that captures the essence of elegance and timeless beauty.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
                Crafted with Passion
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1990 by master jeweler Elena CyberForenX, our journey began 
                  with a simple vision: to create jewelry that tells stories and celebrates 
                  life's most precious moments.
                </p>
                <p>
                  What started as a small workshop in the heart of the jewelry district 
                  has grown into a renowned atelier known for exceptional craftsmanship 
                  and innovative design. Every piece we create is a testament to our 
                  commitment to quality and artistry.
                </p>
                <p>
                  Today, our team of skilled artisans continues to honor traditional 
                  jewelry-making techniques while embracing modern innovation, ensuring 
                  that each piece meets the highest standards of excellence.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&q=80"
                alt="Jewelry crafting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from design conception 
              to the final polish of each piece.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
              Meet Our Artisans
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Behind every piece of jewelry is a dedicated artisan who brings 
              years of experience and passion to their craft.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Elena CyberForenX',
                role: 'Founder & Master Jeweler',
                image: 'https://images.unsplash.com/photo-1494790108755-2616c03d8c59?w=400&h=400&fit=crop&q=80'
              },
              {
                name: 'Marcus Sterling',
                role: 'Head Designer',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80'
              },
              {
                name: 'Sofia Rodriguez',
                role: 'Master Gemologist',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 font-medium">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Experience Our Craftsmanship
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Discover the perfect piece that speaks to your heart. Each creation 
            is designed to become a treasured part of your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/products" className="btn-primary">
              Shop Our Collection
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About