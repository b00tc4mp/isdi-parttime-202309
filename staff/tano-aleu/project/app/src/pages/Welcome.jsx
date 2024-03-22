import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#5F5784]">
            <div className="text-white mb-8">
                {/* Aquí iría tu logo */}
                <h1 className="text-4xl font-bold">Synqple</h1>
                <p className="text-lg">The app to synchronize your music</p>
            </div>
            <button
                className="bg-white text-[#5F5784] font-bold py-2 px-4 rounded"
                onClick={handleLogin}
            >
                Press to Login
            </button>
            <button
                className="bg-white text-[#5F5784] font-bold py-2 px-4 rounded mt-4"
                onClick={handleRegister}
            >
                Press to Register
            </button>
        </div>
    );
};

export default Welcome;