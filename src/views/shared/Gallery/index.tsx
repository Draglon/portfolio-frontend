"use client";
import Image from "next/image";

import { Text } from "@/views/shared/antd/Typography";

type SectionProps = {
  items: any[];
};

const Gallery = ({ items }: SectionProps) => {
  return (
    <div className="gallery">
      {items.map((item, index: number) => (
        <figure className="gallery__item" key={index}>
          <a href={item.href} target="_blank" className="gallery__link">
            <Image src={item.src} className="gallery__img" height="200" alt={item.alt} />
            <Text className="gallery__description">
              {item.title}
              <span className="gallery__stack">
                {item.icons.map((icon: string, iconIndex: number) => (
                  <i key={iconIndex} className={`icon icon-${icon}`} />
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
