import React from 'react';
import ChakraProvider from './Providers/ChakraProvider';

function App() {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <div>App</div>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
