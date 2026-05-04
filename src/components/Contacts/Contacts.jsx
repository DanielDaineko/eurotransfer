import "./Contacts.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contacts() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <h2 className="section-title">{t("contacts.title")}</h2>
        <p className="section-subtitle">{t("contacts.subtitle")}</p>

        <div className="contacts__card">
          <div className="contacts__item">
            <FaPhoneAlt />
            <a href="tel:+37258141777">+372 5814 1777</a>
          </div>

          <div className="contacts__item">
            <FaEnvelope />
            <a href="mailto:info@estoniatransfer.ee">info@estoniatransfer.ee</a>
          </div>

          <div className="contacts__socials">
            <a
              href="Https://wa.me/37258141777"
              target="_blank"
              rel="noreferrer"
              className="contacts__social contacts__social--whatsapp"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="https://t.me/Semkopli82"
              target="_blank"
              rel="noreferrer"
              className="contacts__social contacts__social--telegram"
            >
              <FaTelegramPlane />
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
