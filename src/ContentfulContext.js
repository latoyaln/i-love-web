import React, { createContext, useState, useEffect } from 'react';
import client from './contentfulClient';

export const ContentfulContext = createContext();

export const ContentfulProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchContentType = async (contentType) => {
    try {
      const response = await client.getEntries({
        content_type: contentType,
      });
      return response.items;
    } catch (error) {
      console.error(`Error fetching ${contentType} data from Contentful:`, error);
    }
  };

  const fetchPageData = async (pageId) => {
    try {
      const pageResponse = await client.getEntries({
        content_type: 'page',
        'fields.slug': pageId, 
      });

      const page = pageResponse.items[0];
      if (!page) {
        throw new Error('Page not found');
      }
      const pageData = {
        page: page,
        content: {},
      };

      const references = page.fields.references || [];
      for (const reference of references) {
        const contentType = reference.sys.contentType.sys.id; 
        if (!pageData.content[contentType]) {
          const contentData = await fetchContentType(contentType);
          pageData.content[contentType] = contentData;
        }
      }

      setData((prevData) => ({
        ...prevData,
        [pageId]: pageData,
      }));

      setLoading(false);
    } catch (error) {
      console.error('Error fetching page data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPageData('home'); 
  }, []);

  return (
    <ContentfulContext.Provider value={{ data, loading, fetchPageData }}>
      {children}
    </ContentfulContext.Provider>
  );
};
