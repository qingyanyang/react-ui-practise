import { Remove, Add } from '@mui/icons-material';
import { useState } from 'react';
import Tooltip from '../ToolTip';

interface CounterProps {
  initialValue?: number;
  value: number;
  callBack: (counter: number) => void;
}

export const Counter: React.FC<CounterProps> = ({
  initialValue = 1,
  value,
  callBack,
}) => {
  const [counter, setCounter] = useState(initialValue);
  const [visible, setVisible] = useState(false);

  const handleIncrement = () => {
    if (counter < value) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      callBack(newCounter);
    } else {
      setVisible(true);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      callBack(newCounter);
    }
  };

  return (
    <div className='flex items-center'>
      <div className='bg-tertiary self-start flex min-w-[125px] border-primary rounded-[4px] p-0.5 gap-3 justify-between items-center'>
        <div className='px-1.5'>
          <button
            onClick={handleDecrement}
            className={`flex justify-center  ${counter === 0 ? 'text-disabled cursor-default' : 'text-secondary'}`}
          >
            <Remove fontSize='small' />
          </button>
        </div>
        <div className='py-1.5 px-3'>
          <div className='font-medium text-sm text-secondary'>{counter}</div>
        </div>
        <Tooltip
          setVisible={setVisible}
          visible={visible}
          text={'Insufficient stock'}
        >
          <div className='px-1.5'>
            <button
              onClick={handleIncrement}
              className={`flex justify-center relative ${counter === value || value === initialValue ? 'text-disabled cursor-default' : 'text-secondary'}`}
            >
              <Add fontSize='small' />
            </button>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Counter;
