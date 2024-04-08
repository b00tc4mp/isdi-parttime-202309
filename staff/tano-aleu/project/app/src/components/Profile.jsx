import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfilePic from '../assets/profile_img/synqple_profile_default.png';
import retrieveUser from '../logic/retrieveUser'; // Asegúrate de tener el path correcto a tu función retrieveUser
import deleteUser from '../logic/deleteUser';
import { Button } from '../library';
import logo from '../assets/synqple.logo.png';
import logoutUser from '../logic/logoutUser';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({ id: null, name: 'Loading...' }); // Estado inicial del usuario

    useEffect(() => {
        // Función IIFE para usar async/await dentro de useEffect
        (async () => {
            try {
                const userInfo = await retrieveUser();
                console.log("userInfo:", userInfo)
                setUser(userInfo); // Actualiza el estado con la información del usuario
            } catch (error) {
                console.error('Failed to retrieve user:', error);
                // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
            }
        })();
    }, []); // El array vacío asegura que esto se ejecute solo una vez al montar el componente

    const handleProfilePicUpload = (event) => {
        const file = event.target.files[0];
        console.log(file);
        // Aquí implementarías la subida del archivo
    };

    const navigateToUpdateCredentials = () => {
        navigate('/change-credentials');
    };

    const handleBackToSettings = () => {
        navigate('/settings'); // Asegúrate de que el path coincide con el de tu componente de configuraciones
    };

    const handleDeleteAccount = async () => {
        if (user.id && window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                console.log("Deleting user with ID:", user.id); // Debug
                await deleteUser(user.id);
                alert('Your account has been successfully deleted.');

                // Limpia el estado de sesión 
                logoutUser(() => {
                    console.log('Session cleared, redirecting to login.');
                    navigate('/login'); // Asegúrate de que la ruta al login sea correcta
                });

                navigate('/login'); // Redirige al login
            } catch (error) {
                console.error('Failed to delete account:', error);
                alert('Failed to delete account. Please try again.');
            }
        } else {
            console.error("User ID is not available for deletion.");
            // Maneja el caso de ID no disponible
        }
    };



    return (
        <div className="bg-[#5F5784] border rounded-3xl p-10 border-black text-white flex flex-col space-y-1 overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

            <div className='flex flex-col items-center justify-center '>

                <h3 className="text-lg text-white rounded-full mb-20 ">
                    Profile Info
                </h3>

                <div className="relative mb-6">
                    <img src={defaultProfilePic} alt="Profile" className="w-32 h-32 rounded-full" />
                    <div className="absolute bottom-0 right-2 bg-white p-1 rounded-full">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePicUpload}
                            className="hidden"
                            id="profile-pic-upload"
                        />
                        <label htmlFor="profile-pic-upload" className="cursor-pointer">
                            <i className="fas fa-plus-circle text-[#5F5784]">+</i> {/* Icono de carga, usa una librería de iconos o una imagen */}
                        </label>
                    </div>
                </div>

                <h2 className="text-2xl mb-10">{user.name}</h2>



                <button
                    onClick={navigateToUpdateCredentials} // Asumiendo que esto también navega a la sección de actualización de credenciales
                    className="text-lg text-white bg-transparent border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#5F5784] transition duration-300 ease-in-out"
                >
                    Update credentials
                </button>

                <Button className="text-lg text-white bg-transparent border border-white rounded-full px-6 py-2 hover:bg-white hover:text-[#5F5784] transition duration-300 ease-in-out mt-4" onClick={handleDeleteAccount}>
                    Delete Account
                </Button>


                <Button className="back-button mt-20" onClick={handleBackToSettings}>Back to Settings</Button>

                <footer className="flex justify-center">
                    <img src={logo} alt="Logo" className="w-40 h-auto mt-60  justify-center" />

                </footer>
            </div>
        </div>
    );
};

export default Profile;
