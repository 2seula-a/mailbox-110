
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            <img
              className="footer-logo-icon"
              src={`${import.meta.env.BASE_URL}favicon-2.png`}
              alt=""
              aria-hidden="true"
            />
            <span>사서함 110</span>
          </a>

          <p>한 권의 책을 위한 작은 공간.</p>
        </div>

        <p className="footer-disclaimer">
        본 사이트는 개인 포트폴리오를 위한 비공식 도서 리디자인 프로젝트입니다.
        <br />
        책 표지는 창작 콘셉트 이미지로, 실제 출간본과 다릅니다.
        </p>


        <div className="footer-message">
          세상의 모든 사랑이 무사하기를
        </div>
      </div>
    </footer>
  );
}

export default Footer;
