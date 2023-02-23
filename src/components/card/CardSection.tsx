import { motion } from 'framer-motion';
import { FC, HTMLAttributes } from 'react';
import { merge } from '../../utils/merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const CardSection: FC<Props> = ({ title, children, className }) => {
  return (
    <motion.div layout>
      <p className="font-bold text-lg">{title}</p>
      <div className={merge('flex flex-col gap-3', className)}>{children}</div>
    </motion.div>
  );
};
