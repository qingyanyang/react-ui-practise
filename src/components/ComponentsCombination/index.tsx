import React, { useState } from 'react';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import { ArrowBack } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import MyGroupColorSelect from '../GroupColorSelect';
import SectionContainer from '../SectionContainer';
import RequirementsLink from '../RequirementsLink';
import Rating from '../Rating';
import GroupSelectBoxes from '../GroupSelectBoxes';
import Counter from '../Counter';
import TextButton from '../TextButton';
import MyChip from '../Chip';
import { MyChipSize, MyColor } from '../../util/constants';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import Accordion from '../Accordion';
import GridContainer from '../GridContainer';
import ComponentCard from './ComponentCard';

const colors = [
  { id: 0, color: 'bg-success-icon', disabled: false, label: 'green' },
  { id: 1, color: 'bg-warning-icon', disabled: false, label: 'yellow' },
  { id: 2, color: 'bg-error', disabled: true, label: 'red' },
  { id: 3, color: 'bg-brand-primary', disabled: true, label: 'purple' },
  { id: 4, color: 'bg-primary-filled', disabled: false, label: 'black' },
];

const sizes = [
  { id: 0, value: 'XS', stock: 4 },
  { id: 1, value: 'S', stock: 1 },
  { id: 2, value: 'M', stock: 0 },
  { id: 3, value: 'L', stock: 3 },
  { id: 4, value: 'XL', stock: 10 },
];

const accordionData = [
  {
    title: 'Specifications',
    content: [
      'Weight: 1.2 kg',
      'Dimensions: 25 x 15 x 10 cm',
      'Material: Stainless Steel',
    ],
  },
  {
    title: 'Usage',
    content: [
      'Ideal for outdoor activities.',
      'Easy to clean and maintain.',
      'Suitable for all weather conditions.',
    ],
  },
  {
    title: 'Warranty',
    content: [
      '2-year warranty included.',
      'Covers manufacturing defects.',
      'Excludes accidental damage.',
    ],
  },
  {
    title: 'Support',
    content: [
      '24/7 customer support.',
      'Email and live chat available.',
      'Comprehensive FAQ section.',
    ],
  },
  {
    title: 'Returns',
    content: [
      '30-day return policy.',
      'Items must be unused.',
      'Contact support for returns.',
    ],
  },
];

const RatingCard: React.FC = () => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | string>(
    0,
  );

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | string>(
    0,
  );

  const [inputCounter01, setInputCounter01] = useState<number>(1);
  const [inputCounter02, setInputCounter02] = useState<number>(999);
  const [inputCounter03, setInputCounter03] = useState<number>(0);

  const getSelectedColor = (index: number | string): void => {
    setSelectedColorIndex(index);
    console.log(index);
  };

  const getSelectedSize = (index: number | string): void => {
    setSelectedSizeIndex(index);
    console.log(index);
  };

  const getCounterValue01 = (counter: number): void => {
    setInputCounter01(counter);
    console.log(counter);
  };

  const getCounterValue02 = (counter: number): void => {
    setInputCounter02(counter);
    console.log(counter);
  };

  const getCounterValue03 = (counter: number): void => {
    setInputCounter03(counter);
    console.log(counter);
  };

  return (
    <SectionContainer>
      <GridContainer>
        <ComponentCard title={'Text Button:'}>
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
        </ComponentCard>

        <ComponentCard title={'Chip:'}>
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
        </ComponentCard>

        <ComponentCard title={'Rating:'}>
          <Rating value={0} />
          <Rating value={1} />
          <Rating value={3.5} />
          <Rating value={4.1} />
          <Rating value={5} />
          <Rating value={0} emptyColor='text-warning' valueColor='text-brand' />
          <Rating value={1} emptyColor='text-warning' valueColor='text-brand' />
          <Rating
            value={3.5}
            emptyColor='text-warning'
            valueColor='text-brand'
          />
          <Rating
            value={4.1}
            emptyColor='text-warning'
            valueColor='text-brand'
          />
          <Rating value={5} emptyColor='text-warning' valueColor='text-brand' />
          <Rating
            value={0}
            icon={HeartFilledIcon}
            valueColor='text-error'
            text='so bad'
          />
          <Rating
            value={1}
            icon={HeartFilledIcon}
            valueColor='text-error'
            text='not too bad'
          />
          <Rating
            value={3.5}
            icon={HeartFilledIcon}
            valueColor='text-error'
            text='not bad'
          />
          <Rating
            value={4.1}
            icon={HeartFilledIcon}
            valueColor='text-error'
            text='good'
          />
          <Rating
            value={5}
            icon={HeartFilledIcon}
            valueColor='text-error'
            text='very good'
          />
        </ComponentCard>

        <ComponentCard title={'Radio:'}>
          <MyGroupColorSelect values={colors} callBack={getSelectedColor} />
          <p className='mt-8 mb-4'>
            {`You have selected: ${
              colors[
                typeof selectedColorIndex === 'string'
                  ? parseInt(selectedColorIndex)
                  : selectedColorIndex
              ].label
            } ${
              colors[
                typeof selectedColorIndex === 'string'
                  ? parseInt(selectedColorIndex)
                  : selectedColorIndex
              ].disabled
                ? '(out of stock)'
                : ''
            }`}
          </p>
          <Divider />
          <div className='mb-4'></div>
          <div className='flex gap-4 flex-wrap items-center'>
            <GroupSelectBoxes values={sizes} callBack={getSelectedSize} />
          </div>
          <p className='mt-8 mb-4'>
            {`You have selected: ${
              sizes[
                typeof selectedSizeIndex === 'string'
                  ? parseInt(selectedSizeIndex)
                  : selectedSizeIndex
              ].value
            } ${
              sizes[
                typeof selectedSizeIndex === 'string'
                  ? parseInt(selectedSizeIndex)
                  : selectedSizeIndex
              ].stock
                ? ''
                : '(out of stock)'
            }`}
          </p>
        </ComponentCard>

        <ComponentCard title={'Counter:'}>
          <Counter value={8} callBack={getCounterValue01} />
          <p className='mt-8 mb-4'>{`quantity selected: ${inputCounter01}`}</p>
          <Divider />
          <div className='mb-4'></div>
          <Counter
            initialValue={inputCounter02}
            value={999}
            callBack={getCounterValue02}
          />
          <p className='mt-8 mb-4'>{`quantity selected: ${inputCounter02}`}</p>
          <Divider />
          <div className='mb-4'></div>
          <Counter
            initialValue={inputCounter03}
            value={0}
            callBack={getCounterValue03}
          />
          <p className='mt-8 mb-4'>{`quantity selected: ${0}`}</p>
        </ComponentCard>

        <ComponentCard title={'Primary Button:'}>
          <div className='flex flex-col gap-4'>
            <PrimaryButton text={'Add to Cart'} />
            <PrimaryButton text={'Hover Me'} />
            <PrimaryButton text={'Click Me'} />
            <PrimaryButton text={'Disabled'} disabled={true} />
          </div>
        </ComponentCard>

        <ComponentCard title={'Secondary Button:'}>
          <div className='flex flex-col gap-4'>
            <SecondaryButton text={'Cancel'} />
            <SecondaryButton text={'Hover Me'} />
            <SecondaryButton text={'Click Me'} />
            <SecondaryButton text={'Disabled'} disabled={true} />
          </div>
        </ComponentCard>

        <ComponentCard title={'Accordion:'}>
          <Accordion data={accordionData} />
        </ComponentCard>
      </GridContainer>
      <RequirementsLink
        link={
          'https://github.com/users/qingyanyang/projects/3/views/1?pane=issue&itemId=67543327'
        }
      />
    </SectionContainer>
  );
};

export default RatingCard;
