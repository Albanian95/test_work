import React from 'react';
import { Header } from './components/Header';
import { HexagonMain } from './components/HexagonMain';


const MobilWeb = () => {
  return (window.innerWidth <= 375 && window.innerHeight <= 600 );
}

function App() {
  return (
      MobilWeb()
      ? <div className="web_mob">
          <span>пожалуйста, запустите этот сайт с рабочего стола</span>
        </div>

      : <div>
          <Header />
          <HexagonMain />
        </div>
        )
}

export default App;
