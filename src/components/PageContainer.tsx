import { FC, HTMLAttributes, Suspense } from 'react';
import BackgroundImage from '../images/museum.jpg';
import { Header } from './Header';
import { ImageLoader } from './ImageLoader';
import { Loader } from './Loader';

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  pageTitle?: string;
  noHeader?: boolean;
}

export const PageContainer: FC<PageContainerProps> = ({ children, pageTitle, noHeader }) => {
  return (
    <div className="bg-background h-screen w-screen flex flex-col">
      <div
        className="fixed w-full h-[100vh] bg-cover bg-bottom top-0"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundRepeat: 'no-repeat'
        }}
      />
      <ImageLoader url={BackgroundImage} />
      <div className="fixed w-full h-[100vh] bg-gradient-to-b from-primary/25 to-background top-0" />
      {!noHeader && (
        <div className="w-full z-50">
          <Header title={pageTitle} />
        </div>
      )}
      <div className={`relative flex-1 overflow-auto`}>
        <div className="w-full overflow-x-hidden">
          <div className="w-screen">
            <div className="md:max-w-[90%] lg:max-w-4xl mx-auto ">
              <Suspense fallback={<div className="h-40 flex items-center justify-center"><Loader className="h-10 w-10" /></div>}>{children}</Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
