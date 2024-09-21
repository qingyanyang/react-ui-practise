interface RequirementsLinkProps {
  link: string;
}

/**
 *
 * @param link: requirements link for the component include figma
 */
const RequirementsLink: React.FC<RequirementsLinkProps> = ({ link }) => {
  return (
    <div className='m-10 text-center inline'>
      <p>
        <strong>Figma: </strong>
        <a className='underline text-brand' href={link}>
          {link}
        </a>
      </p>
    </div>
  );
};
export default RequirementsLink;
