import React from 'react';
import SectionContainer from '../SectionContainer';
import RequirementsLink from '../RequirementsLink';
import BlogCard from './BlogCard';
import GridContainer from '../GridContainer';

/**
 * @implements: need future api to connect data
 */
const blogCardData = {
  data: [
    {
      id: 1,
      imgSrc: '/assets/imgs/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior'],
      title: 'Top 5 Living Room Inspirations',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time.',
      readMoreDisabled: false,
    },
    {
      id: 2,
      imgSrc: '/assets/imgs/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior Interior Interior Interior'],
      title:
        'Curated vibrant colors for your living, make it pop & calm at the same time.',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time. Make it pop & calm at the same time.',
      readMoreDisabled: false,
    },
    {
      id: 3,
      imgSrc: '/assets/imgs/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior', 'Ideas', 'Design'],
      title: 'Top 5 Living Room Inspirations',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time.',
      readMoreDisabled: true,
    },
  ],
  requireLink:
    'https://www.figma.com/design/1LEv14PQb9bndJDto2Vpa2/blog-card-figma?m=dev&node-id=2001-89',
};

function BlogCards() {
  return (
    <SectionContainer>
      <GridContainer>
        {blogCardData.data.map((blogCard) => (
          <BlogCard
            key={blogCard.id}
            imgSrc={blogCard.imgSrc}
            labels={blogCard.labels.slice(0, 2)}
            title={blogCard.title}
            desc={blogCard.desc}
            disabled={blogCard.readMoreDisabled}
          />
        ))}
      </GridContainer>
      <RequirementsLink link={blogCardData.requireLink} />
    </SectionContainer>
  );
}

export default BlogCards;
