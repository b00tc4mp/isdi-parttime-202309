const SettingItem = ({ label, children }) => {
    return (
        <div className="flex justify-between items-center py-3 ">
            <span className="text-gray-300">{label}</span>
            {children}
        </div>
    );
};

export default SettingItem