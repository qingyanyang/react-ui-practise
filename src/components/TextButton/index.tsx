interface TextButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const TextButton: React.FC<TextButtonProps> = ({
  text,
  icon,
  onClick,
  disabled,
}) => {
  return (
    <div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`text-base font-medium text-brand rounded-[8px] ${!disabled && 'hover:text-brand-hover'} border-4 border-transparent focus:border-brand-light focus:text-brand-hover ${disabled && 'text-disabled'} flex items-center gap-2`}
      >
        <span className='short-text-ellipsis px-[2px]'>{text}</span>
        <span className={`text-brand ${disabled && 'text-disabled'}`}>
          {icon}
        </span>
      </button>
    </div>
  );
};
