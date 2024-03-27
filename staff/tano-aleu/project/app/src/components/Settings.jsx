import React, { useState } from 'react';
import logo from '../assets/synqple.logo.png';
import { useNavigate } from 'react-router-dom';
import { ToggleSwitch } from '../library';

const SettingItem = ({ label, children }) => {
    return (
        <div className="flex justify-between items-center py-4 border-b border-purple-700">
            <span className="text-gray-300">{label}</span>
            {children}
        </div>
    );
};


function Settings() {
    // Estado para controlar las preferencias
    // Estado separado para cada opción
    const [option1, setOption1] = useState(false);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(true);
    const [option4, setOption4] = useState(true);

    const navigate = useNavigate();

    const navigateToProfile = () => {
        navigate('/profile'); // Usa el path que definiste para el componente Profile en tus rutas
    };

    return (
        <div className="bg-[#5F5784] text-white min-h-screen p-5 flex flex-col space-y-3 overflow-auto">
            <h2 className="text-white text-lg text-center mb-2">Settings</h2>

            <h2>Preferences</h2>

            <SettingItem label="Profile" > <div className="space-y-1" onClick={navigateToProfile}>
                <button className="text-gray-300 mr-3"> ▶ </button>

            </div>
            </SettingItem>

            <SettingItem label="Language" ><div className="space-y-1">
                <span className="text-gray-300 mr-3">English</span>
                {/* Aquí se podría agregar un componente de selector de idioma */}
            </div>
            </SettingItem>


            <SettingItem label="Option1">
                <ToggleSwitch enabled={option1} setEnabled={setOption1} />
            </SettingItem>
            <SettingItem label="Option2">
                <ToggleSwitch enabled={option2} setEnabled={setOption2} />
            </SettingItem>

            <h2>Sound & Samples</h2>

            <SettingItem label="Option3">
                <ToggleSwitch enabled={option3} setEnabled={setOption3} />
            </SettingItem>
            <SettingItem label="Option4">
                <ToggleSwitch enabled={option4} setEnabled={setOption4} />
            </SettingItem>

            <h2>Support</h2>

            <SettingItem label="Help Center">
                <SettingItem>

                    <span className="text-gray-300 mr-3"> ▶ </span>

                </SettingItem>

            </SettingItem>

            <SettingItem label="App Feedback">
                <SettingItem>
                    <span className="text-gray-300 mr-3"> ▶ </span>
                </SettingItem>

            </SettingItem>


            <footer className="flex justify-center">
                <img src={logo} alt="Logo" className="w-40 h-auto mt-2  justify-center" />

            </footer>
        </div>
    );
}

export default Settings;

