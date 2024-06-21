import React from 'react';

interface ButtonProps {
  text: string;
  fontSize?: string;
  disabled?: boolean;
}

const SecondartButton: React.FC<ButtonProps> = ({
  text,
  fontSize = 'text-lg',
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        block
        w-full
        ${fontSize}
        border-primary 
        p-[0.75em] rounded-[4px] font-medium shadow 
        ${disabled ? 'shadow-none bg-disabled border-none text-disabled' : 'hover:bg-primary-hover text-primary bg-primary '}
        ring-4 ring-transparent focus:bg-primary-hover focus:ring-indigo-50
      `}
    >
      {text}
    </button>
  );
};

export default SecondartButton;
