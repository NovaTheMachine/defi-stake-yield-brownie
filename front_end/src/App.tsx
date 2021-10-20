import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'

function App() {
  return (
    <DAppProvider config={{    
supportedChains:[ChainId.Kovan,ChainId.Rinkeby]
    }}>
      <App />
    </DAppProvider>
  );
}

export default App;
