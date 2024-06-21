type GridContainerProps = React.PropsWithChildren<{}>;

/**
 *
 * @description: grediant bg container for each section
 * @example: <GridContainer><TestimonialCard/></GridContainer>
 *
 *
 */
export const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return (
    <div className='space-y-10 gap-10 columns-1 tablet:columns-2 desktop:columns-3 items-start justify-center'>
      {children}
    </div>
  );
};
