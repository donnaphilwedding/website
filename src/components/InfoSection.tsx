import { FC, HTMLAttributes, useState } from 'react';
import { merge } from '../utils/merge';
import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi';

interface InfoSectionProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  secondary?: boolean;
  collapsible?: boolean;
}

export const InfoSection: FC<InfoSectionProps> = ({ title, secondary, children, className, collapsible = false }) => {
  const [collapsed, setCollapsed] = useState<boolean>(collapsible);

  let cardClass = 'md:rounded-lg w-full py-3 px-3 md:px-5 relative';
  if (secondary) {
    cardClass = merge(cardClass, 'bg-primary text-white');
  } else {
    cardClass = merge(cardClass, 'bg-white');
  }

  return (
    <div className={cardClass} onClick={collapsed ? () => setCollapsed(false) : undefined}>
      {title && <p className="font-cormorantSc text-2xl text-center mb-2">{title}</p>}
      {!collapsed && <div className={merge('flex flex-col gap-5', className)}>{children}</div>}
      {collapsible && (
        <button type="button" className='absolute top-4 right-4' onClick={() => setCollapsed(!collapsed)}>
          {!collapsed ? <HiOutlineChevronDown className="h-6 w-6" /> : <HiOutlineChevronRight className="h-6 w-6" />}
        </button>
      )}
    </div>
  );
};
