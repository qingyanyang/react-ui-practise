import { Remove, Add } from '@mui/icons-material';
import { useState } from 'react';
import Tooltip from '../ToolTip';

interface CounterProps {
  value: number;
  callBack: (counter: number) => void;
}

export const Counter: React.FC<CounterProps> = ({ value, callBack }) => {
  const [counter, setCounter] = useState(1);
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
    if (counter > 1) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      callBack(newCounter);
    }
  };

  return (
    <div className='bg-tertiary self-start flex min-w-[125px] border-primary rounded-[4px] p-0.5 gap-3 justify-between items-center'>
      <div className='px-1.5'>
        <button
          onClick={handleDecrement}
          className={`flex justify-center  ${counter === 1 ? 'text-disabled cursor-default' : 'text-secondary'}`}
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
            className={`flex justify-center  relative ${counter === value ? 'text-disabled cursor-default' : 'text-secondary'}`}
          >
            <Add fontSize='small' />
          </button>
        </div>
      </Tooltip>
    </div>
  );
};

export default Counter;
