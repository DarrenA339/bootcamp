import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to Flashcards!!!</h1>
      <p>Select an option below to get started:</p>
      <div>
        <Link to="/viewer">Go to Card Viewer</Link>
      </div>
      <div>
        <Link to="/editor">Go to Card Editor</Link>
      </div>
    </div>
  );
};

export default Homepage;
