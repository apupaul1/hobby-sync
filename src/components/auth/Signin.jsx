import React from 'react';
import { Link } from 'react-router';
import Bg from '/bg.webp'

const Signin = () => {
    return (
        <div style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
        }}>
            <div className="hero min-h-screen backdrop-blur-xs">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className='relative'>
                        {/* <Link to='/'>
                            <button className='btn btn-neutral absolute top-2 left-2'>Go Back</button>
                        </Link> */}
                        <h2 className='text-center font-bold text-3xl pt-12'>Login</h2>
                    </div>
                    <form className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input"
                                placeholder="Email"
                                name="email"
                                required />
                            <label className="label">Password</label>
                            <input
                                type="password"
                                className="input"
                                placeholder="Password"
                                name='password'
                                required />
                            <div><Link to='/auth/forgetpassword' className="link link-hover">Forgot password?</Link></div>

                            {/* {error && <p className='text-red-400 text-xs'>{error}</p>} */}

                            <button type='submit' className="btn btn-neutral mt-4">Login</button>
                            <button className="btn btn-outline mt-4 hover:bg-slate-900 hover:text-white"> Sign in using Google</button>
                            <p className='text-right'>Don't have Any Account? <Link to='/signup' className='underline text-red-400'>Register</Link> </p>
                        </fieldset>

                    </form>

                    {/* <div className='flex flex-col p-8 pt-0'>
                        <button className="btn btn-outline mt-4 hover:bg-slate-900 hover:text-white"><FcGoogle size={20} /> Sign in using Google</button>
                        <button className="btn btn-outline mt-4 hover:bg-slate-900 hover:text-white"> <FaGithub size={20} /> Sign in using Github</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};


export default Signin;