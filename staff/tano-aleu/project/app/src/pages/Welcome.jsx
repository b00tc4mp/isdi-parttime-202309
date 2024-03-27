import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button } from '../library';
import logo from '../assets/synqple.logo.png';
import versionLogo from '../assets/synqple.logo.png'
import logoSolo from '../assets/synqple.logo.SOLO.png'

const Welcome = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <Container class="bg-[#5F5784] text-white p-5 flex flex-col space-y-1 overflow-auto min-h-screen">

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


            <footer className=" text-white text-center py-0 mt-20 ">

                <img src={logo} alt="Logo" className="w-40 h-auto mt-30" />

            </footer>

        </Container>
    );
};

export default Welcome;