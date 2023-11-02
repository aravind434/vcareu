import './App.css';
import { Outlet } from 'react-router-dom';

//firebase
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { firebaseConfig } from './firebase';
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  return (
    <div className="home">
      <Outlet/>
    </div>
  );
}

export default App;
