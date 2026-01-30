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

        fetch(`https://b11-a10-papaya-server-liart.vercel.app/hobbies/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateHobby),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    fetch(`https://b11-a10-papaya-server-liart.vercel.app/hobbies/${id}`)
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

    // Helper to close modal without saving
    const handleClose = () => {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) modal.close();
    }

    return (
        <dialog id={`modal-${id}`} className="modal modal-bottom sm:modal-middle">
            {/* FIXED: Removed default white bg to allow our inner div to control theme */}
            <div className="modal-box p-0 bg-transparent shadow-none w-11/12 max-w-5xl">
                
                {/* FIXED: 
                    1. bg-sky-200 -> bg-base-100 (White/Dark Slate)
                    2. Added text-base-content for general text color
                */}
                <div className="w-full mx-auto p-6 md:p-8 bg-base-100 rounded-xl shadow-2xl border border-base-300">
                    
                    {/* FIXED: text-amber-500 -> text-primary */}
                    <h2 className="text-3xl text-primary font-bold mb-6 text-center">Update Group</h2>
                    
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleUpdateUser}>
                        
                        {/* Group Name */}
                        <div>
                            {/* FIXED: text-black -> text-base-content */}
                            <label className="block text-sm font-medium mb-1 text-base-content">Group Name</label>
                            <input 
                                type="text" 
                                name="groupName" 
                                value={formData.groupName} 
                                onChange={handleChange} 
                                // FIXED: Replaced manual style with 'input input-bordered bg-base-200'
                                className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>

                        {/* Hobby Category */}
                        <div>
                            <label className="text-base-content block text-sm font-medium mb-1">Hobby Category</label>
                            <select 
                                name="catagory" 
                                value={formData.catagory} 
                                onChange={handleChange} 
                                className="select select-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required
                            >
                                <option disabled>Select category</option>
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

                        {/* Location */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-base-content">Meeting Location</label>
                            <input 
                                type="text" 
                                name="location" 
                                value={formData.location} 
                                onChange={handleChange} 
                                className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>

                        {/* Max Members */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-base-content">Max Members</label>
                            <input 
                                type="number" 
                                name="members" 
                                value={formData.members} 
                                onChange={handleChange} 
                                className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>

                        {/* Start Date */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-base-content">Start Date</label>
                            <input 
                                type="date" 
                                name="date" 
                                value={formData.date} 
                                onChange={handleChange} 
                                className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-sm font-medium mb-1 text-base-content">Image URL</label>
                            <input 
                                type="url" 
                                name="url" 
                                value={formData.url} 
                                onChange={handleChange} 
                                className="input input-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>

                        {/* Description */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-1 text-base-content">Description</label>
                            <textarea 
                                name="description" 
                                value={formData.description} 
                                onChange={handleChange} 
                                className="textarea textarea-bordered w-full bg-base-200 focus:outline-none focus:border-primary" 
                                rows={3}
                            ></textarea>
                        </div>

                        {/* Actions */}
                        <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                            {/* Added a Cancel button for better UX */}
                            <button 
                                type="button" 
                                onClick={handleClose}
                                className="btn btn-ghost"
                            >
                                Cancel
                            </button>
                            <button type="submit" className="btn btn-primary">Update Group</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* Click outside to close (standard daisyUI modal behavior) */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default UpdateGroup;