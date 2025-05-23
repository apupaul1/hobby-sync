import React from 'react';
import { Link } from 'react-router';

const SingleHobby = ({ singleHobby }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-3 border-slate-400">
                <img
                    src={singleHobby.url}
                    alt={singleHobby.catagory}
                    className="w-full h-60 object-cover rounded-t-lg" />
                <div className="card-body">
                    <h2 className="card-title">Group Name : {singleHobby.name}</h2>
                    <p className='w-4/5'>{singleHobby.description}</p>
                    <div className=" justify-end">
                        <Link to={`/group/${singleHobby._id}`}>
                            <button className="btn btn-primary w-full">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHobby;