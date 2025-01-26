import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { ContentfulContext } from '../ContentfulContext';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';  // Import framer-motion

const NoteDetailsPage = () => {
  const { slug } = useParams(); 
  const { data, loading } = useContext(ContentfulContext);  
  const [note, setNote] = useState(null); 

  useEffect(() => {
    if (data['notes']) {
      const card = data['notes'].content.itemCollection.flatMap(item => 
        item.fields.components.filter(component => component.sys.contentType.sys.id === 'card' && component.fields.slug === slug)
      )[0];
      
      setNote(card);
    }
  }, [slug, data]);

  if (loading || !note) {
    return <div className="loading-state">Loading Note Details...</div>;
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1>{note.fields.title}</h1>
      <div>
        <h2>Subjects</h2>
        {note.fields.subjects && note.fields.subjects.length > 0 ? (
          <ul>
            {note.fields.subjects.map((subject, index) => (
              <li key={index}>{subject}</li>
            ))}
          </ul>
        ) : (
          <p>No subjects available.</p>
        )}
      </div>
      <div>
        <h2>Content</h2>
        <ReactMarkdown className="markdown-content">
        {note.fields.paragraph || 'No description available.'}
        </ReactMarkdown>      
        </div>
    </motion.section>
  );
};

export default NoteDetailsPage;
