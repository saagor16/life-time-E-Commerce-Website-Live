import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>

        <Route path='/' exact={true} Component={Home}>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
