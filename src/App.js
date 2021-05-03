import React from 'react';

import './App.css';
import LineChart from './components/Chart';
import Header from './components/Header'
import Footer from './components/Footer'

function App(){
    return (
      <div >
        <div className="header">
        <Header />
        </div>
        <div className='chart'>
        <LineChart />
        </div>
        <div className="footer">
        <Footer />
          </div>
      </div>
      
    );
  }


export default App;