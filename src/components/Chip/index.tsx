import React from 'react';
import { MyColor, colorMap } from '../../util/constants';

interface ChipProps {
  text: string;
  color?: MyColor;
}

/**
 *
 * @param props: src-> img link; alt-> placement when img failed to load
 */
export const MyChip: React.FC<ChipProps> = ({
  text,
  color = MyColor.Success,
}) => {
  const selectedColor = colorMap[color];

  return (
    <div
      style={{
        borderColor: selectedColor.borderColor,
        backgroundColor: selectedColor.bgColor,
      }}
      className={`self-start rounded-full py-0.125em px-0.5em border`}
    >
      <p
        style={{ color: selectedColor.textColor }}
        className={`text-sm font-normal short-label-ellipsis`}
      >
        {text}
      </p>
    </div>
  );
};
