import React from 'react';
import Swal from 'sweetalert2';
import Bg from '../assets/18773518_6031991.jpg'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const CreateGroup = () => {
    const { user } = use(AuthContext)
    const email = user?.email;
    const name = user?.displayName;

    const handleAddHobby = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newHobby = Object.fromEntries(formData.entries())

        // Send data to the DB
        fetch('https://b11-a10-papaya-server-liart.vercel.app/hobbies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHobby)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Group Successfully Created",
                        icon: "success",
                        draggable: true
                    });
                    form.reset()
                }
            })
    }

    return (
        <div
            className='bg-base-200 p-12 min-h-screen flex items-center justify-center'
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
            
            <div className="max-w-5xl w-full mx-auto p-8 bg-base-100/95 backdrop-blur-sm rounded-xl shadow-xl transition-colors duration-300">
                <h2 className="text-3xl text-primary font-bold mb-3 text-center">Create a New Hobby Group</h2>
                
                {/* FIXED: text-gray-500 -> text-base-content/60 */}
                <p className='w-3/4 mx-auto text-center text-sm text-base-content/60 mb-12'>
                    Create a new hobby group to connect with like-minded individuals who share your interests. Whether it's art, gaming, reading, or outdoor activities, bring your community together by starting your own group today!
                </p>
                
                <form
                    onSubmit={handleAddHobby}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Group Name */}
                    <div>
                        {/* FIXED: text-black -> text-base-content */}
                        <label className="block text-sm font-medium mb-1 text-base-content">Group Name</label>
                        <input
                            type="text"
                            // FIXED: Added 'input input-bordered bg-base-200' for better dark mode inputs
                            className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            placeholder="Enter group name"
                            name='groupName' 
                        />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="text-base-content block text-sm font-medium mb-1">Hobby Category</label>
                        <select
                            className="select select-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            name='catagory'
                            required>
                            <option disabled selected>Select category</option>
                            <option>Drawing & Painting</option>
                            <option>Photography</option>
                            <option>Video Gaming</option>
                            <option>Fishing</option>
                            <option>Running</option>
                            <option>Cooking</option>
                            <option>Reading</option>
                            <option>Writing</option>
                        </select>
                    </div>

                    {/* Meeting Location */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">Meeting Location</label>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            placeholder="Enter location"
                            name='location'
                            required />
                    </div>

                    {/* Max Members */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">Max Members</label>
                        <input
                            type="text"
                            className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            placeholder="Enter max members"
                            name='members'
                            required />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">Start Date</label>
                        <input
                            type="date"
                            className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            name='date'
                            required />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">Image URL</label>
                        <input
                            type="url"
                            className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary"
                            placeholder="Enter image URL"
                            name='url'
                            required />
                    </div>

                    {/* User Name (Read Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">User Name</label>
                        <input
                            name="name"
                            type="text"
                            // FIXED: bg-gray-200 -> bg-base-300 (Darker distinct background for read-only)
                            className="input input-bordered w-full bg-base-300 text-base-content/70 cursor-not-allowed"
                            value={name}
                            readOnly />
                    </div>

                    {/* User Email (Read Only) */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-base-content">User Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered w-full bg-base-300 text-base-content/70 cursor-not-allowed"
                            value={email}
                            readOnly />
                    </div>

                    {/* Description - Full Width */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1 text-base-content">Description</label>
                        <textarea
                            className="textarea textarea-bordered w-full bg-base-200 h-24 focus:outline-none focus:border-primary"
                            placeholder="Enter group description"
                            name='description'
                            required>
                        </textarea>
                    </div>

                    {/* Submit Button - Full Width */}
                    <div className="md:col-span-2 text-center pt-4">
                        <button type='submit'
                            // FIXED: Removed hover:bg-slate-900. btn-primary handles hover automatically.
                            className="btn btn-primary w-full md:w-1/2 text-lg">
                            Create Group
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateGroup;