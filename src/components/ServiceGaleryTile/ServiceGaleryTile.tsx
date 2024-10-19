import { FC, PropsWithChildren } from 'react';
import style from './ServiceGaleryTile.module.scss';
import Image from '../Image/Image';

interface ServiceGaleryProps extends PropsWithChildren {
  img: string;
  altText?: string;
}

const ServiceGaleryTile: FC<ServiceGaleryProps> = ({ children, img, altText }) => {
  return (
    <div className={style.serviceTile}>
      <div className={style.filter}>
      </div>
      <Image className={style.bgImage} src={img} alt={altText} />
      <div className={style.children}>
        {children}
      </div>
    </div>
  );
};

export default ServiceGaleryTile;
