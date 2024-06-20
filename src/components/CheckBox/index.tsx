interface CheckBoxProps {
  onClick?: () => void;
  disabled?: boolean;
  selected?: boolean;
  color: string;
}

export const MyCheckBox: React.FC<CheckBoxProps> = ({
  onClick,
  disabled = false,
  selected = false,
  color,
}) => {
  return (
    <div className='flex relative w-[48px] h-[48px] justify-center items-center'>
      <input
        type='checkbox'
        onClick={onClick}
        disabled={disabled}
        className={`
          peer appearance-none ${selected ? 'w-[36px] h-[36px]' : 'w-[38px] h-[38px]'} ${color} rounded-full overflow-hidden flex justify-center items-center
          ${!disabled && 'hover:border-brand hover:border-2'}
          focus:ring-8 focus:border-none focus:ring-indigo-50 focus:ring-offset-0
          ${disabled && selected && 'ring-1 ring-indigo-700 ring-offset-2 w-[36px] h-[36px]'}
          checked:ring-1 checked:ring-indigo-700 checked:ring-offset-2 checked:w-[36px] checked:h-[36px]
        `}
      />
      {disabled && (
        <div
          className='
        absolute 
        left-[23px] bg-primary-filled w-[2px] h-[48px] rotate-45'
        ></div>
      )}
      <svg
        className={`
        absolute 
        pointer-events-none
        top-[10px]
        left-[10px]
        hidden 
        ${!disabled && 'peer-checked:block'}`}
        width='28'
        height='28'
        viewBox='0 0 28 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M11.6673 17.6993L22.3918 6.97485L24.0417 8.62477L11.6673 20.9991L4.24268 13.5745L5.89259 11.9246L11.6673 17.6993Z'
          fill='white'
        />
      </svg>
    </div>
  );
};
