interface RequirementsLinkProps {
  link: string;
}

export const RequirementsLink: React.FC<RequirementsLinkProps> = ({ link }) => {
  return (
    <span>
      <p>
        <strong>Requirements: </strong>
        <a className='underline text-brand' href={link}>
          {link}
        </a>
      </p>
    </span>
  );
};
