import { motion } from 'framer-motion';
import React, { FC, HTMLAttributes } from 'react';
import { merge } from '../../utils/merge';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const CardSection: FC<Props> = ({ title, children, className }) => {
  return (
    <motion.div layout>
      <motion.p layout className="font-bold text-lg">{title}</motion.p>
      <motion.div layout className={merge('flex flex-col gap-3', className)}>{children}</motion.div>
    </motion.div>
  );
};
