import './App.css';
import Header from './components/common/header';
import Loader from './components/common/Loader';
import SmoothScroll from './components/common/SmmothScroll';
import Hero from './components/landing-components/hero';

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <Header />
      <Hero />
    </SmoothScroll>
  );
}

export default App;
