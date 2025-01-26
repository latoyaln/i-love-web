// src/App.js
import React from 'react';
import { ContentfulProvider } from './ContentfulContext'; // Import the Contentful context provider
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import NotesPage from './pages/Notes'; // Import the Notes Page Component

const App = () => {
  return (
    <ContentfulProvider>
      <Router>
        <Routes>
          <Route path="/notes" element={<NotesPage />} /> {/* Notes page route */}
        </Routes>
      </Router>
    </ContentfulProvider>
  );
};

export default App;
