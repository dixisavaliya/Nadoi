import React, { Suspense } from 'react';
import RequestCeus from './RequestCeus';

export default function RequestCeusPage() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RequestCeus />
      </Suspense>
    </>
  );
}