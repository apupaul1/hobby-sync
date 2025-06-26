import React from 'react';
import { IoIosCreate } from "react-icons/io";
import { MdMeetingRoom } from "react-icons/md";
import { FcInvite } from "react-icons/fc";

const HowItWorks = () => {
  return (
    <section className=" px-4 text-center w-11/12 mx-auto ">
      <h2 className="text-3xl font-bold  text-slate-700 my-12">How It Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="p-12 shadow-md bg-base-100 rounded-xl flex flex-col justify-center items-center">
          <IoIosCreate color='blue' size={45}/>
          <h3 className="text-xl font-semibold mb-2">Create a Group</h3>
          <p>Create a hobby group in just a few steps by filling out a simple form.</p>
        </div>
        <div className="p-12 shadow-md bg-base-100 rounded-xl flex flex-col justify-center items-center">
          <FcInvite size={45} />
          <h3 className="text-xl font-semibold mb-2">Invite Members</h3>
          <p>Invite others who share your hobby to join your group.</p>
        </div>
        <div className="p-12 shadow-md bg-base-100 rounded-xl flex flex-col justify-center items-center">
          <MdMeetingRoom size={45}/>
          <h3 className="text-xl font-semibold mb-2">Meet and Collaborate</h3>
          <p>Organize meetups, events, and collaborate on projects.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
