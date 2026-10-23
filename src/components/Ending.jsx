import Footer from "./Footer";
import "./Ending.css";

function Ending() {
  return (
    <section className="ending-section" id="purchase">
      <div className="ending-container">
        <div className="ending-content">
          <p className="ending-subtitle">
            다음 편지는, 당신의 책장에서.
          </p>

          <div className="ending-divider" />

          <h2 className="ending-title">
            한 권의 이야기를
            <br />
            당신의 일상에 들여보세요.
          </h2>

          <a
            href="https://product.kyobobook.co.kr/detail/S000061451738"
            target="_blank"
            rel="noopener noreferrer"
            className="ending-button"
          >
            책 상세 정보 보기 ↗
          </a>
        </div>
      </div>

      <Footer/>
    </section>
  );
}

export default Ending;
