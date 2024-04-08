import React, { useState } from 'react';
import logo from '../assets/synqple.logo.png';
import { useNavigate } from 'react-router-dom';
import { ToggleSwitch, SettingItem } from '../library';
import buttonChevronRight from '../assets/settings_buttons/ChevronRight.png';


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
        <div className="bg-[#5F5784] border rounded-3xl p-10 border-black text-white  flex flex-col space-y-1 overflow-auto min-h-screen mx-auto max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">

            <h2 className="text-white text-lg text-center mb-6">Settings</h2>

            <h2 className="mt-6 font-bold text-md mb-6">Preferences</h2>

            <SettingItem label="Profile" > <div className="space-y-1" onClick={navigateToProfile}>
                <button className="text-gray-300 mr-3">
                    <img src={buttonChevronRight} alt="right" className="w-5 h-auto mt-2  justify-center" />
                </button>

            </div>
            </SettingItem>

            <SettingItem label="Language" ><div className="space-y-1">
                <span className="text-gray-300 mr-3">English</span>
                {/* Aquí se podría agregar un componente de selector de idioma */}
            </div>
            </SettingItem>


            <SettingItem label="Option1">
                <ToggleSwitch id="option1" enabled={option1} setEnabled={setOption1} />
            </SettingItem>

            <SettingItem className='mt-6' label="Option2">
                <ToggleSwitch id="option2" enabled={option2} setEnabled={setOption2} />
            </SettingItem>

            <div>
                <h2 className="mt-6 font-bold text-md mb-2">Sound & Samples</h2>

                <SettingItem label="Option3">
                    <ToggleSwitch id="option3" enabled={option3} setEnabled={setOption3} />
                </SettingItem>
                <SettingItem label="Option4">
                    <ToggleSwitch id="option4" enabled={option4} setEnabled={setOption4} />
                </SettingItem>
            </div>


            <div className='mt-6' >

                <h2 className="mt-6 font-bold text-md mb-22">Support</h2>


                <SettingItem label="Help Center">
                    <SettingItem>

                        <span className="text-gray-300 mr-3"> <img src={buttonChevronRight} alt="right" className="w-5 h-auto   justify-center" />
                        </span>

                    </SettingItem>

                </SettingItem>

                <SettingItem label="App Feedback">
                    <SettingItem>
                        <span className="text-gray-300 mr-3"> <img src={buttonChevronRight} alt="right" className="w-5 h-auto  justify-center" />
                        </span>
                    </SettingItem>

                </SettingItem>

            </div>


            <footer className="flex justify-center">
                <img src={logo} alt="Logo" className="w-40 h-auto mt-8  justify-center" />

            </footer>
        </div>
    );
}

export default Settings;

