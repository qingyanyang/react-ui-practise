import React from 'react';
import MyAvator from '../MyAvator/MyAvator';

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  username: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  username,
  content,
}) => {
  return (
    <div
      className={`w-[340px] flex flex-col justify-center gap-4 p-6 rounded-lg bg-primary border-primary border shadow`}
    >
      <div className='flex gap-4 items-center self-stretch'>
        <MyAvator src={avatarSrc} alt={'profile-thumbnail'} />
        <div className='flex flex-col'>
          <p className='text-primary text-lg font-semibold ls short-text-ellipsis'>
            {name}
          </p>
          <p className='text-secondary text-sm font-normal short-text-ellipsis'>
            {`@${username}`}
          </p>
        </div>
      </div>
      <div>
        <p className='text-secondary text-base font-normal text-lines-ellipsis'>
          {content}
        </p>
      </div>
    </div>
  );
};

const testimonialsData = [
  {
    id: '1',
    avatarSrc: '/assets/TestimonialCard/profile-thumbnail.png',
    name: 'Sarah Dole',
    username: 'sarahdole',
    content:
      "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
  },
  {
    id: '2',
    avatarSrc: '/assets/TestimonialCard/profile-thumbnail.png',
    name: 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso',
    username: 'pablodiegojoséfrancisco',
    content:
      "This platform offers an amazing collection of images. It's a game-changer for my design work. Highly recommend! It's a game-changer for my design work. Highly recommend! It's a game-changer for my design work.",
  },
  {
    id: '3',
    avatarSrc: '/assets/TestimonialCard/profile-thumbnail.png',
    name: 'Jane Smith',
    username: 'janesmith',
    content:
      'I love the diverse range of abstract images available. It has really helped me to elevate my design projects.',
  },
];

function TestimonialCards() {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-gray-50 to-[#d2d6db]'>
      <div className='h-28'></div>
      <div className='grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-start justify-center'>
        {testimonialsData.map((testimonialData) => (
          <TestimonialCard
            key={testimonialData.id}
            avatarSrc={testimonialData.avatarSrc}
            name={testimonialData.name}
            username={testimonialData.username}
            content={testimonialData.content}
          />
        ))}
      </div>
      <div className='m-10 text-center'>
        <span>
          <p>
            <strong>Requirements: </strong>
            <a
              className='underline text-brand'
              href='https://github.com/users/qingyanyang/projects/3?pane=issue&itemId=67543195'
            >
              https://github.com/users/qingyanyang/projects/3?pane=issue&itemId=67543195
            </a>
          </p>
        </span>
      </div>
    </section>
  );
}

export default TestimonialCards;
