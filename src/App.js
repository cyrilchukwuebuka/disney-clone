import { Route, BrowserRouter as Router, Routes, Outlet } from 'react-router-dom';
import './App.css';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='detail' element={<Detail />} />
            <Route path='login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const Layout = () => {
  return (
    <div className='app__layout'>
      <Header />
      <main className='app__container'>
        <Outlet />
      </main>
    </div>
  );
}
