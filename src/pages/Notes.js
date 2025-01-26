import React, { useContext, useEffect } from 'react';
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
      return <div>Loading Notes Page</div>;
    }

    const { page, content } = data[pageId];
  
    return (
      <div>
        <h1>{page.fields.title}</h1>
        
        {content.itemCollection && content.itemCollection.length > 0 ? (
          <div className="item-collection">
            <h2>All Notes</h2>
            {content.itemCollection.map((item) => {
              const hasCards = item.fields.components && item.fields.components.some(component => component.sys.contentType.sys.id === 'card');

              return (
                <div key={item.sys.id} className="item">
                  <h3>{item.fields.internalName}</h3>
                  
                  {hasCards ? (
                    <div className="card-section">
                      {item.fields.components.map((component) => {
                        if (component.sys.contentType.sys.id === 'card') {
                          return (
                            <div key={component.sys.id} className="card">
                              <h4>{component.fields.title}</h4>
                              {component.fields.subjects && component.fields.subjects.length > 0 && (
                                <ul>
                                  {component.fields.subjects.map((subject, index) => (
                                    <li key={index}>
                                      {subject}
                                    </li>
                                  ))}
                                </ul>
                              )}
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
            })}
          </div>
        ) : null} 
      </div>
    );
};
  
export default NotesPage;
