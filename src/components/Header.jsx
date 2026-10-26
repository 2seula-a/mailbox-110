
import "./Header.css";

const BOOK_URL = "https://www.yes24.com/Product/Goods/110832417";
function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="#home" className="header-logo">
          <img
            className="logo-icon"
            src={`${import.meta.env.BASE_URL}favicon-2.png`}
            alt=""
            aria-hidden="true"
          />
          <span>사서함 110</span>
        </a>

        <nav className="header-nav">
          <a href="#story">책 이야기</a>
          <a href="#quotes">마음에 남는 문장</a>
          <a href="#author">작가 소개</a>
        </nav>

        <a
          href={BOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="header-purchase"
        >
          책 구매하기 ↗
        </a>
      </div>
    </header>
  );
}

export default Header;
