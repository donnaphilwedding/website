import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

export const CardContent: FC<Props> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      layout
    >
      {children}
    </motion.div>
  );
};
