import React from 'react';

const HobbyCard = ({hobby}) => {
    return (
        // transition-transform duration-300 hover:scale-105
        <div className=''>
            <div className="card bg-base-100 shadow-xl ">
                    <img
                        src={hobby.url}
                        alt={hobby.catagory}
                        className="w-full h-60 object-cover  rounded-t-lg" />
                <div className="card-body">
                    <h2 className="card-title">{hobby.name}</h2>
                    <p className='w-2/3'>{hobby.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Ongoing</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HobbyCard;