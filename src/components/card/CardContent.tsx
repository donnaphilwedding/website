import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { merge } from '../../utils/merge';

interface Props {
  className?: string;
  children: ReactNode;
}

export const CardContent: FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      }}
    >
      {children}
    </motion.div>
  );
};
