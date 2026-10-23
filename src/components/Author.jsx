
import "./Author.css";

function Author() {
  return (
    <section className="author-section" id="author">
      <div className="author-container">
        <div className="author-label">
          <span>LETTER 3 / 작가 소개</span>
          <div className="author-label-line" />
        </div>

        <div className="author-content">
          <div className="author-name">
            <span className="author-eyebrow">Writer</span>
            <h2>이도우</h2>
            <span className="author-english">
            <span className="author-english-lee">LEE</span> DO WOO
            </span>
          </div>

          <div className="author-description">
            <h3>일상 사이에 머무는 마음을 쓰다.</h3>

            <p>
              이도우는 평범한 일상 속에서 반짝이는 마음의 순간을
              섬세하고 서정적인 시선으로 포착해온 작가입니다.
              장편소설 「잠옷을 입으렴」, 「날씨가 좋으면 찾아가겠어요」,
              「밤은 이야기하기 좋은 시간이니까요」 등 따뜻하고 깊이 있는
              이야기를 꾸준히 선보이고 있습니다.
            </p>

            <a
              href="https://search.kyobobook.co.kr/search?keyword=이도우"
              target="_blank"
              rel="noopener noreferrer"
              className="author-link"
            >
              작가의 다른 작품 보기 ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Author;
