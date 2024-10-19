import { FC, PropsWithChildren } from 'react';
import styles from './UList.module.scss';
import cn from 'classnames';

interface UListProps extends PropsWithChildren<{}> {
  className?: string; // Optional className prop
}

const UList: FC<UListProps> = ({ className, children }) => {
  return (
    <ul className={cn(styles.ul, className)}>{children}</ul>
  )
};

export default UList;
