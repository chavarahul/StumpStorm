import './App.css';
import { SmoothScroll, Header, Footer } from './components/common/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form,EventsPage,MainPage } from './pages/index';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/events' element={<EventsPage/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        <Footer />
      </Router>
    </SmoothScroll>
  );
}

export default App;
