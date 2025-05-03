"use client";
import Image from "next/image";

import { Text } from "@/views/shared/antd/Typography";

type IconProps = {
  icon: string;
  parts?: number | null;
}

type ItemProps = {
  href: string;
  src: any;
  alt: string;
  title: string;
  icons: IconProps[];
};

type SectionProps = {
  items: ItemProps[];
};

const Gallery = ({ items }: SectionProps) => {
  return (
    <div className="gallery">
      {items.map((item, index: number) => (
        <figure className="gallery__item" key={index}>
          <a href={item.href} target="_blank" className="gallery__link">
            <Image src={item.src} className="gallery__img" height="200" alt={item.alt} />
            <Text className="gallery__description">
              <span className="gallery__text">{item.title}</span>
              <span className="gallery__stack">
                {item.icons.map(({ icon, parts }, iconIndex: number) => (
                  <i className={`icon icon-${icon}`} key={iconIndex}>
                    {[...Array(parts)].map((_, i) => <span key={i+1} className={`path${i+1}`} />)}
                  </i>
                ))}
              </span>
            </Text>
          </a>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
