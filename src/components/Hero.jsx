
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-eyebrow">
            A LETTER THAT STAYS WITH YOU
          </p>

          <p className="hero-subtitle">
            당신의 마음에, 천천히 도착할 이야기
          </p>

          <h1 className="hero-title">
            사서함 110호의
            <br />
            우편물
          </h1>

          <p className="hero-author">이도우 장편소설</p>

          <p className="hero-description">
            보이지 않는 곳에서도, 좋은 마음은
            <br />
            언제나 어떻게든 도착하니까요.
          </p>

          <a href="#story" className="hero-button">
            첫 번째 편지 펼치기 ↗
          </a>
        </div>

        <div className="hero-visual">
          <img
            src={`${import.meta.env.BASE_URL}images/book/book-cover.png`}
            alt="사서함 110호의 우편물 오리지널 콘셉트 책 표지"
            className="hero-book"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
