import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Weather Station Project",
      description: "Successfully receiving satellite images and establishing a weather station with my team",
      year: "2025"
    },
    {
      title: "Face Recognition Attendance System",
      description: "Created a face recognition program for marking attendance",
      year: "2024"
    },
    {
      title: "Science Olympiad Bronze Medal",
      description: "Achieved bronze medal recognition in the Science Olympiad",
      year: "2017"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Achievements</h2>
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;