
import { useEffect, useRef, useState } from "react";
import "./QuoteSection.css";

function QuoteSection() {
  const [showToast, setShowToast] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleCopy = async () => {
    const quote = "네 사랑이 무사하기를,\n내 사랑도 무사하니까.";

    try {
      await navigator.clipboard.writeText(quote);

      setShowToast(true);

      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      console.error("문장 복사 실패:", error);
      alert("문장을 복사하지 못했습니다.");
    }
  };

  return (
    <section className="quote-section" id="quotes">
      <div className="quote-container">
        <div className="quote-label">
          <span>LETTER 2 / 마음에 남는 문장</span>
          <div className="quote-label-line" />
        </div>

        <div className="quote-content">
          <h2 className="quote-text">
            네 사랑이 무사하기를,
            <br />
            내 사랑도 무사하니까.
          </h2>

          <p className="quote-source">
            《사서함 110호의 우편물》 중에서
          </p>

          <button
            className="quote-button"
            type="button"
            onClick={handleCopy}
          >
            문장 간직하기 ↗
          </button>
        </div>
      </div>

      {showToast && (
        <div className="quote-toast" role="status">
          문장을 복사했어요.
        </div>
      )}
    </section>
  );
}

export default QuoteSection;
