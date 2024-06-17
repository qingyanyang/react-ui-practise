import React from 'react';

interface AvatorProps {
  src: string;
  alt: string;
}

/**
 *
 * @param props: name-> nav text content; path-> router mapping
 */
const MyAvator: React.FC<AvatorProps> = ({ src, alt }) => {
  return (
    <div className={`rounded-full w-12 h-12`}>
      <img src={src} alt={alt} className='object-cover w-full h-full' />
    </div>
  );
};

export default MyAvator;
