import React from 'react';

const SingleHobby = ({singleHobby}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl border-3 border-slate-400">
                <img
                    src={singleHobby.url}
                    alt={singleHobby.catagory}
                    className="w-full h-60 object-cover  rounded-t-lg" />
                <div className="card-body">
                    <h2 className="card-title">{singleHobby.name}</h2>
                    <p className='w-2/3'>{singleHobby.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHobby;