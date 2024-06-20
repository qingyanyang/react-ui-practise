import React, { useState } from 'react';

interface States {
  id: number | string;
  color: string;
  disabled: boolean;
}

interface MyGroupColorSelectProps {
  values: States[];
}

export const MyGroupColorSelect: React.FC<MyGroupColorSelectProps> = ({
  values,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | string | null>(
    null,
  );

  const handleSelect = (index: number | string) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }

    console.log(index);
  };

  return (
    <div className='flex gap-4 flex-wrap items-center'>
      {values.map((value) => (
        <div
          key={value.id}
          className='flex relative w-[48px] h-[48px] justify-center items-center'
        >
          <input
            type='radio'
            name='color'
            disabled={value.disabled}
            checked={selectedIndex === value.id}
            onChange={() => {}}
            onClick={() => handleSelect(value.id)}
            className={`
              peer appearance-none ${selectedIndex === value.id ? 'w-[36px] h-[36px]' : 'w-[38px] h-[38px]'} ${value.color} rounded-full overflow-hidden flex justify-center items-center
              ${!value.disabled && 'hover:border-brand hover:border-2'}
              focus:ring-8 focus:border-none focus:ring-indigo-50 focus:ring-offset-0
              ${value.disabled && selectedIndex === value.id && 'ring-1 ring-indigo-700 ring-offset-2 w-[36px] h-[36px]'}
              checked:ring-1 checked:ring-indigo-700 checked:ring-offset-2 checked:w-[36px] checked:h-[36px]
            `}
          />
          {value.disabled && (
            <div className='absolute left-[23px] bg-primary-filled w-[2px] h-[48px] rotate-45'></div>
          )}
          <svg
            className={`
            absolute pointer-events-none top-[10px] left-[10px] hidden 
            ${!value.disabled && selectedIndex === value.id && 'peer-checked:block'}`}
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
      ))}
    </div>
  );
};

export default MyGroupColorSelect;
