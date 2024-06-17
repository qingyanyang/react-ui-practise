import React from 'react';
import MyAvator from '../MyAvator/MyAvator';

function TestimonialCard() {
  return (
    <section className='h-[768px] flex flex-col bg-gradient-to-b from-gray-50 to-[#d2d6db] items-center justify-center'>
      <div className='h-[233px] w-[340px] flex flex-col justify-center gap-4 p-6 rounded-lg bg-primary border-primary border shadow'>
        <div className='flex gap-4 items-center self-stretch'>
          <MyAvator
            src={'/assets/TestimonialCard/profile-thumbnail.png'}
            alt={'profile-thumbnail'}
          />
          <div className='flex flex-col'>
            <p className='text-primary text-lg font-semibold ls short-text-ellipsis'>
              Sarah Dole
            </p>
            <p className='text-secondary text-sm font-normal short-text-ellipsis'>
              @sarahdole
            </p>
          </div>
        </div>
        <div>
          <p className='text-secondary text-base font-normal'>
            I've been searching for high-quality abstract images for my design
            projects, and I'm thrilled to have found this platform. The variety
            and depth of creativity are astounding!
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestimonialCard;
