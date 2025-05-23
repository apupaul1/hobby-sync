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
    <section className="py-12 px-6 w-11/12 mx-auto">
      <div className="w-20 mx-auto mt-4">
        <Lottie animationData={crownAnimation} loop={true} />
      </div>
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-black">
          Our Engaging & Leading Groups
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {leadingGroups.map((group, index) => (
          <Slide direction="up" triggerOnce key={index}>
            <div
              className="bg-white shadow-xl rounded-xl overflow-hidden group relative"
              data-tip={group.category}
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">

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
                <p className="text-sm text-gray-500 mb-1">📍 {group.location}</p>
                <p className="text-sm text-gray-600">👥 {group.members} Members</p>
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
