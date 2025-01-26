import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { ContentfulContext } from '../ContentfulContext';

const NotesPage = () => {
  const { data, loading, fetchPageData } = useContext(ContentfulContext);
  const pageId = 'notes';
  
  useEffect(() => {
    if (!data[pageId]) {
      fetchPageData(pageId); 
    }
  }, [data, fetchPageData, pageId]);

  if (loading || !data[pageId]) {
    return <div className="loading-state">Loading Notes Page...</div>;
  }

  const { page, content } = data[pageId];
  
  return (
    <section className="notes-container">
      <h1>{page.fields.title}</h1>

      {content.itemCollection && content.itemCollection.length > 0 ? (
        content.itemCollection.map((item, index) => {
          const hasCards = item.fields.components && item.fields.components.some(component => component.sys.contentType.sys.id === 'card');
          
          return (
            <div key={item.sys.id} className="note-item">
              {hasCards ? (
                <div className="card-section">
                  {item.fields.components.map((component) => {
                    if (component.sys.contentType.sys.id === 'card') {
                      return (
                        <div key={component.sys.id} className="note-card">
                          <h2>{component.fields.title}</h2>
                          <Link to={`/notes/${component.fields.slug}`} className="view-more-btn">
                            View more
                          </Link>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p>No notes found.</p>  
              )}
            </div>
          );
        })
      ) : null}
    </section>
  );
};

export default NotesPage;
