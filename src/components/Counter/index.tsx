import { Remove, Add } from '@mui/icons-material';
import { useState } from 'react';
interface CounterProps {
  value: number;
  callBack: (counter: number) => void;
}
export const Counter: React.FC<CounterProps> = ({ value, callBack }) => {
  const [counter, setCounter] = useState(1);

  const handleIncreament = () => {
    if (counter < value) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      callBack(newCounter);
    }
  };

  const handleDecreament = () => {
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
          onClick={handleDecreament}
          disabled={counter === 1}
          className='disabled:text-disabled flex justify-center text-secondary'
        >
          <Remove fontSize='small' />
        </button>
      </div>
      <div className='py-1.5 px-3'>
        <div className='font-medium text-sm text-secondary'>{counter}</div>
      </div>
      <div className='px-1.5'>
        <button
          onClick={handleIncreament}
          disabled={counter === value}
          className='disabled:text-disabled flex justify-center text-secondary'
        >
          <Add fontSize='small' />
        </button>
      </div>
    </div>
  );
};
