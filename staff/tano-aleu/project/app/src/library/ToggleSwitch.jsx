const ToggleSwitch = ({ id, enabled, setEnabled }) => {
    return (
        <div className=" 'bg-purple-800 relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
                type="checkbox"
                name={`toggle-${id}`}
                id={`toggle-${id}`}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={enabled}
                onChange={() => setEnabled(!enabled)}
            />
            <label
                htmlFor={`toggle-${id}`}
                className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${enabled ? 'bg-purple-800' : 'bg-gray-300'
                    }`}
            ></label>
        </div>
    );
};

export default ToggleSwitch;