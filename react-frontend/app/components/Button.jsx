const Button = ({ label, onClick, disabled, icon: Icon, bg }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative
        disabled:opacity-70
        rounded-lg 
        hover:opacity-80
        transition 
        ${bg}
        text-zinc-100
        md:w-48
        w-full
        h-14
    `}
    >
      {label}
      <Icon size={18} className="absolute left-4 top-5" />
    </button>
  );
};

export default Button;
