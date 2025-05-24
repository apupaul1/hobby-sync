import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateGroup = ({ id, currentData, onUpdateSuccess }) => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const name = user?.displayName;

    const [formData, setFormData] = useState({
        groupName: '',
        catagory: '',
        location: '',
        members: '',
        date: '',
        url: '',
        description: '',
    });

    useEffect(() => {
        if (currentData) {
            setFormData({
                groupName: currentData.groupName || '',
                catagory: currentData.catagory || '',
                location: currentData.location || '',
                members: currentData.members || '',
                date: currentData.date || '',
                url: currentData.url || '',
                description: currentData.description || '',
            });
        }
    }, [currentData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const updateHobby = {
            ...formData,
            email,
            name,
        };

        fetch(`http://localhost:3000/hobbies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateHobby),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch(`http://localhost:3000/hobbies/${id}`)
                        .then(res => res.json())
                        .then(updatedGroup => {
                            onUpdateSuccess(updatedGroup);
                            Swal.fire({
                                title: "Successfully Updated",
                                icon: "success",
                            });
                            const modal = document.getElementById(`modal-${id}`);
                            if (modal) modal.close();
                        });
                }
            });
    };

    return (
        <dialog id={`modal-${id}`} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
                <div className="max-w-5xl mx-auto mt-2 p-4 bg-sky-200 rounded-xl shadow-lg">
                    <h2 className="text-3xl text-amber-500 font-bold mb-6 text-center">Update Group</h2>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleUpdateUser}>
                        <div>
                            <label className="block text-sm font-medium mb-1 text-black">Group Name</label>
                            <input type="text" name="groupName" value={formData.groupName} onChange={handleChange} className="w-full p-2 bg-base-100 rounded shadow-lg" required />
                        </div>

                        <div>
                            <label className="text-black block text-sm font-medium mb-1">Hobby Category</label>
                            <select name="catagory" value={formData.catagory} onChange={handleChange} className="w-full p-2 bg-base-100 shadow-lg rounded" required>
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

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black">Meeting Location</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full p-2 bg-base-100  rounded shadow-lg" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black">Max Members</label>
                            <input type="number" name="members" value={formData.members} onChange={handleChange} className="w-full p-2 bg-base-100 rounded shadow-lg" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black">Start Date</label>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full p-2 bg-base-100 rounded shadow-lg" required />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1 text-black">Image URL</label>
                            <input type="url" name="url" value={formData.url} onChange={handleChange} className="w-full p-2 bg-base-100  rounded shadow-lg" required />
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1 text-black">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 bg-base-100 rounded shadow-lg" rows={3}></textarea>
                        </div>

                        <div className="md:col-span-2 flex justify-end">
                            <button type="submit" className="btn btn-success">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default UpdateGroup;
