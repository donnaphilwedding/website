import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { merge } from '../utils/merge';
import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  secondary?: boolean;
  collapsible?: boolean;
  forceOpen?: boolean;
}

export const InfoSection: FC<InfoSectionProps> = ({
  title,
  secondary,
  children,
  className,
  collapsible = false,
  forceOpen = false
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(collapsible && !forceOpen);

  useEffect(() => {
    if (forceOpen) {
      setCollapsed(false);
    }
  }, [setCollapsed, forceOpen]);

  let cardClass = 'md:rounded-lg w-full py-3 px-3 md:px-5 relative';
  if (secondary) {
    cardClass = merge(cardClass, 'bg-primary text-white');
  } else {
    cardClass = merge(cardClass, 'bg-white');
  }

  return (
    <motion.div
      className={cardClass}
      onClick={collapsed ? () => setCollapsed(false) : undefined}
      animate={collapsed ? 'closed' : 'open'}
    >
      {title && <p className="font-cormorantSc text-2xl text-center mb-2">{title}</p>}
      {!collapsed && <div className={merge('flex flex-col gap-5', className)}>{children}</div>}
      {collapsible && (
        <motion.button
          variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
          type="button"
          className="absolute top-4 right-4"
          onClick={() => setCollapsed(!collapsed)}
        >
          <HiOutlineChevronRight className="h-6 w-6" />
        </motion.button>
      )}
    </motion.div>
  );
};
