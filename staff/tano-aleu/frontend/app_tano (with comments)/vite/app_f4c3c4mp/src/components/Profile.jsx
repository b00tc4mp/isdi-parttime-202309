import { Button } from '../library'

// Define el componente funcional Profile
export default function Profile() {
    console.log('Profile')

    // Renderiza la estructura del componente
    return (
        <div className="container">
            
            {/* Sección para actualizar la dirección de correo electrónico */}
            <h2>Update e-mail</h2>

            {/* Formulario para actualizar la dirección de correo electrónico */}
            <form className="form">
                {/* Campo de entrada para la nueva dirección de correo electrónico */}
                <label htmlFor="new-email-input">New e-mail</label>
                <input className="input" id="new-email-input" type="email" />

                {/* Campo de entrada para confirmar la nueva dirección de correo electrónico */}
                <label htmlFor="new-email-confirm-input">Confirm new e-mail</label>
                <input className="input" id="new-email-confirm-input" type="email" />

                {/* Campo de entrada para la contraseña actual */}
                <label htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" />

                {/* Botón para enviar el formulario de actualización de correo electrónico */}
                <Button type="submit">Update e-mail</Button>
            </form>

            {/* Sección para actualizar la contraseña */}
            <h2>Update password</h2>

            {/* Formulario para actualizar la contraseña */}
            <form className="form">
                {/* Campo de entrada para la contraseña actual */}
                <label htmlFor="password-input">Current password</label>
                <input className="input" type="password" id="password-input" />

                {/* Campo de entrada para la nueva contraseña */}
                <label htmlFor="new-password-input">New password</label>
                <input className="input" id="new-password-input" type="password" />

                {/* Campo de entrada para confirmar la nueva contraseña */}
                <label htmlFor="new-password-confirm-input">Confirm new password</label>
                <input className="input" id="new-password-confirm-input" type="password" />

                {/* Botón para enviar el formulario de actualización de contraseña */}
                <Button type="submit">Update password</Button>
            </form>
        </div>
    )
}
