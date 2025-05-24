import { Link, useLocation, useNavigate } from 'react-router';
import Bg from '/bg.webp';
import { AuthContext } from '../../provider/AuthProvider';
import { use } from 'react';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Signin = () => {
    const { signIn, googleSignIn } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(`${location.state ? location.state : '/'}`);
                Swal.fire({
                    title: "Login Successfully!",
                    icon: "success",
                    draggable: true
                });
            })
            .catch((error) => {
                const erroressage = error.message;
                const errorcode = error.code;
                Swal.fire({
                    icon: "error",
                    title: errorcode,
                    text: erroressage,
                });
            });
    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                console.log(error);
            }
            )
    }

    return (
        <div
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                width: '100%',
            }}
        >
            <div className="hero min-h-screen backdrop-blur-xs px-4 sm:px-0">
                <div className="card bg-base-100 w-full max-w-sm mx-auto shadow-2xl my-10">
                    <div className='relative'>
                        <Link to='/'>
                            <button className='btn btn-neutral absolute top-2 left-2'>Go Back</button>
                        </Link>
                        <h2 className='text-center font-bold text-2xl sm:text-3xl pt-12'>Login</h2>
                    </div>

                    <form onSubmit={handleSignin} className="card-body space-y-4">
                        <div>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <label className="label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="text-right">
                            <Link to='/auth/forgetpassword' className="link link-hover">
                                Forgot password?
                            </Link>
                        </div>

                        <button type='submit' className="btn btn-neutral w-full">Login</button>

                        <p className='text-right text-sm'>
                            Don't have an account?{' '}
                            <Link to='/signup' className='underline text-red-400'>
                                Register
                            </Link>
                        </p>
                    </form>

                    {/* Google/GitHub sign in */}
                    <div className='flex flex-col p-8 pt-0'>
                        <button onClick={handleGoogleSignIn}
                            className="btn btn-outline mt-4 hover:bg-slate-900 hover:text-white">
                            <FcGoogle size={20} /> Sign in using Google
                        </button>
                        <button className="btn btn-outline mt-4 hover:bg-slate-900 hover:text-white">
                            <FaGithub size={20} /> Sign in using Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;
