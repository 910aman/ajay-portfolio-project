// src/App.jsx
import './App.css';
import './components/style.css'
//Components
import {
  Header, Hero, Gallery, Loading, AboutSection, Category,
  ServiceSection, Portfolio, Footer, BackToTop, CustomCursor
} from './components/Index';

//Hooks
import useScrollReveal from './hooks/UseScroll';
import useScrollAnimation from './hooks/useScrollAnimation';

function App() {

  useScrollAnimation();
  useScrollReveal();

  return (
    <>
      <div className="App bg-smokey-black text-white font-gordita text-[1.6rem] leading-[2.15] overflow-x-hidden">
        <Loading />
      </div>

      <Header />
      <main className='' >
        <section data-scroll className="section">
          <Hero />
        </section>
        <section data-scroll className="section">
          <Gallery />
        </section>
        <section data-scroll className="section">
          <Category />
        </section>
        <section data-scroll className="section">
          <AboutSection />
        </section>
        <section data-scroll className="section">
          <ServiceSection />
        </section>
        <section data-scroll className="section">
          <Portfolio />
        </section>
      </main >
      <Footer />
      <BackToTop />
      <CustomCursor />

    </>
  );
}

export default App;