import React, { useState } from 'react';
import logo from '../assets/synqple.logo.png';

const SettingItem = ({ label, children }) => {
    return (
        <div className="flex justify-between items-center py-3 border-b border-purple-700">
            <span className="text-gray-300">{label}</span>
            {children}
        </div>
    );
};

const ToggleSwitch = ({ enabled, setEnabled }) => {
    return (
        <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
            />
            <label
                htmlFor="toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${enabled ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
            ></label>
        </div>
    );
};

function Settings() {
    // Estado para controlar las preferencias
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(true);

    return (
        <div className="bg-[#5F5784] text-white min-h-screen p-5 flex flex-col space-y-3 overflow-auto">
            <h2 className="text-white text-lg text-center mb-4">Settings</h2>

            <h2>Preferences</h2>

            <SettingItem label="Profile" > <div className="space-y-1">
                <span className="text-gray-300 mr-3"> ▶ </span>
                {/* Aquí se podría agregar un componente de selector de idioma */}
            </div>
            </SettingItem>

            <SettingItem label="Language" ><div className="space-y-1">
                <span className="text-gray-300 mr-3">English</span>
                {/* Aquí se podría agregar un componente de selector de idioma */}
            </div>
            </SettingItem>


            <SettingItem label="Option1">
                <ToggleSwitch enabled={option2} setEnabled={setOption2} />
            </SettingItem>
            <SettingItem label="Option2">
                <ToggleSwitch enabled={option3} setEnabled={setOption3} />
            </SettingItem>

            <h2>Sound & Samples</h2>


            <SettingItem label="Option1">
                <ToggleSwitch enabled={option2} setEnabled={setOption2} />
            </SettingItem>
            <SettingItem label="Option2">
                <ToggleSwitch enabled={option3} setEnabled={setOption3} />
            </SettingItem>


            <h2>Support</h2>


            <SettingItem label="Help Center">
                <SettingItem> <div className="space-y-1">

                    <span className="text-gray-300 mr-3"> ▶ </span>
                    {/* Aquí se podría agregar un componente de selector de idioma */}
                </div>
                </SettingItem>

            </SettingItem>

            <SettingItem label="App Feedback">
                <SettingItem> <div className="space-y-0">
                    <span className="text-gray-300 mr-3"> ▶ </span>
                    {/* Aquí se podría agregar un componente de selector de idioma */}
                </div>
                </SettingItem>

            </SettingItem>


            <footer className="flex justify-center">
                <img src={logo} alt="Logo" className="w-40 h-auto mt-2  justify-center" />

            </footer>
        </div>
    );
}

export default Settings;

