import React, { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { RequirementsLink } from '../RequirementsLink';
import { Rating } from '../Rating';
import { HeartFilledIcon } from '@radix-ui/react-icons';
import MyGroupColorSelect from '../GroupColorSelect';
import Divider from '@mui/material/Divider';
import GroupSelectBoxes from '../GroupSelectBoxes';
import Counter from '../Counter';
import { TextButton } from '../TextButton';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { ArrowBack } from '@mui/icons-material';
import { MyChip } from '../Chip';
import { MyChipSize, MyColor } from '../../util/constants';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import Accordion from '../Accordion';

const colors = [
  { id: 0, color: 'bg-success-icon', disabled: false, label: 'green' },
  { id: 1, color: 'bg-warning-icon', disabled: false, label: 'yellow' },
  { id: 2, color: 'bg-error', disabled: true, label: 'red' },
  { id: 3, color: 'bg-brand-primary', disabled: true, label: 'purple' },
  { id: 4, color: 'bg-primary-filled', disabled: false, label: 'black' },
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
  const [selectedColorIndex, setSelectedColorIndex] = useState<
    number | string | null
  >(null);

  const [selectedSizeIndex, setSelectedSizeIndex] = useState<
    number | string | null
  >(null);

  const [inputCounter01, setInputCounter01] = useState<number>(1);
  const [inputCounter02, setInputCounter02] = useState<number>(999);

  const getSelectedColor = (index: number | string | null): void => {
    setSelectedColorIndex(index);
    console.log(index);
  };

  const getSelectedSize = (index: number | string | null): void => {
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

  return (
    <SectionContainer>
      <div className='grid gap-10 grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 items-start justify-center'>
        <div className='flex flex-col gap-10'>
          <div
            className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
          >
            <p className='mb-4 font-semibold'>Text Button:</p>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <div className='mb-4'></div>
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
          </div>
          <div
            className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
          >
            <p className='mb-4 font-semibold'>Chip:</p>
            <Divider sx={{ borderBottomWidth: 2 }} />
            <div className='mb-4'></div>
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
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Rating:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
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
        </div>
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Group select:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
          <MyGroupColorSelect values={colors} callBack={getSelectedColor} />
          <p className='mt-8 mb-4'>
            {selectedColorIndex !== null
              ? `You have selected: ${
                  colors[
                    typeof selectedColorIndex === 'string'
                      ? parseInt(selectedColorIndex)
                      : selectedColorIndex
                  ].label
                } `
              : 'Please select a color'}
          </p>
          <Divider />
          <div className='mb-4'></div>
          <div className='flex gap-4 flex-wrap items-center'>
            <GroupSelectBoxes values={sizes} callBack={getSelectedSize} />
          </div>
          <p className='mt-8 mb-4'>
            {selectedSizeIndex !== null
              ? `You have selected: ${
                  sizes[
                    typeof selectedSizeIndex === 'string'
                      ? parseInt(selectedSizeIndex)
                      : selectedSizeIndex
                  ].value
                } `
              : 'Please select a size'}
          </p>
        </div>
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Counter:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
          <Counter value={8} callBack={getCounterValue01} />
          <p className='mt-8 mb-4'>{`quantity selected: ${inputCounter01}`}</p>
          <Divider />
          <div className='mb-4'></div>
          <Counter
            initialValue={999}
            value={999}
            callBack={getCounterValue02}
          />
          <p className='mt-8 mb-4'>{`quantity selected: ${inputCounter02}`}</p>
          <Divider />
          <div className='mb-4'></div>
          <Counter value={0} callBack={getCounterValue01} />
          <p className='mt-8 mb-4'>{`quantity selected: ${0}`}</p>
        </div>
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Primary Button:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
          <div className='flex flex-col gap-4'>
            <PrimaryButton text={'Add to Cart'} />
            <PrimaryButton text={'Hover Me'} />
            <PrimaryButton text={'Click Me'} />
            <PrimaryButton text={'Disabled'} disabled={true} />
          </div>
        </div>
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Secondary Button:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
          <div className='flex flex-col gap-4'>
            <SecondaryButton text={'Cancel'} />
            <SecondaryButton text={'Hover Me'} />
            <SecondaryButton text={'Click Me'} />
            <SecondaryButton text={'Disabled'} disabled={true} />
          </div>
        </div>
        <div
          className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden px-4 py-6`}
        >
          <p className='mb-4 font-semibold'>Accordion:</p>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <div className='mb-4'></div>
          <Accordion data={accordionData} />
        </div>
      </div>
      <div className='m-10 text-center'>
        <RequirementsLink link={''} />
      </div>
    </SectionContainer>
  );
};

export default RatingCard;