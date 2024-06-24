type GridContainerProps = React.PropsWithChildren<{}>;

/**
 *
 * @example: <GridContainer><TestimonialCard/></GridContainer>
 *
 *
 */
const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className='space-y-10 gap-10 columns-1 tablet:columns-2 desktop:columns-3 items-start justify-center'>
      {children}
    </div>
  );
};
export default GridContainer;
