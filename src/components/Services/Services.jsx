import "./Services.css";
import { FaCarSide, FaShieldAlt, FaClock, FaGem } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaCarSide />,
      title: t("services.items.1.title"),
      text: t("services.items.1.text"),
    },
    {
      icon: <FaShieldAlt />,
      title: t("services.items.2.title"),
      text: t("services.items.2.text"),
    },
    {
      icon: <FaClock />,
      title: t("services.items.3.title"),
      text: t("services.items.3.text"),
    },
    {
      icon: <FaGem />,
      title: t("services.items.4.title"),
      text: t("services.items.4.text"),
    },
  ];

  return (
    <section id="services" className="services reveal">
      <div className="container">
        <h2 className="section-title">{t("services.title")}</h2>
        <p className="section-subtitle">{t("services.subtitle")}</p>

        <div className="services__grid">
          {services.map((item, index) => (
            <article className="service-card reveal" key={index}>
              <div className="service-card__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
