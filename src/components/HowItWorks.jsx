import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 shadow-md bg-white rounded-xl">
          <h3 className="text-xl font-semibold mb-2">1. Create a Group</h3>
          <p>Create a hobby group in just a few steps by filling out a simple form.</p>
        </div>
        <div className="p-4 shadow-md bg-white rounded-xl">
          <h3 className="text-xl font-semibold mb-2">2. Invite Members</h3>
          <p>Invite others who share your hobby to join your group.</p>
        </div>
        <div className="p-4 shadow-md bg-white rounded-xl">
          <h3 className="text-xl font-semibold mb-2">3. Meet and Collaborate</h3>
          <p>Organize meetups, events, and collaborate on projects.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
