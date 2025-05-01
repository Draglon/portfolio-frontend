"use client";
import { useTranslations } from "next-intl";

import GuestLayout from "@/views/layouts/GuestLayout";
import Section from "@/views/shared/Section";
import SectionItem from "@/views/shared/SectionItem";
import Gallery from "@/views/shared/Gallery";

import AirRelocateSRC from "@/assets/image/portfolio/AirRelocate.png";
import RubyGarageSRC from "@/assets/image/portfolio/RubyGarage.png";
import ExpertBoxSRC from "@/assets/image/portfolio/ExpertBox.png";

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
                  icons: ["html", "tailwindcss", "react", "next_15"]
                },
                {
                  href: "https://rubygarage.org/",
                  src: RubyGarageSRC,
                  alt: "RubyGarage",
                  title: t("portfolio.markup.rubyGarage.title"),
                  icons: ["html", "scss", "jquery"]
                },
                {
                  href: "https://expertbox.io/",
                  src: ExpertBoxSRC,
                  alt: "ExpertBox",
                  title: t("portfolio.markup.expertBox.title"),
                  icons: ["html", "scss", "jquery"]
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
                  icons: ["html", "scss", "react", "next_15", "mongodb", "mongoose", "express", "node"]
                },
                {
                  href: "https://mern-fe-blog.vercel.app/",
                  src: AirRelocateSRC,
                  alt: "Blog",
                  title: t("portfolio.fullStack.blog.title"),
                  icons: ["html", "scss", "react", "mongodb", "mongoose", "express", "node"]
                },
              ]}
            />
          </SectionItem>
        </Section>

        {/* About Me */}
        <Section title={t("aboutMe.title")}>
          <div>About me</div>
        </Section>

        {/* Contacts */}
        <Section title={t("contacts.title")}>
          <div>Contacts</div>
        </Section>
      </div>
    </GuestLayout>
  );
};

export default Home;
