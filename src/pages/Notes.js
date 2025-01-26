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
      return <div>Loading...</div>;
    }
