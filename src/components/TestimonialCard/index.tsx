import React from 'react';
import { TestimonialCard } from './TestimonialCard';
import SectionContainer from '../SectionContainer';
import RequirementsLink from '../RequirementsLink';
import GridContainer from '../GridContainer';

/**
 * @implements: need future api to connect data
 */
const testimonialsData = {
  data: [
    {
      id: 1,
      avatarSrc: '/assets/imgs/TestimonialCard/profile-thumbnail.png',
      name: 'Sarah Dole',
      username: 'sarahdole',
      content:
        "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
    },
    {
      id: 2,
      avatarSrc: '/assets/imgs/TestimonialCard/profile-thumbnail.png',
      name: 'Jane Smith',
      username: 'janesmith',
      content:
        'I love the diverse range of abstract images available. It has really helped me to elevate my design projects.',
    },
    {
      id: 3,
      avatarSrc: '/assets/imgs/TestimonialCard/profile-thumbnail.png',
      name: 'Pablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso',
      username: 'pablodiegojoséfrancisco',
      content:
        "This platform offers an amazing collection of images. It's a game-changer for my design work. Highly recommend! It's a game-changer for my design work. Highly recommend! It's a game-changer for my design work.",
    },
  ],
  require_link:
    'https://github.com/users/qingyanyang/projects/3?pane=issue&itemId=67543195',
};

function TestimonialCards() {
  return (
    <SectionContainer>
      <GridContainer>
        {testimonialsData.data.map((testimonialData) => (
          <TestimonialCard
            key={testimonialData.id}
            avatarSrc={testimonialData.avatarSrc}
            name={testimonialData.name}
            username={testimonialData.username}
            content={testimonialData.content}
          />
        ))}
      </GridContainer>
      <RequirementsLink link={testimonialsData.require_link} />
    </SectionContainer>
  );
}

export default TestimonialCards;
