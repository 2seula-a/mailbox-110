
import "./BookStory.css";

function BookStory() {
  return (
    <section className="story-section" id="story">
      <div className="story-keywords">
        <div className="story-keywords-inner">
          <span>조용한 설렘</span>
          <span className="keyword-star">✳</span>
          <span>라디오와 일상</span>
          <span className="keyword-star">✳</span>
          <span>서로에게 닿는 마음</span>
          <span className="keyword-star">✳</span>
          <span>이도우의 문장들</span>
        </div>
      </div>

      <div className="story-container">
        <div className="story-label">
          <span>LETTER 1 / 책 이야기</span>
          <div className="story-label-line" />
        </div>

        <div className="story-intro">
          <div className="story-title-area">
            <h2>
              마음에도
              <br />
              주파수가 있다면,
            </h2>
          </div>

          <div className="story-description">
            <h3>
              함께 일하는 두 사람의 일상에
              <br />
              조금씩 다른 온도가 스며듭니다.
            </h3>

            <p>
              《사서함 110호의 우편물》은 라디오 방송국을 배경으로,
              사랑과 삶의 의미를 돌아보는 이도우의 장편소설입니다.
              <br />
              성큼 다가서기보다 마음의 결을 따라
              천천히 읽게 되는 이야기입니다.
            </p>

            <p>
              누군가를 좋아하는 마음, 관계 앞에서의 망설임.
              <br />
              익숙해서 더 오래 머물게 되는 감정들을 만나보세요.
            </p>
          </div>
        </div>

        <div className="story-characters">
          <div className="character">
            <p className="character-label">01 / WRITER</p>
            <h3>공진솔</h3>
            <p className="character-role">라디오 작가.</p>
            <p>
              낯을 가리고 조용하지만, 누구보다 섬세한 마음을 지녔다.
              <br />
              익숙한 일상 속에서 작은 위로를 찾으며,
              사랑 앞에서는 용기 내어 먼저 다가간다.
            </p>
          </div>

          <div className="character-divider">
            <span>서로의 일상에</span>
          </div>

          <div className="character">
            <p className="character-label">02 / PRODUCER</p>
            <h3>이건</h3>
            <p className="character-role">라디오 프로듀서.</p>
            <p>
              무뚝뚝하고 까칠하지만, 속마음은 누구보다 세심한 마음을 품고 있다.
              <br />
              지난 감정의 흔적을 간직한 채,
              새로운 사랑 앞에서 조심스럽게 진심을 마주한다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookStory;
