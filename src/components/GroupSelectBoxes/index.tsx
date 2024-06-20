import React, { useState } from 'react';

interface States {
  id: number | string;
  value: string;
  disabled: boolean;
}
interface GroupSelectBoxesProps {
  values: States[];
}

const GroupSelectBoxes: React.FC<GroupSelectBoxesProps> = ({ values }) => {
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
          className='flex relative w-[64px] h-[48px] justify-center items-center'
        >
          <input
            type='radio'
            name='size'
            disabled={value.disabled}
            checked={selectedIndex === value.id}
            onChange={() => {}}
            onClick={() => handleSelect(value.id)}
            className='disabled:border-transparent disabled:bg-disabled text-primary appearance-none hover:bg-primary-hover focus:bg-primary-hover flex justify-center w-full h-full py-3 rounded-[4px] border-primary checked:border-brand-emphasize'
          />
          <p
            className={`${value.disabled && 'text-disabled'} absolute pointer-events-none font-medium text-base`}
          >
            {value.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GroupSelectBoxes;
