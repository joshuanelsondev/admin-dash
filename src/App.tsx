//App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage';
import Dashboard from './components/Dashboard/Dashboard';

function Layout() {
  return (
    <div className='layout'>
      <Dashboard />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router basename="/admin-dash">
      <Layout />
    </Router>
  );
}

export default App;
