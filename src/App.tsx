import React from 'react';
import About from './About/About';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="Wrapper">
      <Header />
      <About />
      <Projects displayCount={4} />
    </div>
  );
}

export default App;
