import React from 'react';
import { ContentfulProvider } from './ContentfulContext'; // Import the Contentful context provider
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import NotesPage from './pages/Notes'; // Import the Notes Page Component
import NoteDetailsPage from './pages/NotesDetails';

const App = () => {
  return (
    <ContentfulProvider>
      <Router>
        <Routes>
          <Route path="/notes" element={<NotesPage />} /> 
          <Route path="/notes/:slug" element={<NoteDetailsPage />} />
        </Routes>
      </Router>
    </ContentfulProvider>
  );
};

export default App;
