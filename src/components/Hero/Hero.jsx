import "./Hero.css";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero reveal">
      <div className="hero__bg"></div>
      <div className="hero__overlay"></div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__subtitle">{t("hero.subtitle")}</p>

          <h1 className="hero__title">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            <span>{t("hero.title3")}</span>
          </h1>

          <p className="hero__text">{t("hero.text")}</p>
        </div>

        <div className="hero__car-wrap">
          <img
            src="/images/car.png"
            alt="EuroTransfer car"
            className="hero__car"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
