import React, { useEffect, useState, useContext, use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyGroup = () => {
    const { user } = use(AuthContext);
    const [myHobby, setMyHobby] = useState([]);

    console.log(user);

    const name = user?.displayName;

    console.log(name);

    useEffect(() => {
        if (name) {
            fetch(`http://localhost:3000/hobbies/creator/${name}`)
                .then(res => res.json())
                .then(data => setMyHobby(data));
        }
    }, [user]);

    return (
        <div>
            <h2 className="text-2xl font-bold my-12 text-center">My Hobby Groups</h2>
            <div className="my-8 overflow-x-auto rounded-box border border-base-content/5 p-4 w-11/12 mx-auto bg-amber-100">
                {myHobby.length === 0 ? (
                    <p>No groups found.</p>
                ) : (
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th>#</th>
                                <th>Group Name</th>
                                <th>Category</th>
                                <th>Created By</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {myHobby.map((item, index) => (
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>{item.groupName}</td>
                                    <td>{item.catagory}</td>
                                    <td>{item.name}</td>
                                    <td className="flex gap-6 justify-center">
                                        <button
                                            className="btn btn-sm btn-info"
                                            onClick={() => handleUpdate(item._id)}
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-sm btn-error"
                                            onClick={() => handleDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default MyGroup;
