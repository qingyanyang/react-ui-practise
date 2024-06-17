type SectionContainerProps = React.PropsWithChildren<{}>;

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
}) => {
  return (
    <section className='min-h-screen w-full flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-gray-50 to-[#d2d6db]'>
      <div className='h-28'></div>
      {children}
    </section>
  );
};
