import React from 'react';
import Swal from 'sweetalert2';
import Bg from '../assets/18773518_6031991.jpg'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const CreateGroup = () => {
const {user} = use(AuthContext)
    const email = user?.email;
    const name = user?.displayName;
    // console.log(user?.displayName);

    const handleAddHobby = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newHobby = Object.fromEntries(formData.entries())
        console.log(newHobby);

        // Send data to the DB
        fetch('http://localhost:3000/hobbies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHobby)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('After adding coffee to db', data);
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
            className='bg-slate-200 p-12'
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: 'h-full',
                width: '100%',
            }}>
            <div className="max-w-5xl mx-auto mt-10 p-8 bg-sky-200 rounded-xl shadow-lg"
            >
                <h2 className="text-3xl font-bold mb-3 text-center">Create a New Hobby Group</h2>
                <p className='w-3/4 mx-auto text-center text-sm text-gray-500 mb-12'>Create a new hobby group to connect with like-minded individuals who share your interests. Whether it's art, gaming, reading, or outdoor activities, bring your community together by starting your own group today!</p>
                <form
                    onSubmit={handleAddHobby}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Group Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Group Name</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-base-100 rounded shadow-lg"
                            placeholder="Enter group name"
                            name='groupName' />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Hobby Category</label>
                        <select
                            className="w-full p-2 bg-base-100 shadow-lg rounded"
                            name='catagory'
                            required>
                            <option>Select category</option>
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
                        <label className="block text-sm font-medium mb-1">Meeting Location</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-base-100  rounded shadow-lg " 
                            placeholder="Enter location"
                            name='location'
                            required />
                    </div>

                    {/* Max Members */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Max Members</label>
                        <input
                            type="number"
                            className="w-full p-2 bg-base-100 rounded shadow-lg " placeholder="Enter max members"
                            name='members'
                            required />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Start Date</label>
                        <input
                            type="date"
                            className="w-full p-2 bg-base-100 rounded shadow-lg "
                            name='date' />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Image URL</label>
                        <input
                            type="url"
                            className="w-full p-2 bg-base-100  rounded shadow-lg " placeholder="Enter image URL"
                            name='url' />
                    </div>

                    {/* User Name */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Name</label>
                        <input
                        name = "name"
                            type="text"
                            className="w-full p-2 rounded bg-gray-200 shadow-lg " 
                            value={name} readOnly />
                    </div>

                    {/* User Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">User Email</label>
                        <input 
                        name = "email"
                        type="email" 
                        className="w-full p-2 rounded bg-gray-200 shadow-lg " 
                        value={email} readOnly />
                    </div>

                    {/* Description - Full Width */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <textarea
                            className="w-full p-2 bg-base-100 shadow-lg rounded" rows="4"
                            placeholder="Enter group description"
                            name='description'></textarea>
                    </div>

                    {/* Submit Button - Full Width */}
                    <div className="md:col-span-2 text-center pt-4">
                        <button type='submit' 
                        className="btn btn-primary hover:bg-slate-900">Create</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateGroup;
