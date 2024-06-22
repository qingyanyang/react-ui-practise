import React, { useState } from 'react';

interface States {
  id: number | string;
  value: string;
  disabled: boolean;
}
interface GroupSelectBoxesProps {
  values: States[];
  callBack: (index: number | string) => void;
}

const GroupSelectBoxes: React.FC<GroupSelectBoxesProps> = ({
  values,
  callBack,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | string>(0);

  const handleSelect = (index: number | string) => {
    const newIndex = index;
    setSelectedIndex(newIndex);
    callBack(newIndex);
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
            checked={selectedIndex === value.id}
            onChange={() => {}}
            onClick={() => handleSelect(value.id)}
            className={`${value.disabled && 'border-transparent bg-disabled'} text-primary appearance-none hover:bg-primary-hover focus:bg-primary-hover flex justify-center w-full h-full py-3 rounded-[4px] border-primary checked:border-brand-emphasize`}
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
