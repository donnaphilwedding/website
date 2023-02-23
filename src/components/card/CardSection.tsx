import { motion } from 'framer-motion';
import { FC, HTMLAttributes } from 'react';
import { merge } from '../../utils/merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const CardSection: FC<Props> = ({ title, children, className }) => {
  return (
    <motion.div
      layout
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      }}
    >
      <p className="font-bold text-lg">{title}</p>
      <div className={merge('flex flex-col gap-3', className)}>{children}</div>
    </motion.div>
  );
};
