import React, { Suspense } from 'react';
import About from './About';

export default function AboutPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    </>
  );
}