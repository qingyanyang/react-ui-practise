import React from 'react';

interface PrimaryButtonProps {
  text: string;
  color?: string;
  fontSize?: string;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  text,
  color = 'bg-brand-primary',
  fontSize = 'text-lg',
  disabled = false,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
        block
        w-full
        ${color} 
        ${fontSize}
        ${disabled ? 'bg-disabled text-disabled' : 'hover:bg-brand-primary-emphasize text-primary-invert'}
        ring-4 ring-transparent focus:bg-brand-primary-emphasize focus:ring-indigo-50 
        p-[0.75em] rounded-[4px] font-medium 
      `}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
