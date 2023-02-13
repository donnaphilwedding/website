import { FC, HTMLAttributes, useState } from 'react';
import { InfoSubSection } from './InfoSubsection';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  mapUrl: string;
}

export const RecommendationSection: FC<Props> = ({ title, children, className, mapUrl }) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <InfoSubSection title={title} className={className}>
      <div>{children}</div>
      <button className="bg-secondary w-full sm:w-32 text-white border rounded-md p-1 whitespace-nowrap" onClick={() => setShowMap(!showMap)}>
        {showMap ? 'Hide map' : 'Show map'}
      </button>
      {showMap && (
        <iframe
          title={title}
          src={mapUrl}
          height="300"
          className="border rounded-sm"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </InfoSubSection>
  );
};
