import { useState } from 'react'
import { Button } from '../library'
import { useNavigate } from 'react-router-dom'; // Importar useNavigate
import { useContext } from "../hooks"
import logo from '../assets/synqple.logo.png';
import changeUserEmail from '../logic/changeUserEmail';
import changeUserPassword from '../logic/changeUserPassword';
import Context from '../contexts/Context';


export default function ChangeCredentials() {
    console.log('ChangeCredentials')

    const navigate = useNavigate(); // Inicializar useNavigate


    // Función para manejar el clic en el botón de volver a configuraciones


    const handleBackToProfile = () => {
        navigate('/profile'); // Asegúrate de que el path coincide con el de tu componente de configuraciones
    };

    const context = useContext(Context)

    function handleChangeEmailSubmit(event) {
        console.log('Attempting to change email');
        event.preventDefault();

        const newEmail = event.target.querySelector('#new-email-input').value;
        const newEmailConfirm = event.target.querySelector('#new-email-confirm-input').value;
        const password = event.target.querySelector('#password-input').value;

        console.log(newEmail, newEmailConfirm, password); // Verificar los valores ingresados

        (async () => {
            try {
                await changeUserEmail(newEmail, newEmailConfirm, password);
                context.handleSuccess('Email changed successfully');
                event.target.reset(); // Limpia el formulario después de un cambio exitoso
            } catch (error) {
                context.handleError(error);
            }
        })();
    }

    function handleChangePasswordSubmit(event) {
        console.log('Attempting to change password');
        event.preventDefault();

        const password = event.target.querySelector('#password-input').value;
        const newPassword = event.target.querySelector('#new-password-input').value;
        const newPasswordConfirm = event.target.querySelector('#new-password-confirm-input').value;

        console.log(password, newPassword, newPasswordConfirm); // Verificar los valores ingresados

        (async () => {
            try {
                await changeUserPassword(password, newPassword, newPasswordConfirm);
                context.handleSuccess('Password changed successfully');
                event.target.reset(); // Limpia el formulario después de un cambio exitoso
            } catch (error) {
                context.handleError(error);
            }
        })();
    }


    return <div className="bg-[#5F5784] border rounded-3xl p-4 border-black flex flex-col overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">


        <div className='flex flex-col items-center justify-center '>

            <h2 className="mt-5 mb-5">Update e-mail</h2>
            <form className="form" onSubmit={handleChangeEmailSubmit}>
                <label htmlFor="new-email-input">New e-mail</label>
                <input className="input" id="new-email-input" type="email" />

                <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
                <input className="input" id="new-email-confirm-input" type="email" />

                <label htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" />

                <Button type="submit" className="update-button mt-5">Update e-mail</Button>
            </form>

            <h2 className="mt-5 mb-5">Update password</h2>

            <form className="form" onSubmit={handleChangePasswordSubmit}>
                <label htmlFor="password-input">Current password</label>
                <input className="input" type="password" id="password-input" />

                <label htmlFor="new-password-input">New password</label>
                <input className="input" id="new-password-input" type="password" />

                <label htmlFor="new-password-confirm-input">Confirm new password</label>
                <input className="input" id="new-password-confirm-input" type="password" />

                <Button type="submit" className="update-button mt-5">Update password</Button>
            </form>

            <Button className="back-button mt-5" onClick={handleBackToProfile}>Back to Profile</Button>

            <footer className="flex justify-center">
                <img src={logo} alt="Logo" className="w-40 h-auto mt-3  justify-center" />

            </footer>

        </div>

    </div>
}