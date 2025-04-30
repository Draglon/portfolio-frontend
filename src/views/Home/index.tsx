"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

import GuestLayout from "@/views/layouts/GuestLayout";
import { Title } from "@/views/shared/antd/Typography";

import AirRelocateSRC from "@/assets/image/portfolio/AirRelocate.png";
import RubyGarageSRC from "@/assets/image/portfolio/RubyGarage.png";
import ExpertBoxSRC from "@/assets/image/portfolio/ExpertBox.png";

const Home = () => {
  const t = useTranslations("Home");

  return (
    <GuestLayout>
      <div className="page__container">
        {/* Portfolio */}
        <div className="section">
          <div className="section__wrapper">
            <Title className="section__title" level={2}>
              {t("title")}
            </Title>

            <div className="section__item">
              <Title className="section__subtitle" level={2}>
                Markup development
              </Title>
              <div className="gallery">
                <figure className="gallery__item">
                  <a href="https://tailwindcss-template-flame.vercel.app/" target="_blank" className="gallery__link">
                    <Image src={AirRelocateSRC} className="gallery__img" height="200" alt="Air Relocate" />
                  </a>
                </figure>
                <figure className="gallery__item">
                  <a href="https://rubygarage.org/" target="_blank" className="gallery__link">
                    <Image src={RubyGarageSRC} className="gallery__img" height="200" alt="RubyGarage" />
                  </a>
                </figure>
                <figure className="gallery__item">
                  <a href="https://expertbox.io/" target="_blank" className="gallery__link">
                    <Image src={ExpertBoxSRC} className="gallery__img" height="200" alt="ExpertBox" />
                  </a>
                </figure>
                <figure className="gallery__item">
                  <a href="https://tailwindcss-template-flame.vercel.app/" target="_blank" className="gallery__link">
                    <Image src={AirRelocateSRC} className="gallery__img" height="200" alt="ExpertBox" />
                  </a>
                </figure>
                <figure className="gallery__item">
                  <a href="https://tailwindcss-template-flame.vercel.app/" target="_blank" className="gallery__link">
                    <Image src={AirRelocateSRC} className="gallery__img" height="200" alt="ExpertBox" />
                  </a>
                </figure>
              </div>
            </div>

            <div className="section__item">
              <Title className="section__title" level={2}>
                MERN development
              </Title>
              <div className="gallery">
                <figure className="gallery__item">
                  <a href="https://mern-fe-cv-gen.vercel.app/en" target="_blank" className="gallery__link">
                    <Image src={AirRelocateSRC} className="gallery__img" height="200" alt="CV generation" />
                  </a>
                </figure>

                <figure className="gallery__item">
                  <a href="https://mern-fe-blog.vercel.app/" target="_blank" className="gallery__link">
                    <Image src={AirRelocateSRC} className="gallery__img" height="200" alt="Blog" />
                  </a>
                </figure>
              </div>
            </div>


          </div>
        </div>
      </div>
    </GuestLayout>
  );
};

export default Home;
