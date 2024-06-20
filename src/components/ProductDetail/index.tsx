import { SectionContainer } from '../SectionContainer';
import { MyChip } from '../Chip';
import { MyColor } from '../../util/constants';
import { TextButton } from '../TextButton';
import { Rating } from '../Rating';
import { MyGroupColorSelect } from '../GroupColorSelect';
import { RemoveCircleOutline } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import MyThumbnail from './MyThumbnail';
import GroupSelectBoxes from '../GroupSelectBoxes';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';
import { Counter } from '../Counter';

const thumbnailUrls = [
  '../../assets/imgs/ProductDetails/thumbnail01.png',
  '../../assets/imgs/ProductDetails/thumbnail02.png',
  '../../assets/imgs/ProductDetails/thumbnail01.png',
  '../../assets/imgs/ProductDetails/thumbnail01.png',
  '../../assets/imgs/ProductDetails/thumbnail01.png',
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

function ProductDetails() {
  const getCounterValue = (counter: number): void => {
    console.log(counter);
  };

  const getSelectedSize = (index: number | string | null): void => {
    console.log(index);
  };

  const getSelectedColor = (index: number | string | null): void => {
    console.log(index);
  };

  return (
    <SectionContainer>
      <div className='py-12 px-4 tablet:py-16 desktop:px-24 desktop:py-24 w-full grid gap-8 desktop:grid-cols-2 items-start bg-primary'>
        <MyThumbnail thumbnailUrls={thumbnailUrls} />
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
                <Rating
                  value={3.5}
                  color={'text-warning-icon'}
                  fontSize='26px'
                />
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
              {/* <div
                className='font-medium text-xs absolute text-primary-invert left-[48px] bottom-[42px] bg-primary-inverted px-3 py-2 rounded-lg z-10 shadow-toolTip
'
              >
                Insufficient stock
              </div>
              <div className='absolute left-[100px] bottom-[39px] rounded-[1px] bg-primary-inverted w-4 h-4 rotate-45 shadow-toolTip'></div> */}
              <p className='text-tertiary font-normal text-sm'>Quantity</p>
              <Counter value={8} callBack={getCounterValue} />
            </div>
            <PrimaryButton text={'Add to Cart'} />
            <SecondaryButton text={'Cancel'} />
          </div>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-lg text-primary'>Features</p>
                <button>
                  <RemoveCircleOutline className='text-disabled' />
                </button>
              </div>
              <div>
                <ul className='list-disc list-inside ml-2 font-normal text-base text-secondary'>
                  <li>Designed for comfort and durability.</li>
                  <li>
                    Soft, breathable fabric ideal for travel and adventure.
                  </li>
                  <li>Large front pocket and adjustable hood.</li>
                  <li>Minimalist design pairs well with any style.</li>
                  <li>Made with eco-conscious materials.</li>
                </ul>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-lg text-primary'>
                  Fabric & Care
                </p>
                <button>
                  <RemoveCircleOutline className='text-disabled' />
                </button>
              </div>
              <div>
                <ul className='list-disc list-inside ml-2 font-normal text-base text-secondary'>
                  <li>Machine wash cold on a gentle cycle.</li>
                  <li>Tumble dry low or hang to dry.</li>
                  <li>Do not use fabric softeners or bleach.</li>
                  <li>Iron on a low setting if necessary.</li>
                </ul>
              </div>
            </div>
            <Divider />
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <p className='font-medium text-lg text-primary'>Shipping</p>
                <button>
                  <RemoveCircleOutline className='text-disabled' />
                </button>
              </div>
              <div>
                <ul className='list-disc list-inside ml-2 font-normal text-base text-secondary'>
                  <li>
                    Free standard shipping on all orders - no minimum spend
                    required.
                  </li>
                  <li>Expedited shipping available at an additional cost.</li>
                  <li>
                    Packaged in biodegradable materials to reduce environmental
                    impact.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export default ProductDetails;
