import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import { SectionContainer } from '../SectionContainer';
import { RequirementsLink } from '../RequirementsLink';

const testimonialsData = {
  data: [
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
  ],
  require_link:
    'https://github.com/users/qingyanyang/projects/3?pane=issue&itemId=67543195',
};

function TestimonialCards() {
  return (
    <SectionContainer>
      <div className='grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-start justify-center'>
        {testimonialsData.data.map((testimonialData) => (
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
        <RequirementsLink link={testimonialsData.require_link} />
      </div>
    </SectionContainer>
  );
}

export default TestimonialCards;
