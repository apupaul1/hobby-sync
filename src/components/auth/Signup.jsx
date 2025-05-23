import { Link } from 'react-router';
import Bg from '/bg.webp';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, setUser, updateUser } = use(AuthContext);

    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    title: "Successfully Registered",
                    icon: "success",
                    draggable: true
                });
                updateUser(name, photo)
                    .then(() => {
                        setUser({
                            ...user,
                            displayName: name,
                            photoURL: photo,
                        });
                        navigate('/');
                    })
                    .catch((error) => {
                        alert('Profile update error: ' + error.message);
                    });
            })
            .catch((error) => {
                alert('Signup error: ' + error.message);
            });
    };

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
            <div className="hero min-h-screen px-4 sm:px-0 backdrop-blur-xs">
                <div className="card bg-base-100 w-full max-w-sm shadow-2xl border my-8 mx-auto">
                    <h2 className="text-center font-bold text-2xl sm:text-3xl pt-8">
                        Register your Account
                    </h2>

                    <form onSubmit={handleSignup} className="card-body">
                        <fieldset className="space-y-2">
                            {/* Name */}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Name"
                                required
                            />

                            {/* Email */}
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Email"
                                required
                            />

                            {/* Photo URL */}
                            <label className="label">Photo URL</label>
                            <input
                                name="photo"
                                type="url"
                                className="input input-bordered w-full"
                                placeholder="Photo URL"
                                required
                            />

                            {/* Password */}
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input input-bordered w-full"
                                placeholder="Password"
                                pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                                title="Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
                                required
                            />

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-neutral w-full mt-4">
                                Register
                            </button>

                            {/* Login Link */}
                            <p className="text-right text-sm">
                                Already have an account?{' '}
                                <Link to="/signin" className="underline">
                                    Login
                                </Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
