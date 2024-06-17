import MyAvator from '../MyAvator/MyAvator';

interface TestimonialCardProps {
  avatarSrc: string;
  name: string;
  username: string;
  content: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  avatarSrc,
  name,
  username,
  content,
}) => {
  return (
    <div
      className={`w-[340px] flex flex-col justify-center gap-4 p-6 rounded-lg bg-primary border-primary border shadow`}
    >
      <div className='flex gap-4 items-center self-stretch'>
        <MyAvator src={avatarSrc} alt={'profile-thumbnail'} />
        <div className='flex flex-col'>
          <p className='text-primary text-lg font-semibold ls short-text-ellipsis'>
            {name}
          </p>
          <p className='text-secondary text-sm font-normal short-text-ellipsis'>
            {`@${username}`}
          </p>
        </div>
      </div>
      <div>
        <p className='text-secondary text-base font-normal text-lines-ellipsis'>
          {content}
        </p>
      </div>
    </div>
  );
};
