// App.js
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import MainComponent from './MainComponent'; // Assuming this is the path to your MainComponent component

const App = () => {
  return (
    <PaperProvider>
      <MainComponent />
    </PaperProvider>
  );
};

export default App;
