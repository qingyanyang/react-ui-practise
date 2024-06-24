type SectionContainerProps = React.PropsWithChildren<{}>;

/**
 *
 * @description: grediant bg container for each section
 * @example: <SectionContainer><TestimonialCard/></SectionContainer>
 *
 *
 */
const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
  return (
    <section className='min-h-screen p-4 w-full flex flex-col items-center justify-start gap-10 bg-gradient-to-b from-gray-50 to-[#d2d6db]'>
      <div className='h-10'></div>
      {children}
    </section>
  );
};
export default SectionContainer;
