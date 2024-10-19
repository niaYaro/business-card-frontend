import { FC, PropsWithChildren } from 'react';
import styles from './Heading.module.scss';
import cn from 'classnames';

interface HeadingProps extends PropsWithChildren<{}> {
  type: "h1" | "h2" | "h3" | "h4";
  className?: string;
}

const Heading: FC<HeadingProps> = ({ className, type, children }) => {
  switch (type) {
    case "h1":
      return <h1 className={cn(styles.h1, className)}>{children}</h1>;
    case "h2":
      return <h2 className={cn(styles.h2, className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn(styles.h3, className)}>{children}</h3>;
    case "h4":
      return <h4 className={cn(styles.h4, className)}>{children}</h4>;
    default:
      return null;
  }
};

export default Heading;
