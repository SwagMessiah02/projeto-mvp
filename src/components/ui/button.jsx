// components/ui/button.jsx
export function Button({ children, variant = 'default', className = '', ...props }) {
  const base = 'px-4 py-2 rounded-lg font-semibold transition-all';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    secondary: 'bg-white text-blue-700 hover:bg-gray-100',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
