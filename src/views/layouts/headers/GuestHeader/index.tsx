"use client";
import { useTranslations } from "next-intl";

import { Title } from "@/views/shared/antd/Typography";
import Navigation from "@/views/shared/Navigation";
// import ThemeSwitcher from "@/views/shared/ThemeSwitcher";
// import LocalSwitcherSelect from "@/views/shared/LocalSwitcherSelect";

const GuestHeader = () => {
  const t = useTranslations("Home");

  return (
    <header className="header">
      <div className="header__wrapper">
        <Title className="header__title">{t("fullname")}</Title>
        <Navigation />
        {/* <LocalSwitcherSelect />
        <ThemeSwitcher /> */}
      </div>
    </header>
  );
};

export default GuestHeader;
