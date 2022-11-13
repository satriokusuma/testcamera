import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function App() {

  const [scanData, setScanData] = useState([]);
  const [messageError, setMessageError] = useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  };



  const handleScanWebCam = (result) => {
    if (result) {

      try {
        setScanData(JSON.parse(result));

      } catch (error) {
        console.log(error);
        setMessageError('QR Code bukan Tiket TFB 2022');
      }

    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ backgroundColor: 'white' }}>
          <QrReader
            style={{ width: '100%' }}
            videoContainerStyle={{ paddingTop: 0, paddingLeft: '8px', paddingRight: '8px' }}
            videoStyle={{ position: 'relative' }}
            delay={300}
            onError={handleErrorWebCam}
            onResult={handleScanWebCam}
            constraints={{ facingMode: 'environment' }}
          />
        </div>

      </header>

    </div>
  );
}

export default App;
