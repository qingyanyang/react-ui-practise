import React, { useState } from 'react';

interface ThumbnailProps {
  thumbnailUrls: string[];
}

const MyThumbnail: React.FC<ThumbnailProps> = ({ thumbnailUrls }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOnclick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className='w-full flex flex-col gap-6'>
      <div className='w-full aspect-592/800 rounded-lg overflow-hidden'>
        <img
          className='w-full h-full object-cover'
          src={thumbnailUrls[selectedIndex]}
          alt='Main thumbnail'
        />
      </div>
      <div className='relative w-full desktop:aspect-592/190 tablet:aspect-704/190 mobile:aspect-311/120 overflow-auto touch-pan-y mb-12'>
        <div className='flex gap-4 h-full absolute'>
          {thumbnailUrls.map((url, index) => (
            <button
              key={index}
              onClick={() => handleOnclick(index)}
              className={`${selectedIndex === index && 'border-[3px] border-brand-emphasize'} h-full desktop:aspect-160/190 tablet:aspect-188/190 mobile:aspect-80/120 rounded-lg overflow-hidden`}
            >
              <img
                className='h-full w-full object-cover'
                src={url}
                alt={`Thumbnail ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyThumbnail;
