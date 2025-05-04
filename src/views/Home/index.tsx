"use client";
import { useTranslations } from "next-intl";

import { Text, Title } from "@/views/shared/antd/Typography";
import GuestLayout from "@/views/layouts/GuestLayout";
import Section from "@/views/shared/Section";
import SectionItem from "@/views/shared/SectionItem";
import Gallery from "@/views/shared/Gallery";
import Icons from "@/views/shared/Icons";

import AirRelocateSRC from "@/assets/image/portfolio/AirRelocate.png";
import RubyGarageSRC from "@/assets/image/portfolio/RubyGarage.png";
import ExpertBoxSRC from "@/assets/image/portfolio/ExpertBox.png";
import ClinixSRC from "@/assets/image/portfolio/clinix.png";
import TrustBooksSRC from "@/assets/image/portfolio/trustbooks.png";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <GuestLayout>
      <div className="page__container">
        <Section title={t("portfolio.title")}>
          <SectionItem title={t("portfolio.markup.title")}>
            <Gallery items={
              [
                {
                  href: "https://tailwindcss-template-flame.vercel.app/",
                  src: AirRelocateSRC,
                  alt: "Air Relocate",
                  title: t("portfolio.markup.airRelocate.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "CSS3", parts: 6 },
                    { icon: "Tailwind-CSS", parts: null },
                    { icon: "React", parts: null },
                    { icon: "Nextjs", parts: 2 },
                  ],
                },
                {
                  href: "https://rubygarage.org/",
                  src: RubyGarageSRC,
                  alt: "Ruby Garage",
                  title: t("portfolio.markup.rubyGarage.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "jQuery", parts: null },
                  ]
                },
                {
                  href: "https://expertbox.io/",
                  src: ExpertBoxSRC,
                  alt: "Expert Box",
                  title: t("portfolio.markup.expertBox.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "jQuery", parts: null },
                  ]
                },
                {
                  href: "https://trustbooks.com/",
                  src: TrustBooksSRC,
                  alt: "Trust Books",
                  title: t("portfolio.markup.trustbooks.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "React", parts: null },
                  ]
                },
              ]}
            />
          </SectionItem>

          <SectionItem title={t("portfolio.react.title")}>
            <Gallery items={
              [
                {
                  href: "https://clinix.com.py/",
                  src: ClinixSRC,
                  alt: "clinix.com.py",
                  title: t("portfolio.react.clinix.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "React", parts: null },
                    { icon: "Nextjs", parts: 2 },
                    { icon: "Jest", parts: null },
                  ]
                },
              ]}
            />
          </SectionItem>

          <SectionItem title={t("portfolio.fullStack.title")}>
            <Gallery items={
              [
                {
                  href: "https://mern-fe-cv-gen.vercel.app/en",
                  src: AirRelocateSRC,
                  alt: "CV generation",
                  title: t("portfolio.fullStack.cvGeneration.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "React", parts: null },
                    { icon: "Nextjs", parts: 2 },
                    { icon: "Jest", parts: null },
                    { icon: "Nodejs", parts: null },
                    { icon: "MongoDB", parts: 16 },
                    { icon: "Mongoosejs", parts: null },
                    { icon: "Express", parts: null },
                  ]
                },
                {
                  href: "https://mern-fe-blog.vercel.app/",
                  src: AirRelocateSRC,
                  alt: "Blog",
                  title: t("portfolio.fullStack.blog.title"),
                  icons: [
                    { icon: "HTML5", parts: 4 },
                    { icon: "Sass", parts: null },
                    { icon: "React", parts: null },
                    { icon: "Nextjs", parts: 2 },
                    { icon: "Jest", parts: null },
                    { icon: "Nodejs", parts: null },
                    { icon: "MongoDB", parts: 16 },
                    { icon: "Mongoosejs", parts: null },
                    { icon: "Express", parts: null },
                  ]
                },
              ]}
            />
          </SectionItem>
        </Section>

        {/* About Me */}
        <Section title={t("aboutMe.title")}>
          <div className="about-me">
            <div className="about-me__wrapper">
              <div className="about-me__description">
                <Text className="about-me__text">
                  {t("aboutMe.description")}
                </Text>
              </div>

              <section className="about-me__section">
                <Title className="about-me__title" level={3}>
                  {t("aboutMe.frontend")}
                </Title>
                <div className="about-me__tech-stack">
                  <Icons icons={[
                      { icon: "HTML5", parts: 4 },
                      { icon: "CSS3", parts: 6 },
                      { icon: "Sass", parts: null },
                      { icon: "Less", parts: null },
                      { icon: "Tailwind-CSS", parts: null },
                      { icon: "JavaScript", parts: 2 },
                      { icon: "TypeScript", parts: 2 },
                      { icon: "jQuery", parts: null },
                      { icon: "React", parts: null },
                      { icon: "Redux", parts: null },
                      { icon: "Nextjs", parts: 2 },
                      { icon: "Jest", parts: null },
                      { icon: "Ant-Design", parts: null },
                      { icon: "Material-UI", parts: 4 },
                    ]}/>
                </div>
              </section>

              <section className="about-me__section">
                <Title className="about-me__title" level={3}>
                  {t("aboutMe.backend")}
                </Title>
                <div className="about-me__tech-stack">
                  <Icons icons={[
                    { icon: "Nodejs", parts: null },
                    { icon: "Express", parts: null },
                    { icon: "MongoDB", parts: 16 },
                    { icon: "Nodemon", parts: 2 },
                    { icon: "Mongoose", parts: null },
                    { icon: "Docker", parts: 16 },
                  ]}/>
                </div>
              </section>
            </div>
          </div>
        </Section>

        {/* Contacts */}
        {/* <Section title={t("contacts.title")}>
          <ul>
            <li>Phone: </li>
            <li>Email: </li>
            <li>LinkedIn: </li>
          </ul>
        </Section> */}
      </div>
    </GuestLayout>
  );
};

export default Home;
