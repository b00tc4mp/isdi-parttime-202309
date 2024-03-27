const SettingItem = ({ label, children }) => {
    return (
        <div className="flex justify-between items-center py-4 border-b border-purple-700">
            <span className="text-gray-300">{label}</span>
            {children}
        </div>
    );
};

export default SettingItem