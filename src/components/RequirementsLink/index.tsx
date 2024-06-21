interface RequirementsLinkProps {
  link: string;
}

/**
 *
 * @param link: requirements link for the component include figma
 */
export const RequirementsLink: React.FC<RequirementsLinkProps> = ({ link }) => {
  return (
    <div className='m-10 text-center inline'>
      <p>
        <strong>Requirements: </strong>
        <a className='underline text-brand' href={link}>
          {link}
        </a>
      </p>
    </div>
  );
};
