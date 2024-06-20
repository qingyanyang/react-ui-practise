import React from 'react';
import { MyChipSize, MyColor, colorMap } from '../../util/constants';

interface ChipProps {
  text: string;
  color?: MyColor;
  size?: MyChipSize;
}

/**
 *
 * @param props: text-> text inside chip; color-> color type; size-> chip size
 * @example: MyChipSize {
                Small = 'small',
                Normal = 'normal',
                Large = 'large',
              }

            MyColor {
                Success = 'success',
                Brand = 'brand',
                Error = 'error',
                Warning = 'warning',
                Neutral = 'neutral',
            }
 */
export const MyChip: React.FC<ChipProps> = ({
  text,
  color = MyColor.Success,
  size = MyChipSize.Normal,
}) => {
  const selectedColor = colorMap[color];
  const textSizeClass = {
    normal: 'text-sm',
    small: 'text-xs',
    large: 'text-lg',
  };
  return (
    <div
      style={{
        borderColor: selectedColor.borderColor,
        backgroundColor: selectedColor.bgColor,
      }}
      className='self-start rounded-full py-0.125em px-0.5em border-primary'
    >
      <p
        style={{ color: selectedColor.textColor }}
        className={`${textSizeClass[size]} font-normal short-label-ellipsis`}
      >
        {text}
      </p>
    </div>
  );
};
