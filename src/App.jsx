import logo from './logo.svg';
import './App.css';
import Landing from './Landing';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="home">
      <Outlet/>
    </div>
  );
}

export default App;
