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
            <h2 className="text-2xl font-bold my-12 text-center">My Hobby Groups</h2>
            {myHobby.length === 0 ? (
                <div className='text-center'>
                    <p className="text-center my-4 text-gray-500">No groups found.</p>
                    <Link to={'/createGroup'}>
                        <button className='btn btn-neutral'>
                            Create Group
                        </button>
                    </Link>
                </div>
            ) : (
                <div className="overflow-x-auto w-11/12 mx-auto bg-amber-100 p-4 rounded-box border border-base-content/5">
                    <table className="table">
                        <thead>
                            <tr className='text-black'>
                                <th>Group</th>
                                <th>Category & Members</th>
                                <th>Created By</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-black'>
                            {myHobby.map((item) => (
                                <tr key={item._id}>
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
                                                <div className="text-sm opacity-80">Location : {item.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.catagory}
                                        <br />
                                        <span className='opacity-80'>Total Members : {item.members}</span>
                                    </td>
                                    <td>{item.name}</td>
                                    <th className='flex justify-center items-center mt-2'>
                                        <div className="flex gap-2 justify-between">
                                            <button className="btn btn-info"
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
                                                className="btn btn-error">
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
