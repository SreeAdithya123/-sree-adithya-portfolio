import React from 'react';
import { BookOpen, Code, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-gray-600">Passionate about creating elegant solutions through code</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Learning</h3>
            <p className="text-gray-600">Continuously expanding knowledge and skills</p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Achievement</h3>
            <p className="text-gray-600">Driven by challenges and success</p>
          </div>
        </div>
        <div className="mt-12 text-gray-700 leading-relaxed">
          <p className="mb-4">
            I am a passionate developer with a strong foundation in modern web technologies.
            My journey in technology began [Your Story Here] and I've been growing ever since.
          </p>
          <p>
            When I'm not coding, you can find me [Your Interests/Hobbies].
            I believe in continuous learning and pushing the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;