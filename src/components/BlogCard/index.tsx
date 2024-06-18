import React from 'react';
import { SectionContainer } from '../SectionContainer';
import { RequirementsLink } from '../RequirementsLink';
import { BlogCard } from './BlogCard';
import { TextButton } from '../TextButton';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { ArrowBack } from '@mui/icons-material';
import { MyChip } from '../Chip';
import Divider from '@mui/material/Divider';
import { MyChipSize, MyColor } from '../../util/constants';

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
      readMoreDisabled: false,
    },
    {
      id: 2,
      imgSrc: '/assets/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior Interior Interior Interior'],
      title:
        'Curated vibrant colors for your living, make it pop & calm at the same time.',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time. Make it pop & calm at the same time.',
      readMoreDisabled: false,
    },
    {
      id: 3,
      imgSrc: '/assets/BlogCard/spacejoy-unsplash.jpg',
      labels: ['Interior', 'Ideas', 'Design'],
      title: 'Top 5 Living Room Inspirations',
      desc: 'Curated vibrant colors for your living, make it pop & calm at the same time.',
      readMoreDisabled: true,
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
            disabled={blogCard.readMoreDisabled}
          />
        ))}
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <div className='mb-2 flex flex-col gap-2'>
            <TextButton text={'Read more'} />
            <TextButton
              disabled={false}
              text='Hover me'
              icon={<ArrowBack fontSize='small' />}
            />
            <TextButton
              disabled={false}
              text='Click me'
              icon={<ArrowBack fontSize='small' />}
            />
            <TextButton
              disabled={false}
              text='Read more and more'
              icon={<ArrowForwardOutlinedIcon fontSize='small' />}
            />
            <TextButton
              disabled={true}
              text='Disabled'
              icon={<ArrowForwardOutlinedIcon fontSize='small' />}
            />
          </div>
          <Divider />
          <div className='flex gap-2 mt-4'>
            <MyChip
              text={'chip'}
              color={MyColor.Success}
              size={MyChipSize.Small}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Warning}
              size={MyChipSize.Small}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Error}
              size={MyChipSize.Small}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Neutral}
              size={MyChipSize.Small}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Brand}
              size={MyChipSize.Small}
            />
          </div>
          <div className='flex gap-2 mt-4'>
            <MyChip text={'chip'} color={MyColor.Success} />
            <MyChip text={'chip'} color={MyColor.Warning} />
            <MyChip text={'chip'} color={MyColor.Error} />
            <MyChip text={'chip'} color={MyColor.Neutral} />
            <MyChip text={'chip'} color={MyColor.Brand} />
          </div>
          <div className='flex gap-2 mt-4'>
            <MyChip
              text={'chip'}
              color={MyColor.Success}
              size={MyChipSize.Large}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Warning}
              size={MyChipSize.Large}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Error}
              size={MyChipSize.Large}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Neutral}
              size={MyChipSize.Large}
            />
            <MyChip
              text={'chip'}
              color={MyColor.Brand}
              size={MyChipSize.Large}
            />
          </div>
        </div>
      </div>
      <div className='m-10 text-center'>
        <RequirementsLink link={blogCardData.require_link} />
      </div>
    </SectionContainer>
  );
}

export default BlogCards;
