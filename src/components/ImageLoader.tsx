import { FC } from 'react';
import { Img } from 'react-suspense-img';

interface Props {
  url: string;
}

export const ImageLoader: FC<Props> = ({ url }) => {
  return (
    <Img src={url} className="absolute opactity-0 h-1 w-1 top-0 left-0"></Img>
  );
};
