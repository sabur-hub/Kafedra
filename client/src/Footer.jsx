import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">Кафедра</h2>
          <p className="footer-description">
          кафедраи технология ва низоми иттилооти дар иктисодиёт
          </p>
        </div>
        <div className="footer-column">
          <h3>Тамос</h3>
          <ul className="footer-contact">
            <li>Суроға: 7 ум корпус</li>
            <li>Телефон: +992 970074343</li>
            <li>Email: dmt@mail.tj</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Истинодҳои муфид</h3>
          <ul className="footer-links">
            <li><a href="/about">Дар бораи кафедра</a></li>
            <li><a href="/">Асосӣ</a></li>
            <li><a href="/staff">Устодон</a></li>
            <li><a href="/chat">Ёрдамчии AI</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Norov. Ҳама ҳуқуқҳо ҳифз шудаанд.</p>
        <div className="footer-socials">
          <a href="https://tnu.tj/index.php/ru/glavnaja/" aria-label="ВКонтакте">Сомона</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
