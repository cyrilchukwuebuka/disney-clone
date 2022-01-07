import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path='repo/:repoID' element={<RepoDetail />} /> */}
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
      App
        {/* <Outlet /> */}
      </main>
      <Footer />
    </div>
  );
}
