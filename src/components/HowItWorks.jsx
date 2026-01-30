import React from 'react';
import { IoIosCreate } from "react-icons/io";
import { MdMeetingRoom } from "react-icons/md";
import { FcInvite } from "react-icons/fc";

const HowItWorks = () => {
  return (
    <section className="px-4 text-center w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-base-content my-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-12 shadow-md bg-base-200 rounded-xl flex flex-col justify-center items-center transition-colors duration-300">
          <IoIosCreate className="text-primary" size={45}/>
          <h3 className="text-xl font-semibold mb-2 text-base-content">Create a Group</h3>
          <p className="text-base-content/70">Create a hobby group in just a few steps by filling out a simple form.</p>
        </div>

        {/* Card 2 */}
        <div className="p-12 shadow-md bg-base-200 rounded-xl flex flex-col justify-center items-center transition-colors duration-300">

          <FcInvite size={45} />
          <h3 className="text-xl font-semibold mb-2 text-base-content">Invite Members</h3>
          <p className="text-base-content/70">Invite others who share your hobby to join your group.</p>
        </div>
        <div className="p-12 shadow-md bg-base-200 rounded-xl flex flex-col justify-center items-center transition-colors duration-300">

          <MdMeetingRoom className="text-primary" size={45}/>
          <h3 className="text-xl font-semibold mb-2 text-base-content">Meet and Collaborate</h3>
          <p className="text-base-content/70">Organize meetups, events, and collaborate on projects.</p>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;