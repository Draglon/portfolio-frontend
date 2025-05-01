"use client";
import { useTranslations } from "next-intl";

import { Text } from "@/views/shared/antd/Typography";

const GuestFooter = () => {
  const t = useTranslations("Home");

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__copyright">
          <Text className="footer__text">
            {t("copyright")}
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;
