"use client";
import { Title } from "@/views/shared/antd/Typography";

type SectionItemProps = {
  title: string;
  children: React.ReactNode;
};

const SectionItem = ({ title, children }: SectionItemProps) => {
  return (
    <section className="section__item">
      <Title className="section__subtitle" level={2}>
        {title}
      </Title>
      {children}
    </section>
  );
};

export default SectionItem;
