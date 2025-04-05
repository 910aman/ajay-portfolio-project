/* eslint-disable react/jsx-key */
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

  const sections = [
    <Hero />,
    <Gallery />,
    <Category />,
    <AboutSection />,
    <ServiceSection />,
    <Portfolio />,
  ];

  return (
    <>
      <div className="App bg-smokey-black text-white font-gordita text-[1.6rem] leading-[2.15] overflow-x-hidden">
        <Loading />
      </div>

      <Header />
      <main className='' style={{ userSelect: 'none' }} >
        {sections.map((Component, index) => (
          <section key={index} data-scroll className="section">
            {Component}
          </section>
        ))}
      </main >
      <Footer />
      <BackToTop />
      <CustomCursor />

    </>
  );
}

export default App;