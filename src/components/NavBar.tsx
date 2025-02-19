import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold">Adithya</span>
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <a href="mailto:adithya.kandikonda@sasi.ac.in" className="hover:text-gray-900">
                adithya.kandikonda@sasi.ac.in
              </a>
              <div className="flex items-center space-x-1">
                <Instagram size={16} className="text-gray-600" />
                <a href="https://instagram.com/SreeAdithyaKandikonda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                  @SreeAdithyaKandikonda
                </a>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#achievements" className="text-gray-700 hover:text-gray-900">Achievements</a>
            <a href="#hobbies" className="text-gray-700 hover:text-gray-900">Hobbies</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
              <a href="#achievements" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Achievements</a>
              <a href="#hobbies" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Hobbies</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
              <div className="px-3 py-2 space-y-2 text-sm text-gray-600">
                <a href="mailto:adithya.kandikonda@sasi.ac.in" className="block hover:text-gray-900">
                  adithya.kandikonda@sasi.ac.in
                </a>
                <div className="flex items-center space-x-1">
                  <Instagram size={16} className="text-gray-600" />
                  <a href="https://instagram.com/SreeAdithyaKandikonda" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                    @SreeAdithyaKandikonda
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;