import "./Footer.css";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer__bottom">
        <a href="#hero" className="footer__logo">
          <span>ET</span>
          <small>
            EURO
            <br />
            TRANSFER
          </small>
        </a>

        <div className="footer__info">
          <p>© 2026 EuroTransfer</p>
          <p>{t("footer.rights")}</p>
          <p className="footer__company">{t("footer.company")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
