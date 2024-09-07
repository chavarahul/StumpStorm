import './App.css';
import Footer from './components/common/footer';
import Header from './components/common/header';
import Loader from './components/common/Loader';
import SmoothScroll from './components/common/SmmothScroll';
import Page2Bottom from './components/landing-components/about';
import Hero from './components/landing-components/hero';
import ScrollText from './components/landing-components/scrollText';
import Page4 from './components/landing-components/tournaments';
import Video from './components/landing-components/video';

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Header />
      <Hero />
      <Video/>
      <ScrollText/>
      <Page2Bottom/>
      <Page4/>
      <Footer/>
    </SmoothScroll>
  );
}

export default App;
