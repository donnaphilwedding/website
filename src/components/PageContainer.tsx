import { FC, HTMLAttributes } from 'react';
import BackgroundImage from './woodlands.jpeg';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="relative">
      <div
        className="absolute w-full h-[90vh]"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: '50% -500px',
          backgroundRepeat: 'none'
        }}
      />
      <div className="absolute w-full h-[90vh] bg-gradient-to-b from-primary/25 to-white" />
      <div className="max-w-4xl mx-auto relative">{children}</div>
    </div>
  );
};
