import React, { Suspense } from 'react';
import NewsArticles from './NewsArticles';

export default function NewsArticlesPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <NewsArticles />
      </Suspense>
    </>
  );
}