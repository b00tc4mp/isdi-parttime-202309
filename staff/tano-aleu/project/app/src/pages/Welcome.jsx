import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '../library';
import logo from '../assets/synqple.logo.png';
import versionLogo from '../assets/synqple.logo.png'
import logoSolo from '../assets/synqple.logo.SOLO.png'

const Welcome = () => {
    console.log('Welcome')
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="bg-[#5F5784] border rounded-3xl p-4 border-black text-white flex flex-col overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

            <div className='flex flex-col items-center justify-center '>

                <img src={versionLogo} alt="versionLogo" className="w-80 h-auto mt-20 " />

                <div className="text-white mb-8">
                    {/* Aquí iría tu logo */}

                    <p className="text-md">The app to synchronize your music</p>
                </div>


                <img src={logoSolo} alt="Logo" className="w-40 h-auto mt-10" />

                <Button
                    type="submit" className="login-register-button"
                    onClick={handleLogin}
                >
                    Press to Login
                </Button>

                <Button type="submit" className="login-register-button"
                    onClick={handleRegister}
                >
                    Press to Register
                </Button>


                <footer className=" text-white text-center  ">

                    <img src={logo} alt="Logo" className="w-40 h-auto mt-40" />

                </footer>

            </div>
        </div>
    );
};

export default Welcome;