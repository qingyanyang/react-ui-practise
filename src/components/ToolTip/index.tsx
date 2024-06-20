import React from 'react';

interface TooltipProps {
  setVisible: (visible: boolean) => void;
  visible: boolean;
  text: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  setVisible,
  visible,
  text,
  children,
}) => {
  const hideTooltip = () => setVisible(false);

  return (
    <div onMouseMove={hideTooltip} className='relative inline-block'>
      {visible && (
        <>
          <div className='ease-out duration-500 text-center whitespace-nowrap mb-3 bottom-full left-1/2 bg-primary-inverted font-medium text-xs absolute text-primary-invert transform -translate-x-1/2 bg-primary-in-inverted px-3 py-2 rounded-lg z-10 shadow-toolTip'>
            {text}
          </div>
          <div className='ease-out duration-500 mb-2 bottom-full absolute left-1/2 transform -translate-x-1/2 rounded-[1px] bg-primary-inverted w-4 h-4 rotate-45 shadow-toolTip'></div>
        </>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
