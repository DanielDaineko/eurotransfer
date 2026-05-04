import "./MapSection.css";
import {
  FaCheck,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MapSection() {
  const { t } = useTranslation();

  return (
    <section id="map" className="map-section reveal">
      <div className="container map-section__grid">
        <div className="map-info">
          <h2>{t("mapSection.title")}</h2>
          <p>{t("mapSection.subtitle")}</p>

          <div className="map-info__item">
            <FaCheck />
            <span>{t("mapSection.card1Title")}</span>
          </div>

          <div className="map-info__item">
            <FaCheck />
            <span>{t("mapSection.card2Title")}</span>
          </div>
        </div>

        <div className="map-visual">
          <iframe
            title="Estonia map"
            src="https://www.google.com/maps?q=Estonia&output=embed"
            loading="lazy"
          ></iframe>
        </div>

        <div id="contacts" className="contact-card">
          <h2>{t("contacts.title")}</h2>

          {/* Русский номер */}
          <a href="tel:+37258141777" className="contact-item">
            <FaPhoneAlt />
            <div>
              <span>+372 5814 1777</span>
              <small>{t("contacts.phoneRu")}</small>
            </div>
          </a>

          {/* EN + ET */}
          <a href="tel:+37256227666" className="contact-item">
            <FaPhoneAlt />
            <div>
              <span>+372 5622 7666</span>
              <small>{t("contacts.phoneEnEt")}</small>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:Info@eurotransfer.ee" className="contact-item">
            <FaEnvelope />
            <div>
              <span>Info@eurotransfer.ee</span>
              <small>{t("contacts.email")}</small>
            </div>
          </a>

          <div className="contact-card__buttons">
            <a
              href="https://wa.me/37258141777"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a href="https://t.me/Semkopli82" target="_blank" rel="noreferrer">
              <FaTelegramPlane />
              Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
