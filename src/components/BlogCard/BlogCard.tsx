import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { MyChip } from '../Chip';
import { TextButton } from '../TextButton';

/**
 * @description: card for display user info; long string frendly; fixed round padding value; card height grow with content when needed.
 * @example: 
 *        <BlogCard
            imgSrc="https:.../assets/TestimonialCard/profile-thumbnail.png"
            labels="Sarah Dole"
            title="sarahdole"
            desc=I've been searching for high-quality abstract images for my design projects..."
          />
 */
interface BlogCardProps {
  imgSrc: string;
  labels: Array<string>;
  title: string;
  desc: string;
  disabled: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  imgSrc,
  labels,
  title,
  desc,
  disabled,
}) => {
  return (
    <div
      className={`w-[340px] rounded-lg bg-primary border-primary border shadow overflow-hidden`}
    >
      <img src={imgSrc} className='w-full h-[288px] object-cover' />
      <div className='w-full py-6 px-4 flex flex-col gap-3 items-start'>
        <div className='flex flex-col gap-2'>
          <div className='flex gap-1'>
            {labels.map((label, index) => (
              <MyChip key={index} text={label} />
            ))}
          </div>
          <p className='text-primary text-lg font-semibold text-short-lines-ellipsis'>
            {title}
          </p>
        </div>
        <div className='flex flex-col gap-6'>
          <p className='text-secondary text-base font-medium text-mid-lines-ellipsis'>
            {desc}
          </p>
          <TextButton
            disabled={disabled}
            text='Read more'
            icon={<ArrowForwardOutlinedIcon fontSize='small' />}
          />
        </div>
      </div>
    </div>
  );
};
