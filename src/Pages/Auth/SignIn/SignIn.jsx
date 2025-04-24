import React from 'react';
import { FaFacebook, FaGoogle, FaLock, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        const email = e.target.email.value;
        const password = e.target.password.value;   
      };
    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-md overflow-hidden bg-white rounded-lg shadow-2xl">
                {/* Header */}
                <div className="p-6 text-center bg-gradient-to-r from-blue-600 to-purple-700">
                    <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
                    <p className="mt-2 text-blue-100">Sign in to your account</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
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
                                
                               
                                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                                autoComplete="current-password"
                                required
                                
                                className="block w-full py-2 pl-10 pr-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                
                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot password?
                            </a>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-300 bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Sign In
                        </button>
                    </div>
                </form>

                {/* Social Login */}
                <div className="px-6 pb-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 text-gray-500 bg-white">Or continue with</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                            <FaGoogle className="w-5 h-5 text-red-500" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                            <FaFacebook className="w-5 h-5 text-blue-600" />
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                        >
                            <FaTwitter className="w-5 h-5 text-blue-400" />
                        </button>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 text-center bg-gray-50">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link to={"/register"} className="font-medium text-indigo-600 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;