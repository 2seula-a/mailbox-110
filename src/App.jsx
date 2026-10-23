
import Header from "./components/Header";
import Hero from "./components/Hero";
import BookStory from "./components/BookStory";
import QuoteSection from "./components/QuoteSection";
import Author from "./components/Author";
import Ending from "./components/Ending";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero />
        <BookStory />
        <QuoteSection />
        <Author />
        <Ending />
      </main>
    </div>
  );
}

export default App;
