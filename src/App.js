import './App.css';
import { SmoothScroll, LayoutProvider } from './components/common/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Form, EventsPage, MainPage,FAQ, Login, Register } from './pages/index';

function App() {
  return (
    <SmoothScroll>
      <Router>
        <LayoutProvider>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
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
