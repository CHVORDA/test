// App.js
import React, { useState , Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './component/IndexPage';
import GalleryPage from './component/GalleryPage';
import ContactPage from './component/ContactPage';
import './App.css';


function App() {
  const [page, setPage] = useState('index');

  const navigateTo = (newPage) => {
    setPage(newPage);
  };

  let content = null;

  switch (page) {
    case 'index':
      content = <IndexPage navigateTo={navigateTo} />;
      break;
    case 'gallery':
      content = <GalleryPage />;
      break;
    case 'contact':
      content = <ContactPage />;
      break;
    default:
      content = <div>Page not found.</div>;
  }

  return (
    <div>
      <Navbar navigateTo={navigateTo} />
      {content}
    </div>
  );
}

function Navbar({ navigateTo }) {
  return (
    <nav>
        <button onClick={() => navigateTo('index')}>Home</button>
        <button onClick={() => navigateTo('gallery')}>Gallery</button>
        <button onClick={() => navigateTo('contact')}>Contact</button>
    </nav>
  );
}

class Place extends Component {
  render() {
      return (
          <Fragment>
          <IndexPage />
          <GalleryPage />
           <ContactPage />    
          </Fragment>
      )
  }
}

export default App;
