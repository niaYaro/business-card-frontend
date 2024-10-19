import { FC } from 'react';
import styles from './Dropdown.module.scss';
import cn from 'classnames';

interface DropdownProps {
  className?: string;
  details: string;
  summary: string;
  
}

const Dropdown: FC<DropdownProps> = ({ className, details, summary }) => {
  return (
    <details className={cn(styles.dropdown, className)}><p>{details}</p>
      <summary>{summary}</summary>
    </details>
  )
};

export default Dropdown;
