import { motion } from 'framer-motion';
import { FC, HTMLAttributes, useState } from 'react';
import { CardSection } from './card/CardSection';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title: string;
  mapUrl: string;
}

export const RecommendationSection: FC<Props> = ({ title, children, className, mapUrl }) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <CardSection title={title} className={className}>
      <motion.div layout>{children}</motion.div>
      <motion.button
        key="title"
        layout
        className="bg-secondary w-full sm:w-32 text-white border rounded-md p-1 whitespace-nowrap"
        onClick={() => setShowMap(!showMap)}
      >
        {showMap ? 'Hide map' : 'Show map'}
      </motion.button>
      {showMap && (
        <motion.iframe
          layout
          title={title}
          src={mapUrl}
          height="300"
          className="border rounded-sm"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></motion.iframe>
      )}
    </CardSection>
  );
};
