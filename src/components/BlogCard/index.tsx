import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { RequirementsLink } from '../RequirementsLink';
import { BlogCard } from './BlogCard';

/**
 * @implements: need future api to connect data
 */
const blogCardData = {
  data: [
    {
      id: 1,
      imgSrc: '/assets/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior'],
      title: 'Top 5 Living Room Inspirations',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time.',
    },
    {
      id: 2,
      imgSrc: '/assets/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior Interior Interior Interior'],
      title:
        'Curated vibrant colors for your living, make it pop & calm at the same time.',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time. Make it pop & calm at the same time.',
    },
    {
      id: 3,
      imgSrc: '/assets/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior', 'Ideas', 'Design'],
      title: 'Top 5 Living Room Inspirations',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time.',
    },
  ],
  require_link:
    'https://github.com/users/qingyanyang/projects/3?pane=issue&itemId=67543203',
};
function BlogCards() {
  return (
    <SectionContainer>
      <div className='grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-start justify-center'>
        {blogCardData.data.map((blogCard) => (
          <BlogCard
            key={blogCard.id}
            imgSrc={blogCard.imgSrc}
            labels={blogCard.labels.slice(0, 2)}
            title={blogCard.title}
            desc={blogCard.desc}
          />
        ))}
      </div>
      <div className='m-10 text-center'>
        <RequirementsLink link={blogCardData.require_link} />
      </div>
    </SectionContainer>
  );
}

export default BlogCards;
