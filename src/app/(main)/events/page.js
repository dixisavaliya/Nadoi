import React, { Suspense } from 'react';
import Events from './Events';

export default function EventsPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Events />
      </Suspense>
    </>
  );
}