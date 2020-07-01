import React from 'react';
import FileSelector from './components/FileSelector';
import LazySlider from './components/LazySlider';
import './App.css';

function App() {
  return (
    <div className="App">
      <FileSelector />
      <hr />
      <LazySlider />
    </div>
  );
}

export default App;
