import Footer from './components/Footer';
import Header from './components/Header';
import VerticalHeaderTop from './components/VerticalHeaderTop';
import Content from './components/Content';

function App() {
  return (
    <div className="bt-page-wrap" id="top">
      <VerticalHeaderTop />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;