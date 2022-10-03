import { FC, HTMLAttributes } from 'react';
import BackgroundImage from '../images/woodlands.jpeg';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-[90vh] bg-auto xl:bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute w-full h-[90vh] bg-gradient-to-b from-primary/25 to-white" />
      <div className="max-w-4xl mx-auto relative">{children}</div>
    </div>
  );
};
