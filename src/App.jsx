
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookStory from "./components/BookStory";
import QuoteSection from "./components/QuoteSection";
import Author from "./components/Author";
import Ending from "./components/Ending";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <BookStory />
        <QuoteSection />
        <div
          className="closing-flow"
          style={{
            "--closing-background": `url(${import.meta.env.BASE_URL}images/backgrounds/ending-bg.png)`,
          }}
        >
          <Author />
          <Ending />
        </div>
      </main>
    </div>
  );
}

export default App;
