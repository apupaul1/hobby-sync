import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import { Tooltip } from 'react-tooltip';
import crownAnimation from '../assets/Animation - 1747925447486.json';

const leadingGroups = [
  {
    name: 'Art Enthusiasts',
    category: 'Drawing & Painting',
    members: 120,
    location: 'Dhaka, Bangladesh',
    image: 'https://i.ibb.co/8qFqGxG/birmingham-museums-trust-w-Kl-Hsoo-RVbg-unsplash.jpg'
  },
  {
    name: 'Game Zone',
    category: 'Video Gaming',
    members: 98,
    location: 'Chattogram, Bangladesh',
    image: 'https://i.ibb.co/zH5krxLV/fabio-magalhaes-nm-Tm7kn-Unqs-unsplash.jpg'
  },
  {
    name: 'Culinary Masters',
    category: 'Cooking',
    members: 85,
    location: 'Khulna, Bangladesh',
    image: 'https://i.ibb.co/dJjL6Swn/ella-olsson-KPDb-Ry-FOTn-E-unsplash.jpg'
  }
];

const LeadingGroups = () => {
  return (
    <section className="py-12 px-6 w-11/12 mx-auto ">
      <div className="w-20 mx-auto mt-4">
        <Lottie animationData={crownAnimation} loop={true} />
      </div>
      <div className="text-center mb-12">
        {/* FIXED: Changed text-slate-700 to text-base-content */}
        <h2 className="text-3xl font-extrabold mt-4 text-base-content my-12">
          Our Engaging & Leading Groups
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadingGroups.map((group, index) => (
          <Slide direction="up" triggerOnce key={index}>
            {/* FIXED: 
                1. Changed bg-white to bg-base-200 (Matches your other cards) 
                2. Added transition-colors for smooth theme switching
            */}
            <div
              className="bg-base-200 shadow-xl rounded-xl overflow-hidden group relative transition-colors duration-300"
              data-tip={group.category}
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                {/* FIXED: Changed text-gray-800 to text-base-content */}
                <h3 className="text-2xl font-bold text-base-content mb-2">
                  <Typewriter
                    words={[`${group.name}`]}
                    loop={true}
                    cursor
                    cursorStyle=''
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h3>
                {/* FIXED: Changed text-gray-500 to text-base-content/60 */}
                <p className="text-sm text-base-content/60 mb-1">📍 {group.location}</p>
                {/* FIXED: Changed text-gray-600 to text-base-content/70 */}
                <p className="text-sm text-base-content/70">👥 {group.members} Members</p>
              </div>
              <Tooltip />
            </div>
          </Slide>
        ))}
      </div>
    </section>
  );
};

export default LeadingGroups;