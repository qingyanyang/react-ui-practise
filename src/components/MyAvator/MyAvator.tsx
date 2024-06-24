import React from 'react';

interface AvatorProps {
  src: string;
  alt: string;
}

/**
 *
 * @param props: src-> img link; alt-> placement when img failed to load
 */
const MyAvator: React.FC<AvatorProps> = ({ src, alt }) => {
  return (
    <div className='rounded-full w-12 h-12 overflow-hidden'>
      <img src={src} alt={alt} className='object-cover w-full h-full' />
    </div>
  );
};

export default MyAvator;
