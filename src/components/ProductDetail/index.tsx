import { useState } from 'react';
import SectionContainer from '../SectionContainer';
import MyChip from '../Chip';
import { MyColor } from '../../util/constants';
import TextButton from '../TextButton';
import Rating from '../Rating';
import MyGroupColorSelect from '../GroupColorSelect';
import MyThumbnail from './MyThumbnail';
import GroupSelectBoxes from '../GroupSelectBoxes';
import PrimaryButton from '../PrimaryButton';
import Counter from '../Counter';
import Accordion from '../Accordion';
import RequirementsLink from '../RequirementsLink';

const productDetailsData = {
  product_name: 'Voyager Hoodie',
  product_rating: 3.5,
  product_reviews: 62,
  product_info: {
    intro:
      'The Voyager Hoodie is for the explorer at heart. Its durable fabric and roomy pockets are perfect for those who are always searching for the next adventure.',
    price: 95,
    discount: 0.8,
  },
  product_stock: [
    {
      id: 0,
      color: 'bg-success-icon',
      sizes: [
        { id: 0, value: 'XS', stock: 1 },
        { id: 1, value: 'S', stock: 8 },
        { id: 2, value: 'M', stock: 2 },
        { id: 3, value: 'L', stock: 6 },
        { id: 4, value: 'XL', stock: 9 },
      ],
      img_urls: [
        '../../assets/imgs/ProductDetails/voyager-hoodie-1.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-2.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-3.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-4.webp',
      ],
    },
    {
      id: 1,
      color: 'bg-warning-icon',
      sizes: [
        { id: 0, value: 'XS', stock: 0 },
        { id: 1, value: 'S', stock: 8 },
        { id: 2, value: 'M', stock: 1 },
        { id: 3, value: 'L', stock: 6 },
        { id: 4, value: 'XL', stock: 0 },
      ],
      img_urls: [
        '../../assets/imgs/ProductDetails/voyager-hoodie-brown-1.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-brown-2.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-brown-3.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-brown-4.webp',
      ],
    },
    {
      id: 2,
      color: 'bg-error',
      sizes: [
        { id: 0, value: 'XS', stock: 0 },
        { id: 1, value: 'S', stock: 0 },
        { id: 2, value: 'M', stock: 0 },
        { id: 3, value: 'L', stock: 0 },
        { id: 4, value: 'XL', stock: 0 },
      ],
      img_urls: [
        '../../assets/imgs/ProductDetails/voyager-hoodie-red-1.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-red-2.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-red-3.webp',
        '../../assets/imgs/ProductDetails/voyager-hoodie-red-4.webp',
      ],
    },
  ],
  product_desc: [
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
  ],
};

function ProductDetails() {
  const [colorIndex, setColorIndex] = useState<number | string>(0);
  const [sizeIndex, setSizeIndex] = useState<number | string>(0);
  const [counter, setCounter] = useState<number>(0);
  const [revertChildCounterFlag, setRevertChildCounterFlag] =
    useState<boolean>(false);

  const revertCounterValue = (): void => {
    setCounter(0);
    setRevertChildCounterFlag(!revertChildCounterFlag);
    console.log(counter);
  };

  const getCounterValue = (counter: number): void => {
    setCounter(counter);
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

  const handleSelectedColorChange = (newIndex: number | string) => {
    console.log(newIndex);
    revertCounterValue();
  };

  const handleSelectedSizeChange = (newIndex: number | string) => {
    console.log(newIndex);
    revertCounterValue();
  };

  const handlePrimaryButtonClick = () => {
    alert(`data collected:
      color index: ${colorIndex} 
      size index: ${sizeIndex}
      quantity: ${counter}
      `);
  };

  type ColorModel = {
    id: number;
    color: string;
    disabled: boolean;
  };

  const getColorModel = (): ColorModel[] => {
    const stockArr = productDetailsData.product_stock;
    const res = stockArr.map((stock) => {
      return {
        id: stock.id,
        color: stock.color,
        disabled: stock.sizes.every((size) => size.stock === 0),
      };
    });
    return res;
  };

  return (
    <SectionContainer>
      <div className='py-12 px-4 tablet:py-16 desktop:px-24 desktop:py-24 w-full grid gap-8 desktop:grid-cols-2 items-start bg-primary'>
        <MyThumbnail
          thumbnailUrls={
            productDetailsData.product_stock.filter(
              (thumbnailUrl) => thumbnailUrl.id === colorIndex,
            )[0].img_urls
          }
        />
        <div className='w-full flex flex-col gap-10'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col'>
              <p className='mb-5 font-semibold text-3xl tablet:text-5xl'>
                {productDetailsData.product_name}
              </p>
              <span className='mb-2 flex gap-2 items-baseline'>
                {productDetailsData.product_info.discount && (
                  <span className='font-medium text-3xl text-secondary'>
                    {`$${
                      productDetailsData.product_info.discount &&
                      productDetailsData.product_info.discount *
                        productDetailsData.product_info.price
                    }`}
                  </span>
                )}
                <span className='font-medium text-lg line-through text-disabled'>
                  {`$${productDetailsData.product_info.price}`}
                </span>
              </span>
              {productDetailsData.product_info.discount && (
                <>
                  <MyChip text={'20% OFF'} color={MyColor.Warning} />
                  <div className='mt-1'></div>
                </>
              )}
              <div className='flex gap-2 items-center'>
                <Rating value={productDetailsData.product_rating} />
                <TextButton
                  text={
                    productDetailsData.product_reviews
                      ? `See all ${productDetailsData.product_reviews} reviews`
                      : 'Be the first.'
                  }
                />
              </div>
            </div>
            <div>
              <p className='font-normal text-base text-secondary'>
                {productDetailsData.product_info.intro}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>
                Available Colors
              </p>
              <div className='flex gap-6'>
                <MyGroupColorSelect
                  onChange={handleSelectedColorChange}
                  values={getColorModel()}
                  callBack={getSelectedColor}
                />
              </div>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>
                Available Sizes
              </p>
              <div className='flex gap-4 flex-wrap items-center'>
                <GroupSelectBoxes
                  onChange={handleSelectedSizeChange}
                  values={
                    productDetailsData.product_stock.filter(
                      (ele) => ele.id === colorIndex,
                    )[0].sizes
                  }
                  callBack={getSelectedSize}
                />
              </div>
            </div>
            <div className='relative flex flex-col gap-4'>
              <p className='text-tertiary font-normal text-sm'>Quantity</p>
              <Counter
                needRevertChildCounter={revertChildCounterFlag}
                initialValue={0}
                value={
                  productDetailsData.product_stock
                    .filter((ele) => ele.id === colorIndex)[0]
                    .sizes.filter((size) => size.id === sizeIndex)[0].stock
                }
                callBack={getCounterValue}
              />
            </div>
            <PrimaryButton
              onClick={handlePrimaryButtonClick}
              text={'Add to Cart'}
              disabled={
                productDetailsData.product_stock
                  .filter((ele) => ele.id === colorIndex)[0]
                  .sizes.filter((size) => size.id === sizeIndex)[0].stock ===
                  0 || counter === 0
              }
            />
          </div>
          <Accordion data={productDetailsData.product_desc} />
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
