import Lottie from 'lottie-react';
import { FaUser, FaLock, FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import registerLottie from '../../../assets/Lottie files/SignUp LogIn/Animation - 1745496697666.json';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { signUpWithPassword, updateUserProfile,setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
    
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photoUrl = e.target.photoUrl.value;
    
        if (!passwordRegex.test(password)) {
            setError('Password must be at least 8 characters, include uppercase, lowercase, number and special character.');
            return;
        }
    
        signUpWithPassword(email, password)
            .then((result) => {

                console.log(result.user);
                setUser(result.user)
                return updateUserProfile({
                    displayName: name,
                    photoURL: photoUrl,
                });
            })
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful',
                    text: 'You have successfully registered!',
                });
                navigate('/');
                
                
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-500 to-purple-600">
            <Lottie animationData={registerLottie} className="hidden w-1/3 md:block" />
            <div className="w-full max-w-md bg-white shadow-2xl rounded-xl">
                <div className="p-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700">
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                    <p className="mt-2 text-indigo-100">Join our community today</p>
                </div>

                <form onSubmit={handleRegister} className="p-6 space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <div className="relative">
                            <FaUser className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                            <input name="name" type="text" required className="w-full py-2 pl-10 pr-3 border rounded-md" placeholder="Your name" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Photo URL</label>
                        <div className="relative">
                            <FaCamera className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                            <input name="photoUrl" type="url" className="w-full py-2 pl-10 pr-3 border rounded-md" placeholder="https://example.com/photo.jpg" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <div className="relative">
                            <HiMail className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                            <input name="email" type="email" required className="w-full py-2 pl-10 pr-3 border rounded-md" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <FaLock className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                            <input
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                required
                                className="w-full py-2 pl-10 pr-10 border rounded-md"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                    </div>

                    <button type="submit" className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
                        Create Account
                    </button>
                </form>

                <div className="px-6 py-4 text-center bg-gray-50">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-indigo-600 hover:underline">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
