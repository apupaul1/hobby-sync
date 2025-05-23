import React from 'react';
import { Link } from 'react-router';
import Bg from '/bg.webp'
const Signup = () => {
    return (
        <div
        style={{
                    backgroundImage: `url(${Bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                }}>
            <div className="hero min-h-screen backdrop-blur-xs">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h2 className='text-center font-bold text-3xl pt-8'>Register your Account</h2>

                    <form className="card-body">
                        <fieldset className="fieldset">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input"
                                placeholder="Name"
                                required />

                            {/* email */}
                            <label className="label">Email</label>
                            <input
                                name='email'
                                type="email"
                                className="input"
                                placeholder="Email"
                                required />

                            {/* Photo Url */}
                            <label className="label">Photo URL</label>
                            <input
                                name='photo'
                                type="url"
                                className="input"
                                placeholder="Photo URL"
                                required />

                            {/* Password */}
                            <label className="label">Password</label>
                            <input
                                name='password'
                                type="password"
                                className="input"
                                placeholder="Password"
                                pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
                                required />

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='text-right'>Already have An Account? <Link to='/signin' className='underline'>Login</Link> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Signup;