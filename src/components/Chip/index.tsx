import React from 'react';

interface ChipProps {
  text: string;
}

/**
 *
 * @param props: src-> img link; alt-> placement when img failed to load
 */
export const MyChip: React.FC<ChipProps> = ({ text }) => {
  return (
    <div className='rounded-full py-[2px] px-[8px] border bg-success-subtle border-success'>
      <p className='text-success text-sm font-normal short-label-ellipsis'>
        {text}
      </p>
    </div>
  );
};
