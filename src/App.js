import './App.css';
import { SmoothScroll, LayoutProvider } from './components/common/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form, EventsPage, MainPage } from './pages/index';
import FAQ from './pages/FAQ';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <LayoutProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/events' element={<EventsPage />}  />
            <Route path='/form' element={<Form />} />
            <Route path='/faq' element={<FAQ />} />
          </Routes>
        </LayoutProvider>
      </Router>
    </SmoothScroll>
  );
}

export default App;
