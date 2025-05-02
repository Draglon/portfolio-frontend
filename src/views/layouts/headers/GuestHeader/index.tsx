"use client";
import { useTranslations } from "next-intl";

import { Title } from "@/views/shared/antd/Typography";
// import Navigation from "@/views/shared/Navigation";
// import ThemeSwitcher from "@/views/shared/ThemeSwitcher";
// import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";

const GuestHeader = () => {
  const t = useTranslations("Home");

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="mb-16">
          <Title className="header__title" level={1}>{t("fullname")}</Title>
          <Title className="header__subtitle" level={3}>
            <span>{t("position")}</span>
          </Title>
        </div>
        {/* <Navigation /> */}
        {/* <LocalSwitcherSelect /> */}
        {/* <ThemeSwitcher /> */}
      </div>
    </header>
  );
};

export default GuestHeader;
