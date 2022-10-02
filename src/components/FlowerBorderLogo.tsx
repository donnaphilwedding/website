import { FC, HTMLAttributes } from 'react';
import { ReactComponent as Break } from './break.svg';

export const FlowerBorderLogo: FC<HTMLAttributes<HTMLDivElement>> = ({className}) => {
    return <div className={className}>
        <Break className='w-full h-full'/>
        <div className='flex flex-col items-center h-full w-full'>
            <p className='font-calligraffitti text-2xl mb-[-6px]'>{'Donna & Phil'}</p>
            <p className='font-cormorantSc text-gray-500'>{'2023/09/16'}</p>
        </div>
        <Break className='w-full h-full'/>
    </div>
}