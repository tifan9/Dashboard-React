import React, { useState } from 'react';
import { Eye, EyeOff, Package } from 'lucide-react';

import Button from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
// Reusable Components
const Card = ({ children, className = '' }) => (
    <div className={`bg-white rounded-lg shadow-xl border border-gray-300 ${className}`}>
        {children}
    </div>
);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleLogin = () => {
        console.log('Login attempted with:', formData);
    };

    return (
        <div className="min-h-screen bg-primarycolor-600 flex items-center justify-center p-4">
            <Card className="w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primarycolor-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Package className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">iHUZA INVENTORY</h1>
                    <p className="text-gray-600 mt-2">Sign in to your account</p>
                </div>

                <div className="space-y-6">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-primarycolor-500 focus:border-transparent"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                            <button
                                type="button"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="rounded border-gray-300 text-primarycolor-600 focus:ring-primarycolor-500" />
                            <span className="ml-2 text-sm text-gray-600">Remember me</span>
                        </label>
                        <button className="text-sm text-primarycolor-600 hover:text-primarycolor-700">Forgot password?</button>
                    </div>
                    <Link to="/">
                        <Button className="w-full" size="xl" onClick={handleLogin} label="Sign In" />
                    </Link>

                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?
                        <button className="text-primarycolor-600 hover:text-primarycolor-700 ml-1">Contact admin</button>
                    </p>
                </div>
            </Card>
        </div>
    );
};

export default Login;