// src/components/Layout.tsx
import { FC } from 'react';
import { Img } from 'react-image';

interface ImagePros {
  src: string;
  className?: string;
  alt?: string;
}

const Image: FC<ImagePros> = ({ src, className, alt }) => {
  return (
    <div className={className}>
      <Img src={src} alt={alt}/>
    </div>
  );
};

export default Image;
