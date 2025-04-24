import { FaUser, FaLock, FaCamera, FaEye, FaEyeSlash } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="w-full max-w-md overflow-hidden bg-white shadow-2xl rounded-xl">
                {/* Header */}
                <div className="p-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700">
                    <h1 className="text-3xl font-bold text-white">Create Account</h1>
                    <p className="mt-2 text-indigo-100">Join our community today</p>
                </div>

                {/* Signup Form */}
                <form className="p-6 space-y-5">
                    {/* Name Field */}
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaUser className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    {/* Photo URL Field with Preview */}
                    <div className="space-y-2">
                        <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700">
                            Profile Photo URL
                        </label>
                        <div className="flex items-center space-x-4">
                           
                            <div className="relative flex-1">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <FaCamera className="w-5 h-5 text-gray-400" />
                                </div>
                                <input
                                    id="photoUrl"
                                    name="photoUrl"
                                    type="url"
                                    className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <HiMail className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <FaLock className="w-5 h-5 text-gray-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="block w-full py-2 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                <FaEye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                            </button>
                        </div>

                        {/* Password Strength Meter */}
                        <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">Password strength</p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-300 bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Account
                        </button>
                    </div>
                </form>

                {/* Footer */}
                <div className="px-6 py-4 text-center bg-gray-50">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link to={"/signin"} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;