import React from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';

interface StarHalfFilledIconProps {
  color: string;
}

const StarHalfFilledIcon: React.FC<StarHalfFilledIconProps> = ({ color }) => {
  return (
    <span className='relative'>
      <span className='w-1/2 h-full absolute overflow-hidden'>
        <StarFilledIcon className={`${color} w-5 h-5`} />
      </span>
      <StarFilledIcon className='text-disabled-icon w-5 h-5' />
    </span>
  );
};

interface RatingProps {
  value: number;
  text?: string;
  color: string;
  fontSize?: string;
}
export const Rating: React.FC<RatingProps> = ({ value, text, color }) => {
  return (
    <div className='flex gap-1 items-center'>
      <p className='font-normal text-xl'>{value}</p>
      <ul className='flex gap-1'>
        {[...Array(Math.floor(value))].map((_, index) => (
          <i key={index}>
            <StarFilledIcon className={`${color} w-5 h-5`} />
          </i>
        ))}
        {value - Math.floor(value) && (
          <i>
            <StarHalfFilledIcon color={color} />
          </i>
        )}
        {[...Array(5 - Math.ceil(value))].map((_, index) => (
          <i key={index}>
            <StarFilledIcon className='text-disabled-icon w-5 h-5' />
          </i>
        ))}
      </ul>
      <div>{text && text}</div>
    </div>
  );
};
