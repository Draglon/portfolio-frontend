"use client";
import { Title } from "@/views/shared/antd/Typography";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="section">
      <div className="section__wrapper">
        <Title className="section__title" level={1}>
          {title}
        </Title>
        {children}
      </div>
    </section>
  );
};

export default Section;
