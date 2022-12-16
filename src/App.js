import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


const App = () => {
  return (
  <>
    <Header />
    <Home />
    <CatIndex />
    <CatShow />
    <CatNew />
    <CatEdit />
    <NotFound />
    <Footer />
  </>
  );
}

export default App;
