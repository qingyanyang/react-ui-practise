import { Divider } from '@mui/material';
import { ReactNode } from 'react';

interface ComponentCardProps {
  title: string;
  children: ReactNode;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({
  title,
  children,
}) => {
  return (
    <div
      className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
    >
      <p className='mb-4 font-semibold'>{title}</p>
      <Divider sx={{ borderBottomWidth: 2 }} />
      <div className='mb-4'></div>
      {children}
    </div>
  );
};
