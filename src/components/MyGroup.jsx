import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import UpdateGroup from './UpdateGroup';

const MyGroup = () => {
    const { user } = useContext(AuthContext);
    const [myHobby, setMyHobby] = useState([]);
    const name = user?.displayName;

    useEffect(() => {
        if (name) {
            fetch(`https://b11-a10-papaya-server-liart.vercel.app/hobbies/creator/${name}`)
                .then(res => res.json())
                .then(data => setMyHobby(data));
        }
    }, [name]);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b11-a10-papaya-server-liart.vercel.app/hobbies/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingGroups = myHobby.filter(hobby => hobby._id !== id);
                            setMyHobby(remainingGroups);

                            Swal.fire({
                                title: "Deleted!",
                                text: "Group has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        });
    };

    const openModal = (id) => {
        const modal = document.getElementById(`modal-${id}`);
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <div className='mb-16'>
            {/* FIXED: Changed text color to generic base-content */}
            <h2 className="text-2xl font-bold my-12 text-center text-base-content">My Hobby Groups</h2>
            
            {myHobby.length === 0 ? (
                <div className='text-center'>
                    {/* FIXED: Muted text for dark mode */}
                    <p className="text-center my-4 text-base-content/60">No groups found.</p>
                    <Link to={'/createGroup'}>
                        <button className='btn btn-primary'>
                            Create Group
                        </button>
                    </Link>
                </div>
            ) : (
                /* FIXED: 
                   1. bg-amber-100 -> bg-base-100 (White in Light / Slate 900 in Dark)
                   2. Added shadow and border for better separation
                */
                <div className="overflow-x-auto w-11/12 mx-auto bg-base-100 p-4 rounded-xl border border-base-300 shadow-sm">
                    <table className="table">
                        {/* Head */}
                        <thead>
                            {/* FIXED: text-black -> text-base-content/70 */}
                            <tr className='text-base-content/70 border-b-base-300'>
                                <th>Group</th>
                                <th>Category & Members</th>
                                <th>Created By</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        {/* Body */}
                        <tbody className='text-base-content'>
                            {myHobby.map((item) => (
                                /* FIXED: Added hover effect and border color adjustment */
                                <tr key={item._id} className="border-b-base-200 hover:bg-base-200/50 transition-colors">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={item.image || "https://i.pravatar.cc/150?img=12"}
                                                        alt="group avatar"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.groupName}</div>
                                                <div className="text-sm opacity-60">Location : {item.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.catagory}
                                        <br />
                                        <span className='opacity-60 text-xs'>Total Members : {item.members}</span>
                                    </td>
                                    <td>{item.name}</td>
                                    <th className='flex justify-center items-center mt-2'>
                                        <div className="flex gap-2 justify-between">
                                            
                                            <button className="btn btn-info btn-sm text-white"
                                                onClick={() => openModal(item._id)}>
                                                Update
                                            </button>
                                            
                                            <UpdateGroup
                                                id={item._id}
                                                currentData={item}
                                                onUpdateSuccess={(updatedGroup) => {
                                                    setMyHobby(prev =>
                                                        prev.map(group =>
                                                            group._id === updatedGroup._id ? updatedGroup : group
                                                        )
                                                    );
                                                }}
                                            />
                                            
                                            <button
                                                onClick={() => handleDelete(item._id)}
                                                className="btn btn-error btn-sm text-white">
                                                Delete
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyGroup;