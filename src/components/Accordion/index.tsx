import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { useState } from 'react';

interface Model {
  title: string;
  content: string[];
}

interface AccordionProps {
  data: Model[];
}

export const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const len = data.length;
  const [expand, setExpand] = useState(new Array(len).fill(true));

  const handleExpand = (index: number) => {
    setExpand((preExpand) => {
      const newExpand = [...preExpand];
      newExpand[index] = !newExpand[index];
      return newExpand;
    });
  };
  return (
    <div className='flex flex-col gap-8'>
      {data.map((ele, index) => (
        <>
          <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
              <p className='font-medium text-lg text-primary'>{ele.title}</p>
              <button onClick={() => handleExpand(index)}>
                {expand[index] && (
                  <RemoveCircleOutline className='text-disabled' />
                )}
                {!expand[index] && (
                  <AddCircleOutline className='text-disabled' />
                )}
              </button>
            </div>
            <div>
              {expand[index] && (
                <ul className='list-disc list-inside ml-2 font-normal text-base text-secondary'>
                  {ele.content.map((li) => (
                    <li>{li}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          {index != data.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
};

export default Accordion;
