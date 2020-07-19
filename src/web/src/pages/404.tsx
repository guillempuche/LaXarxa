import React from "react";
import { useTranslation } from "react-i18next";

import Link from "../components/LinkSameLanguage";

const NotFound: React.FC = () => {
  const { t } = useTranslation("general");
  return (
    <div>
      <h1>{t("404.title")}</h1>
      <p>
        {t("404.text")} <Link to="/">{t("404.home")}</Link>
      </p>
    </div>
  );
};

export default NotFound;
