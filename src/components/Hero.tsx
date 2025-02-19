import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hello, I'm Adithya
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              A passionate developer | Electronics enthusiast | Creative thinker | Problem solver
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get in Touch
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
              alt="Profile"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover mx-auto shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;