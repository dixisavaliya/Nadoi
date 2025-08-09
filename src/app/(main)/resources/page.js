import React, { Suspense } from 'react';
import Resources from './Resources';

export default function ResourcesPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Resources />
      </Suspense>
    </>
  );
}