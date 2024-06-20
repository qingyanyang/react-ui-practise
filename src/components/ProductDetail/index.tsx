import { SectionContainer } from '../SectionContainer';
import { MyChip } from '../Chip';
import { MyColor } from '../../util/constants';
import { TextButton } from '../TextButton';
import { Rating } from '../Rating';
import { MyCheckBox } from '../CheckBox';
import { Add, Remove, RemoveCircleOutline } from '@mui/icons-material';
import Divider from '@mui/material/Divider';

function ProductDetails() {
  return (
    <SectionContainer>
      <div className='py-12 px-4 tablet:py-16 desktop:px-24 desktop:py-24 w-full grid gap-8  desktop:grid-cols-2 items-start bg-primary'>
        <div className='w-full flex flex-col gap-6'>
          <div className='w-full aspect-592/800 rounded-lg overflow-hidden'>
            <img
              className='w-full object-cover'
              src='../../assets/imgs/ProductDetails/thumbnail.png'
              alt='thumbnail'
            />
          </div>
          <div className='relative w-full aspect-592/190 overflow-auto touch-pan-y'>
            <div className='flex gap-4 h-full absolute'>
              <button className='focus:border-[3px] focus:border-brand-emphasize h-full aspect-160/190 rounded-lg overflow-hidden'>
                <img
                  className='w-full'
                  src='../../assets/imgs/ProductDetails/thumbnail.png'
                  alt='thumbnail'
                />
              </button>
              <div className='h-full aspect-160/190 rounded-lg overflow-hidden'>
                <img
                  className='w-full'
                  src='../../assets/imgs/ProductDetails/thumbnail.png'
                  alt='thumbnail'
                />
              </div>
              <div className='h-full aspect-160/190 rounded-lg overflow-hidden'>
                <img
                  className='w-full'
                  src='../../assets/imgs/ProductDetails/thumbnail.png'
                  alt='thumbnail'
                />
              </div>
              <div className='h-full aspect-160/190 rounded-lg overflow-hidden'>
                <img
                  className='w-full'
                  src='../../assets/imgs/ProductDetails/thumbnail.png'
                  alt='thumbnail'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col gap-10'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <p className='mb-5 font-semibold text-5xl'>Voyager Hoodie</p>
              <span className='mb-2 flex gap-2 items-baseline'>
                <span className='font-medium text-3xl text-secondary'>$76</span>
                <span className='font-medium text-lg line-through text-disabled'>
                  $95
                </span>
              </span>
              <MyChip text={'20% OFF'} color={MyColor.Warning} />
              <div className='mt-1 flex gap-2 items-center'>
                <p className='font-normal text-xl'>3.5</p>
                <div className='flex gap-1'>
                  <Rating
                    value={3.5}
                    color={'text-warning-icon'}
                    fontSize='26px'
                  />
                </div>
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
                <MyCheckBox color='bg-success-icon' />
                <MyCheckBox color='bg-warning-icon' />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>
                Available Sizes
              </p>
              <div className='flex gap-4 flex-wrap items-center'>
                <button className='flex justify-center w-[64px] py-3 rounded-[4px] border-primary focus:border-brand-emphasize'>
                  <p className='font-medium text-base text-primary'>XS</p>
                </button>
                <button className='flex justify-center w-[64px] py-3 rounded-[4px] border-primary'>
                  <p className='font-medium text-base text-primary'>S</p>
                </button>
                <button className='flex justify-center w-[64px] py-3 rounded-[4px] border-primary'>
                  <p className='font-medium text-base text-primary'>M</p>
                </button>
                <button className='flex justify-center w-[64px] py-3 rounded-[4px] border-primary'>
                  <p className='font-medium text-base text-primary'>L</p>
                </button>
                <button className='flex justify-center w-[64px] py-3 rounded-[4px] border-primary'>
                  <p className='font-medium text-base text-primary'>XL</p>
                </button>
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>Quantity</p>
              <div className='bg-tertiary self-start flex min-w-[125px] border-primary rounded-[4px] p-0.5 gap-3 justify-between items-center'>
                <div className='px-1.5'>
                  <button className='flex justify-center text-secondary'>
                    <Remove fontSize='small' />
                  </button>
                </div>
                <div className='py-1.5 px-3'>
                  <div className='font-medium text-sm text-secondary'>1</div>
                </div>
                <div className='px-1.5'>
                  <button className='flex justify-center text-secondary'>
                    <Add fontSize='small' />
                  </button>
                </div>
              </div>
            </div>
            <button className='bg-brand-primary p-4 rounded-[4px] font-medium text-lg text-primary-invert'>
              Add to Cart
            </button>
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
