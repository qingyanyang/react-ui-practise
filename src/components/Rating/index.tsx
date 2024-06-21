import React from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';

interface StarHalfFilledIconProps {
  icon: React.ElementType;
  valueColor: string;
  emptyColor: string;
}

const StarHalfFilledIcon: React.FC<StarHalfFilledIconProps> = ({
  icon: Icon,
  valueColor,
  emptyColor,
}) => {
  return (
    <span className='relative'>
      <span className='w-1/2 h-full absolute overflow-hidden'>
        <Icon className={`${valueColor} w-5 h-5`} />
      </span>
      <Icon className={`${emptyColor} w-5 h-5`} />
    </span>
  );
};

interface RatingProps {
  value: number;
  text?: string;
  icon?: React.ElementType;
  valueColor?: string;
  emptyColor?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value,
  text,
  icon: Icon = StarFilledIcon,
  valueColor = 'text-warning-icon',
  emptyColor = 'text-disabled-icon',
}) => {
  if (value > 5) {
    value = 5;
  }
  return (
    <div className='flex gap-3 items-center'>
      <p className='font-normal text-xl'>{value.toFixed(1)}</p>
      <span className='flex gap-1'>
        {[...Array(Math.floor(value))].map((_, index) => (
          <i key={index}>
            <Icon className={`${valueColor} w-5 h-5`} />
          </i>
        ))}
        {value - Math.floor(value) !== 0 && (
          <i>
            <StarHalfFilledIcon
              icon={Icon}
              valueColor={valueColor}
              emptyColor={emptyColor}
            />
          </i>
        )}
        {[...Array(5 - Math.ceil(value))].map((_, index) => (
          <i key={index}>
            <Icon className={`${emptyColor} w-5 h-5`} />
          </i>
        ))}
      </span>

      {text && <div className='ml-2 text-tertiary text-sm'>{text}</div>}
    </div>
  );
};

export default Rating;
