export const Input = ({ label, icon: Icon, className = '', ...props }) => (
    <div className={className}>
        {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
        <div className="relative">
            {Icon && <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />}
            <input
                className={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${Icon ? 'pl-10' : ''}`}
                {...props}
            />
        </div>
    </div>
);