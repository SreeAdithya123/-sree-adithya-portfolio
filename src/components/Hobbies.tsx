import React from 'react';
import { Camera, Music, Code } from 'lucide-react';

const Hobbies = () => {
  const hobbies = [
    {
      icon: <Camera className="w-8 h-8" />,
      name: "Photography",
      description: "Hi, I'm Adithya, a nature and wildlife photographer from Tadepalligudem, India. Photography is my passion and my way of telling stories through images. I love capturing the beauty of nature—from the delicate wings of a butterfly to the powerful gaze of a predator. Each photo I take highlights the wonders of the natural world.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80"
    },
    {
      icon: <Music className="w-8 h-8" />,
      name: "Music",
      description: "My Love for Music. Music is my escape, my inspiration, and my companion in every moment. Whether it's soothing melodies or energetic beats, I enjoy exploring different genres and finding the perfect rhythm for every mood. Listening to music helps me relax, focus, and connect with emotions in a unique way.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80"
    },
    {
      icon: <Code className="w-8 h-8" />,
      name: "Coding",
      description: "Building side projects and learning new technologies",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="hobbies" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hobbies & Interests</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img
                src={hobby.image}
                alt={hobby.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    {hobby.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{hobby.name}</h3>
                </div>
                <p className="text-gray-600 whitespace-pre-line">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;