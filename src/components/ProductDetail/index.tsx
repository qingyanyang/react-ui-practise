import { SectionContainer } from '../SectionContainer';
import { MyChip } from '../Chip';
import { MyColor } from '../../util/constants';
import { TextButton } from '../TextButton';
import { Rating } from '../Rating';
import { MyGroupColorSelect } from '../GroupColorSelect';
import MyThumbnail from './MyThumbnail';
import GroupSelectBoxes from '../GroupSelectBoxes';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import { Counter } from '../Counter';
import Accordion from '../Accordion';
import { RequirementsLink } from '../RequirementsLink';
import { useState } from 'react';

const thumbnailUrls = [
  {
    id: 0,
    img_urls: [
      '../../assets/imgs/ProductDetails/voyager-hoodie-1.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-2.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-3.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-4.jpg',
    ],
  },
  {
    id: 1,
    img_urls: [
      '../../assets/imgs/ProductDetails/voyager-hoodie-brown-1.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-brown-2.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-brown-3.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-brown-4.jpg',
    ],
  },
  {
    id: 2,
    img_urls: [
      '../../assets/imgs/ProductDetails/voyager-hoodie-red-1.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-red-2.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-red-3.jpg',
      '../../assets/imgs/ProductDetails/voyager-hoodie-red-4.jpg',
    ],
  },
];
const colors = [
  { id: 0, color: 'bg-success-icon', disabled: false },
  { id: 1, color: 'bg-warning-icon', disabled: false },
  { id: 2, color: 'bg-error', disabled: true },
];
const sizes = [
  { id: 0, value: 'XS', disabled: false },
  { id: 1, value: 'S', disabled: true },
  { id: 2, value: 'M', disabled: false },
  { id: 3, value: 'L', disabled: false },
  { id: 4, value: 'XL', disabled: false },
];

const accordionData = [
  {
    title: 'Features',
    content: [
      'Designed for comfort and durability.',
      'Soft, breathable fabric ideal for travel and adventure.',
      'Large front pocket and adjustable hood.',
      'Minimalist design pairs well with any style.',
      'Made with eco-conscious materials.',
    ],
  },
  {
    title: 'Fabric & Care',
    content: [
      'Designed for comfort and durability.',
      'Soft, breathable fabric ideal for travel and adventure.',
      'Large front pocket and adjustable hood.',
      'Minimalist design pairs well with any style.',
      'Made with eco-conscious materials.',
    ],
  },
  {
    title: 'Shipping',
    content: [
      'Free standard shipping on all orders - no minimum spend required.',
      'Expedited shipping available at an additional cost.',
      'Packaged in biodegradable materials to reduce environmental impact.',
    ],
  },
];
function ProductDetails() {
  const [colorIndex, setColorIndex] = useState<number | string>(0);
  const [sizeIndex, setSizeIndex] = useState<number | string>(0);
  const getCounterValue = (counter: number): void => {
    console.log(counter);
  };

  const getSelectedSize = (index: number | string): void => {
    setSizeIndex(index);
    console.log(sizeIndex);
  };

  const getSelectedColor = (index: number | string): void => {
    setColorIndex(index);
    console.log(index);
  };

  return (
    <SectionContainer>
      <div className='py-12 px-4 tablet:py-16 desktop:px-24 desktop:py-24 w-full grid gap-8 desktop:grid-cols-2 items-start bg-primary'>
        <MyThumbnail
          thumbnailUrls={
            thumbnailUrls.filter(
              (thumbnailUrl) => thumbnailUrl.id === colorIndex,
            )[0].img_urls
          }
        />
        <div className='w-full flex flex-col gap-10'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <p className='mb-5 font-semibold text-3xl tablet:text-5xl'>
                Voyager Hoodie
              </p>
              <span className='mb-2 flex gap-2 items-baseline'>
                <span className='font-medium text-3xl text-secondary'>$76</span>
                <span className='font-medium text-lg line-through text-disabled'>
                  $95
                </span>
              </span>
              <MyChip text={'20% OFF'} color={MyColor.Warning} />
              <div className='mt-1 flex gap-2 items-center'>
                <Rating value={3.5} />
                <TextButton text={'See all 62 reviews'} />
              </div>
            </div>
            <div>
              <p className='font-normal text-base text-secondary'>
                The Voyager Hoodie is for the explorer at heart. Its durable
                fabric and roomy pockets are perfect for those who are always
                searching for the next adventure.
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>
                Available Colors
              </p>
              <div className='flex gap-6'>
                <MyGroupColorSelect
                  values={colors}
                  callBack={getSelectedColor}
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>
                Available Sizes
              </p>
              <div className='flex gap-4 flex-wrap items-center'>
                <GroupSelectBoxes values={sizes} callBack={getSelectedSize} />
              </div>
            </div>
            <div className='relative flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>Quantity</p>
              <Counter value={8} callBack={getCounterValue} />
            </div>
            <PrimaryButton text={'Add to Cart'} />
            <SecondaryButton text={'Cancel'} />
          </div>
          <Accordion data={accordionData} />
        </div>
      </div>
      <RequirementsLink
        link={
          'https://github.com/users/qingyanyang/projects/3/views/1?pane=issue&itemId=67543327'
        }
      />
    </SectionContainer>
  );
}

export default ProductDetails;
