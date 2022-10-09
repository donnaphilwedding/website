import { FC, HTMLAttributes } from 'react';
import BackgroundImage from '../images/woodlands.jpeg';
import { Header } from './Header';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  pageTitle?: string
}

export const PageContainer: FC<PageContainerProps> = ({ children, pageTitle }) => {
  return (
    <div>
      <div
        className="fixed w-full h-[100vh] bg-auto xl:bg-cover bg-bottom top-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="fixed w-full h-[100vh] bg-gradient-to-b from-primary/25 to-white top-0" />
      <div className="fixed w-full top-0 z-50"><Header title={pageTitle}/></div>
      <div className="relative pt-10">

        <div className="max-w-4xl mx-auto ">

        {children}
        </div>
      </div>
    </div>
  );
};
