import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';

const HobbyDetails = () => {
    const hobbyName = useLoaderData();
    const { name, url, catagory, location, members, description, date } = hobbyName;
    const today = new Date();
    const startDate = new Date(date);
    // console.log(hobbyName);

    console.log(today,startDate);

    const isGroupActive = () => {
        const t = startDate>=today;
        console.log(t);
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-center my-8 text-3xl font-extrabold'>Hobby Details</h2>
            <div className="card bg-base-100 shadow-xl lg:w-1/2 mx-auto mb-14 border-3 border-slate-700">
                <figure className=''>
                    <img
                        src={url}
                        alt="Shoes"
                        className="w-full h-80 object-cover 
                          rounded-t-lg" />
                </figure>
                <div className="card-body">
                    <p className='text-center'>{description}</p>
                    <hr className='border-dashed text-gray-400' />
                    <h2 className="text-center">Group Name: {name}</h2>
                    <hr className='border-dashed text-gray-400'/>
                    <p className='text-center'>Catagory: <span className="badge badge-primary font-bold">{catagory}</span> </p>
                    <hr className='border-dashed text-gray-400'/>
                    <h2 className='text-center '>Total Team Member: {members}</h2>
                    <hr className='border-dashed text-gray-400'/>
                    <p className='text-center'>Meeting Location : {location}</p>
                    <hr className='border-dashed text-gray-400'/>
                    <p className='text-center'>Start : {date}</p>
                    <div className=" justify-end">
                        {
                            isGroupActive ?
                                (<button className="btn btn-primary w-full">Join Group</button>) :
                                (<p className="text-center text-red-600 font-semibold">
                                    ❌ This group is no longer active.
                                </p>)
                        }
                        <Link className='flex justify-center' to={'/groups/'}>
                        <button className='w-full btn btn-neutral mt-2'>Back</button></Link>
                    </div>
                    {

                    }
                </div>
            </div>
        </div>
    );
};

export default HobbyDetails;