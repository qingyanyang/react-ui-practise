import React from 'react';

interface ButtonProps {
  text: string;
  fontSize?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const SecondartButton: React.FC<ButtonProps> = ({
  text,
  fontSize = 'text-lg',
  disabled = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        block
        w-full
        ${fontSize}
        border-primary 
        p-[0.75em] rounded-[4px] font-medium shadow 
        ${disabled ? 'shadow-none bg-disabled border-none text-disabled' : 'hover:bg-primary-hover text-primary bg-primary '}
        ring-4 ring-transparent ${!disabled && 'active:bg-primary-hover active:ring-indigo-50'} 
      `}
    >
      {text}
    </button>
  );
};

export default SecondartButton;
