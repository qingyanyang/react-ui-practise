interface TextButtonProps {
  text: string;
  icon: React.ReactNode;
}

export const TextButton: React.FC<TextButtonProps> = ({ text, icon }) => {
  return (
    <div>
      <a
        href='#'
        className='text-base font-medium short-text-ellipsis text-brand flex items-center gap-2'
      >
        {text}
        <span>{icon}</span>
      </a>
    </div>
  );
};
