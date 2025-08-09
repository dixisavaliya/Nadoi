import React, { Suspense } from 'react';
import Home from './Home';

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </>
  );
}