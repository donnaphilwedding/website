import { FC, HTMLAttributes, useEffect, useState } from 'react';
import { merge } from '../../utils/merge';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  secondary?: boolean;
  collapsible?: boolean;
  forceOpen?: boolean;
}

export const Card: FC<Props> = ({ title, secondary, children, className, collapsible = false, forceOpen = false }) => {
  const [collapsed, setCollapsed] = useState<boolean>(collapsible && !forceOpen);

  useEffect(() => {
    if (forceOpen) {
      setCollapsed(false);
    }
  }, [setCollapsed, forceOpen]);

  let cardClass = 'w-[96%] mx-auto py-3 px-3 md:px-5 relative';
  if (secondary) {
    cardClass = merge(cardClass, 'bg-primary text-white');
  } else {
    cardClass = merge(cardClass, 'bg-white');
  }

  return (
    <motion.div
      layout
      className={cardClass}
      style={{ borderRadius: 5 }}
      onClick={collapsed ? () => setCollapsed(false) : undefined}
      animate={collapsed ? 'closed' : 'open'}
    >
      {title && (
        <motion.p layout className="font-cormorantSc text-2xl text-center mb-2">
          {title}
        </motion.p>
      )}
      {!collapsed && (
        <motion.div
          className={merge('flex flex-col gap-5', className)}
          initial={{ opacity: collapsible ? 0 : 1 }}
          variants={{
            open: {
              opacity: 1
            },
            closed: {
              opacity: 0
            }
          }}
          transition={{
            duration: 0.2,
            delay: 0.2
          }}
        >
          {children}
        </motion.div>
      )}
      {collapsible && (
        <motion.button
          layout
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
