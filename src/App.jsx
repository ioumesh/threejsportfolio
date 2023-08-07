import { styled } from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Work from "./components/Work";

function App() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    color: white;
    background:url("./img/bg.jpeg");
    &::-webkit-scrollbar {
      display: none;
    }
  `;
  return (
    <>
      <Container>
        <Hero />
        <About />
        <Work />
        <Contact />
      </Container>
    </>
  );
}

export default App;
